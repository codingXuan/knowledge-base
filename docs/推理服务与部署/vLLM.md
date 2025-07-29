---
title: vLLM 
---

#### **1. 核心定位：LLM推理的“高吞吐量引擎”**
vLLM是一个由**加州大学伯克利分校（UC Berkeley）的研究人员开发的、专注于提升LLM推理吞吐量（Throughput）和GPU利用率**的开源库。

我们可以用一个餐厅厨房的类比来理解它的价值：

+ **传统的推理框架**：像一个混乱的厨房。厨师（GPU）一次只能炒一桌菜（一个批次），并且必须等这桌所有菜都上齐（批次里最慢的请求完成），才能开始下一桌。如果某个客人点菜快、吃得快（短请求），他也得等着同桌吃得最慢的客人，导致厨师（GPU）大部分时间在**空闲等待**。
+ **vLLM**：则是一个配备了**智能调度系统**的现代化中央厨房。系统（vLLM）能源源不断地、见缝插针地给厨师（GPU）派发新的炒菜任务（新请求），确保厨师**永远处于忙碌状态**，极大地提升了出菜的总效率（吞吐量）。

#### **2. vLLM的“黑科技”：PagedAttention**
vLLM之所以能做到如此高效，其核心秘诀就是一项名为**PagedAttention**的创新算法。

+ **问题的根源：KV Cache的内存管理难题** 在LLM进行推理时，为了避免重复计算，会把已经计算过的中间结果（Key和Value）缓存起来，这就是**KV Cache**。这个缓存非常占用显存，并且其大小是**动态变化的、不可预测的**（因为每个用户请求的长度和生成文本的长度都不同）。 在传统框架中，需要为每个请求预留一块连续的、足够大的显存空间来存放KV Cache，这导致了：
    1. **巨大的内存浪费**：预留的空间远大于实际使用的空间。
    2. **内存碎片化**：频繁地分配和释放不同大小的内存块，导致显存中充满了无法利用的“小碎片”。
+ **PagedAttention的解决方案** PagedAttention借鉴了操作系统中经典的**虚拟内存和分页（Paging）**思想：
    1. **分块（Blocking）**：它不再为KV Cache分配连续的大块内存，而是将其切分成许多个**固定大小的小块（Blocks）**。
    2. **非连续存储**：这些小块可以像拼图一样，存储在物理显存的任何可用位置，从而**完全消除了内存碎片**。
    3. **高效共享**：对于一些复杂的场景（如并行生成多个答案），不同的生成序列可以**安全地共享**相同的KV Cache块，进一步节省了显存。

**结论**：PagedAttention通过精细化的内存管理，使得GPU显存的利用率从传统框架的60%左右，提升到了**90%以上**。

#### **3. 性能的飞跃：持续批处理 (Continuous Batching)**
正是因为PagedAttention解决了内存管理的难题，vLLM才得以实现一种更先进的批处理策略——**持续批处理**。

+ **传统静态批处理 (Static Batching)**：将一组请求打包成一个批次，一起送入GPU。GPU必须等待这个批次中**所有**的请求都生成完毕后，才能开始处理下一个批
+ **vLLM的持续批处理 (Continuous Batching)**：vLLM的调度器在每一个时间步都会检查批次中是否有任何一个请求已经完成。一旦某个请求完成，调度器会**立即将其从批次中移除，并从等待队列中取一个新的请求加入批次**。

**效果**：这种“即走即补”的策略，确保了GPU在任何时刻都在以接近100%的负荷进行有效计算，从而将**推理吞吐量提升了数倍甚至数十倍**。

#### **4. 如何使用vLLM：两种核心模式**
**A. 模式一：OpenAI兼容的API服务器（最常用）** 这是将本地模型部署成一个标准的、可被任何应用调用的RESTful API服务的模式。

1. **安装**: `pip install vllm`

**启动服务**:

2. Bash

```plain
python -m vllm.entrypoints.openai.api_server \
    --model "Qwen/Qwen3-32B-Instruct" \
    --host 0.0.0.0 \
    --port 8000
```

这条简单的命令，就会启动一个高性能的、与OpenAI API格式完全兼容的推理服务器。

**调用服务** (在另一个Python应用中):

3. Python

```plain
import openai

client = openai.OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="vllm"
)

response = client.chat.completions.create(
    model="Qwen/Qwen3-32B-Instruct",
    messages=[{"role": "user", "content": "你好，请介绍一下vLLM。"}],
    max_tokens=500
)
print(response.choices[0].message.content)
```

**B. 模式二：作为Python库进行离线推理** 您也可以在Python代码中直接使用vLLM，来进行高性能的离线批处理任务。

Python

```plain
from vllm import LLM, SamplingParams

# 准备一批需要生成的Prompt
prompts = [
    "你好，请介绍一下vLLM。",
    "量子计算的基本原理是什么？"
]

# 定义采样参数
sampling_params = SamplingParams(temperature=0.7, top_p=0.95, max_tokens=500)

# 初始化LLM引擎
llm = LLM(model="Qwen/Qwen3-32B-Instruct")

# 执行批处理生成
outputs = llm.generate(prompts, sampling_params)

# 打印结果
for output in outputs:
    prompt = output.prompt
    generated_text = output.outputs[0].text
    print(f"Prompt: {prompt}\nGenerated: {generated_text}\n")
```

**总结**：vLLM通过**PagedAttention**和**持续批处理**这两大核心创新，从根本上解决了LLM推理中的性能瓶颈，已成为开源社区**部署大规模语言模型、追求极致吞吐量**时的首选框架。对于任何希望将AIGC应用推向生产、服务于真实用户的开发者来说，掌握vLLM都是一项至关重要的技能。

