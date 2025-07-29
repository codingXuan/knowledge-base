<template><div><h4 id="_1-核心定位-llm推理的-高吞吐量引擎" tabindex="-1"><a class="header-anchor" href="#_1-核心定位-llm推理的-高吞吐量引擎"><span><strong>1. 核心定位：LLM推理的“高吞吐量引擎”</strong></span></a></h4>
<p>vLLM是一个由<strong>加州大学伯克利分校（UC Berkeley）的研究人员开发的、专注于提升LLM推理吞吐量（Throughput）和GPU利用率</strong>的开源库。</p>
<p>我们可以用一个餐厅厨房的类比来理解它的价值：</p>
<ul>
<li><strong>传统的推理框架</strong>：像一个混乱的厨房。厨师（GPU）一次只能炒一桌菜（一个批次），并且必须等这桌所有菜都上齐（批次里最慢的请求完成），才能开始下一桌。如果某个客人点菜快、吃得快（短请求），他也得等着同桌吃得最慢的客人，导致厨师（GPU）大部分时间在<strong>空闲等待</strong>。</li>
<li><strong>vLLM</strong>：则是一个配备了<strong>智能调度系统</strong>的现代化中央厨房。系统（vLLM）能源源不断地、见缝插针地给厨师（GPU）派发新的炒菜任务（新请求），确保厨师<strong>永远处于忙碌状态</strong>，极大地提升了出菜的总效率（吞吐量）。</li>
</ul>
<h4 id="_2-vllm的-黑科技-pagedattention" tabindex="-1"><a class="header-anchor" href="#_2-vllm的-黑科技-pagedattention"><span><strong>2. vLLM的“黑科技”：PagedAttention</strong></span></a></h4>
<p>vLLM之所以能做到如此高效，其核心秘诀就是一项名为<strong>PagedAttention</strong>的创新算法。</p>
<ul>
<li><strong>问题的根源：KV Cache的内存管理难题</strong> 在LLM进行推理时，为了避免重复计算，会把已经计算过的中间结果（Key和Value）缓存起来，这就是<strong>KV Cache</strong>。这个缓存非常占用显存，并且其大小是<strong>动态变化的、不可预测的</strong>（因为每个用户请求的长度和生成文本的长度都不同）。 在传统框架中，需要为每个请求预留一块连续的、足够大的显存空间来存放KV Cache，这导致了：
<ol>
<li><strong>巨大的内存浪费</strong>：预留的空间远大于实际使用的空间。</li>
<li><strong>内存碎片化</strong>：频繁地分配和释放不同大小的内存块，导致显存中充满了无法利用的“小碎片”。</li>
</ol>
</li>
<li><strong>PagedAttention的解决方案</strong> PagedAttention借鉴了操作系统中经典的**虚拟内存和分页（Paging）**思想：
<ol>
<li><strong>分块（Blocking）</strong>：它不再为KV Cache分配连续的大块内存，而是将其切分成许多个<strong>固定大小的小块（Blocks）</strong>。</li>
<li><strong>非连续存储</strong>：这些小块可以像拼图一样，存储在物理显存的任何可用位置，从而<strong>完全消除了内存碎片</strong>。</li>
<li><strong>高效共享</strong>：对于一些复杂的场景（如并行生成多个答案），不同的生成序列可以<strong>安全地共享</strong>相同的KV Cache块，进一步节省了显存。</li>
</ol>
</li>
</ul>
<p><strong>结论</strong>：PagedAttention通过精细化的内存管理，使得GPU显存的利用率从传统框架的60%左右，提升到了<strong>90%以上</strong>。</p>
<h4 id="_3-性能的飞跃-持续批处理-continuous-batching" tabindex="-1"><a class="header-anchor" href="#_3-性能的飞跃-持续批处理-continuous-batching"><span><strong>3. 性能的飞跃：持续批处理 (Continuous Batching)</strong></span></a></h4>
<p>正是因为PagedAttention解决了内存管理的难题，vLLM才得以实现一种更先进的批处理策略——<strong>持续批处理</strong>。</p>
<ul>
<li><strong>传统静态批处理 (Static Batching)</strong>：将一组请求打包成一个批次，一起送入GPU。GPU必须等待这个批次中<strong>所有</strong>的请求都生成完毕后，才能开始处理下一个批</li>
<li><strong>vLLM的持续批处理 (Continuous Batching)</strong>：vLLM的调度器在每一个时间步都会检查批次中是否有任何一个请求已经完成。一旦某个请求完成，调度器会<strong>立即将其从批次中移除，并从等待队列中取一个新的请求加入批次</strong>。</li>
</ul>
<p><strong>效果</strong>：这种“即走即补”的策略，确保了GPU在任何时刻都在以接近100%的负荷进行有效计算，从而将<strong>推理吞吐量提升了数倍甚至数十倍</strong>。</p>
<h4 id="_4-如何使用vllm-两种核心模式" tabindex="-1"><a class="header-anchor" href="#_4-如何使用vllm-两种核心模式"><span><strong>4. 如何使用vLLM：两种核心模式</strong></span></a></h4>
<p><strong>A. 模式一：OpenAI兼容的API服务器（最常用）</strong> 这是将本地模型部署成一个标准的、可被任何应用调用的RESTful API服务的模式。</p>
<ol>
<li><strong>安装</strong>: <code v-pre>pip install vllm</code></li>
</ol>
<p><strong>启动服务</strong>:</p>
<ol start="2">
<li>Bash</li>
</ol>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">python -m vllm.entrypoints.openai.api_server \</span>
<span class="line">    --model "Qwen/Qwen3-32B-Instruct" \</span>
<span class="line">    --host 0.0.0.0 \</span>
<span class="line">    --port 8000</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这条简单的命令，就会启动一个高性能的、与OpenAI API格式完全兼容的推理服务器。</p>
<p><strong>调用服务</strong> (在另一个Python应用中):</p>
<ol start="3">
<li>Python</li>
</ol>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">import openai</span>
<span class="line"></span>
<span class="line">client = openai.OpenAI(</span>
<span class="line">    base_url="http://localhost:8000/v1",</span>
<span class="line">    api_key="vllm"</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">response = client.chat.completions.create(</span>
<span class="line">    model="Qwen/Qwen3-32B-Instruct",</span>
<span class="line">    messages=[{"role": "user", "content": "你好，请介绍一下vLLM。"}],</span>
<span class="line">    max_tokens=500</span>
<span class="line">)</span>
<span class="line">print(response.choices[0].message.content)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>B. 模式二：作为Python库进行离线推理</strong> 您也可以在Python代码中直接使用vLLM，来进行高性能的离线批处理任务。</p>
<p>Python</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">from vllm import LLM, SamplingParams</span>
<span class="line"></span>
<span class="line"># 准备一批需要生成的Prompt</span>
<span class="line">prompts = [</span>
<span class="line">    "你好，请介绍一下vLLM。",</span>
<span class="line">    "量子计算的基本原理是什么？"</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line"># 定义采样参数</span>
<span class="line">sampling_params = SamplingParams(temperature=0.7, top_p=0.95, max_tokens=500)</span>
<span class="line"></span>
<span class="line"># 初始化LLM引擎</span>
<span class="line">llm = LLM(model="Qwen/Qwen3-32B-Instruct")</span>
<span class="line"></span>
<span class="line"># 执行批处理生成</span>
<span class="line">outputs = llm.generate(prompts, sampling_params)</span>
<span class="line"></span>
<span class="line"># 打印结果</span>
<span class="line">for output in outputs:</span>
<span class="line">    prompt = output.prompt</span>
<span class="line">    generated_text = output.outputs[0].text</span>
<span class="line">    print(f"Prompt: {prompt}\nGenerated: {generated_text}\n")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong>：vLLM通过<strong>PagedAttention</strong>和<strong>持续批处理</strong>这两大核心创新，从根本上解决了LLM推理中的性能瓶颈，已成为开源社区<strong>部署大规模语言模型、追求极致吞吐量</strong>时的首选框架。对于任何希望将AIGC应用推向生产、服务于真实用户的开发者来说，掌握vLLM都是一项至关重要的技能。</p>
</div></template>


