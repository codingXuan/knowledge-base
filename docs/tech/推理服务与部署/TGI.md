---
title: TGI 
---

#### **1. 核心定位：Hugging Face官方出品的“生产级”推理解决方案**
TGI (Text Generation Inference) 是一个专门为大规模语言模型设计的、功能全面且经过生产环境严苛考验的推理服务器。

作为Hugging Face的“亲儿子”，它的首要目标就是为**Hugging Face Hub**上数以万计的Transformer模型，提供一个官方的、开箱即用的、高性能的部署方案。它被广泛地应用于Hugging Face自己的产品中，如HuggingChat和Inference API服务，其稳定性和可靠性得到了充分验证。

#### **2. TGI的核心特性：功能全面，为生产而生**
TGI同样集成了当前最前沿的推理优化技术，以提供强大的性能。

+ **持续批处理 (Continuous Batching)**：和vLLM一样，TGI也采用了持续批处理技术来最大化GPU的利用率，显著提升吞吐量。
+ **张量并行 (Tensor Parallelism)**：内置了对张量并行的支持，可以轻松地将一个因太大而无法装入单张GPU的模型，拆分到多张GPU上进行协同推理。
+ **模型量化 (Quantization)**：支持在服务启动时，动态地将模型权重进行量化（例如，使用bitsandbytes的NF4或Gradio的AWQ/GPTQ），从而在几乎不损失性能的情况下，大幅降低显存占用。
+ **优化的计算核与FlashAttention**：TGI为其支持的模型，深度集成了包括**FlashAttention-2**在内的一系列高度优化的CUDA计算核，从底层保证了计算效率。
+ **水印功能 (Watermarking)**：内置了为生成文本添加水印的功能，有助于追踪AI生成内容的来源。
+ **流式输出与安全性 (Streaming & Safety)**：原生支持Token流式输出，并提供了停止序列（stop sequences）、最大Token数限制等安全功能，防止滥用。

#### **3. TGI的使用方式：以Docker为核心**
TGI的设计理念是**“容器优先”**。官方推荐的使用方式是通过Docker容器来运行，这极大地简化了部署和环境配置的复杂性。

1. **准备工作**：安装NVIDIA驱动和NVIDIA Container Toolkit。

**使用Docker命令启动服务**： 只需要一条`docker run`命令即可启动一个完整的TGI服务。

2. Bash

```plain
# 定义一个变量来存储您的Hugging Face Hub缓存目录
export MODEL_CACHE=$HOME/.cache/huggingface/hub

# 定义模型ID
export MODEL_ID=Qwen/Qwen3-32B-Instruct

# 运行Docker容器
docker run --gpus all --shm-size 1g -p 8080:80 \
    -v $MODEL_CACHE:/data \
    ghcr.io/huggingface/text-generation-inference:latest \
    --model-id $MODEL_ID
```

    - `**--gpus all**`: 将所有可用的GPU分配给容器。
    - `**-p 8080:80**`: 将主机的8080端口映射到容器的80端口。
    - `**-v $MODEL_CACHE:/data**`: 将您本地的Hugging Face缓存目录挂载到容器中，这样TGI就可以直接使用您已经下载过的模型，避免重复下载。
    - `**--model-id $MODEL_ID**`: 指定需要加载和服务的模型。

**调用服务**： 服务启动后，您可以通过标准的HTTP请求来调用它。

3. Python

```plain
import requests
import json

headers = {"Content-Type": "application/json"}
api_url = "http://localhost:8080/generate"

payload = {
    "inputs": "你好，请介绍一下Text Generation Inference (TGI)。",
    "parameters": {
        "max_new_tokens": 512,
        "temperature": 0.7
    }
}

response = requests.post(api_url, headers=headers, json=payload)
print(response.json())
```

#### **4. TGI vs. vLLM：如何进行技术选型**
| 特性 | **TGI (Hugging Face)** | **vLLM (UC Berkeley / vLLM Team)** |
| --- | --- | --- |
| **核心优势技术** | 持续批处理, FlashAttention, 全面的生产级特性 | **PagedAttention**, 持续批处理 |
| **性能表现** | 性能非常高，稳定可靠 | **通常在吞吐量上略有优势**，尤其是在长尾请求分布场景 |
| **功能丰富度** | **更高**，内置水印、更完善的安全配置、与HF生态深度集成 | 专注于核心的推理性能，功能相对精简 |
| **易用性** | **非常易用**，以Docker为核心，一条命令即可启动 | 同样易用，提供了OpenAI兼容服务器和Python库两种模式 |
| **模型支持** | 由Hugging Face官方维护，支持广泛且经过严格测试 | 社区驱动，支持同样广泛，但有时对新模型的支持速度更快 |




**选型建议**：

+ **追求极致吞TPut**：如果业务场景对**吞吐量（Throughput）的要求是第一位的，那么vLLM**通常是更优的选择，其PagedAttention技术在理论和实践中都展现了卓越的性能。
+ **追求功能全面与生态整合**：如果深度使用Hugging Face生态，需要一个**功能全面、稳定可靠、官方支持**的“全家桶”式解决方案，那么**TGI**是更稳妥、更省心的选择。
+ 在实际生产中，团队通常会对两者进行**基准测试（Benchmark）**，根据自己核心使用的模型和业务负载特点，来决定最终采用哪个框架。

**总结**：TGI是Hugging Face为整个AI社区提供的、官方的、生产级的推理服务解决方案。它以其**全面的功能、稳健的性能和与HF生态的无缝集成**而著称，是任何希望将LLM应用部署到生产环境的团队都必须考虑的重要选项。

