<template><div><h4 id="_1-核心定位-rag流程的-智能备菜工" tabindex="-1"><a class="header-anchor" href="#_1-核心定位-rag流程的-智能备菜工"><span><strong>1. 核心定位：RAG流程的“智能备菜工”</strong></span></a></h4>
<p>Text Splitters（文本分割器）是在构建RAG系统时，负责将加载进来的长文档（<code v-pre>Documents</code>）切分成多个更小的、独立的、但又在语义上相关的文本块（<code v-pre>Chunks</code>）的工具。这是进行Embedding和向量化之前的<strong>强制性预处理步骤</strong>。</p>
<h4 id="_2-为什么必须进行文本分割" tabindex="-1"><a class="header-anchor" href="#_2-为什么必须进行文本分割"><span><strong>2. 为什么必须进行文本分割？</strong></span></a></h4>
<p>直接将一整篇长文档进行Embedding是不可行且无效的，主要有两个原因：</p>
<ol>
<li><strong>适配Embedding模型的输入限制</strong>：
<ul>
<li>绝大多数Embedding模型（如BGE, M3E, OpenAI a-da-002等）都有一个<strong>输入长度上限</strong>（Context Window），通常是512或1024个Token。任何超出这个长度的文本都无法被正确处理。因此，必须将长文档切分成小于这个上限的块。</li>
</ul>
</li>
<li><strong>提升检索的精准度和效率</strong>：
<ul>
<li>这是更重要的一个原因。假设您有一个100页的PDF文档，用户只问了其中关于“第三章第二节的某个细节”。</li>
<li>如果您将整个100页的文档作为一个单独的向量进行存储，那么这个向量会包含所有章节的、被“平均化”的语义信息。当用户提问时，这个“大而全”的向量很可能因为包含了太多无关信息而无法被精准地检索到。</li>
<li>通过将文档切分成多个小的、主题集中的段落（Chunks），每个Chunk都有自己独立的、语义精准的向量。用户的提问就能精准地匹配到包含“第三章第二节”内容的那个Chunk，从而为LLM提供最高质量、最相关的上下文，避免“大海捞针”。</li>
</ul>
</li>
</ol>
<h4 id="_3-核心的分割策略与分割器类型" tabindex="-1"><a class="header-anchor" href="#_3-核心的分割策略与分割器类型"><span><strong>3. 核心的分割策略与分割器类型</strong></span></a></h4>
<p>LangChain和LlamaIndex都提供了多种文本分割器，以应对不同的文本类型。</p>
<p><strong>A. 递归字符分割 (</strong><code v-pre>**RecursiveCharacterTextSplitter**</code><strong>)</strong></p>
<ul>
<li><strong>定位</strong>：<strong>最常用、最推荐的通用分割器</strong>。</li>
<li><strong>工作原理</strong>：它非常“聪明”，会尝试按照一个预设的、有优先级的字符列表来进行分割。它会首先尝试用最高优先级的“段落分隔符”（如<code v-pre>\n\n</code>）来切分。如果切分后的块仍然太大，它就会“退一步”，在这些大块内部，用次一级的分隔符（如<code v-pre>\n</code>）继续切分，再不行就用句子分隔符（<code v-pre>.</code>），最后是空格。</li>
<li><strong>优点</strong>：尽可能地在语义最完整的地方进行切分（优先保留段落、其次保留句子），保证了文本块的连贯性。</li>
</ul>
<p><strong>B. 字符分割 (</strong><code v-pre>**CharacterTextSplitter**</code><strong>)</strong></p>
<ul>
<li><strong>定位</strong>：最简单、最基础的分割器。</li>
<li><strong>工作原理</strong>：简单地按照某一个或某几个固定的字符（如<code v-pre>\n\n</code>）进行分割。</li>
<li><strong>缺点</strong>：如果仅仅依靠单一分隔符，很容易产生过大的文本块。</li>
</ul>
<p><strong>C. Token分割 (</strong><code v-pre>**TokenTextSplitter**</code><strong>)</strong></p>
<ul>
<li><strong>定位</strong>：最精确的分割器。</li>
<li><strong>工作原理</strong>：它会先使用与LLM或Embedding模型完全一致的**分词器（Tokenizer）**将文本转换为Token，然后严格按照指定的Token数量进行切分。</li>
<li><strong>优点</strong>：可以100%确保每个Chunk都不会超过模型的Token限制，便于进行精确的成本和性能控制。</li>
</ul>
<p><strong>D. 语义分割 (</strong><code v-pre>**SemanticChunker**</code><strong>)</strong></p>
<ul>
<li><strong>定位</strong>：最先进、但仍在实验阶段的分割器。</li>
<li><strong>工作原理</strong>：它不再依赖于字符，而是通过Embedding模型来判断文本中语义的“断点”。当句与句之间的语义相似度低于某个阈值时，它就认为这里是一个新的主题的开始，并在此处进行切分。</li>
<li><strong>优点</strong>：理论上能产生语义最内聚、最连贯的文本块。</li>
</ul>
<h4 id="_4-两个关键参数-chunk-size-和-chunk-overlap" tabindex="-1"><a class="header-anchor" href="#_4-两个关键参数-chunk-size-和-chunk-overlap"><span><strong>4. 两个关键参数：</strong><code v-pre>**chunk_size**</code>** 和 **<code v-pre>**chunk_overlap**</code></span></a></h4>
<p>在使用分割器时，有两个参数是您必须理解和设置的：</p>
<ul>
<li><code v-pre>**chunk_size**</code>** (块大小)**：定义了每个文本块的最大长度（根据分割器类型，单位可以是字符数或Token数）。</li>
<li><code v-pre>**chunk_overlap**</code>** (块重叠)<strong>：定义了</strong>相邻两个文本块之间重叠的字符/Token数量**。
<ul>
<li><strong>为什么需要重叠？</strong> 想象一下，一个重要的句子正好被硬生生地从中间切开，分在了两个不同的Chunk里。这会导致语义的割裂。通过设置一个合适的重叠量（如100个字符），可以让每个Chunk的结尾部分，和下一个Chunk的开头部分内容相同。这样，无论用户的提问匹配到哪个Chunk，都能获得相对完整的上下文信息。</li>
</ul>
</li>
</ul>
<h4 id="_5-langchain中的实践示例" tabindex="-1"><a class="header-anchor" href="#_5-langchain中的实践示例"><span><strong>5. LangChain中的实践示例</strong></span></a></h4>
<p>Python</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">from langchain.text_splitter import RecursiveCharacterTextSplitter</span>
<span class="line"></span>
<span class="line"># 模拟一篇长文档</span>
<span class="line">with open("long_document.txt", "r") as f:</span>
<span class="line">    long_text = f.read()</span>
<span class="line"></span>
<span class="line"># 1. 实例化一个递归字符分割器</span>
<span class="line">text_splitter = RecursiveCharacterTextSplitter(</span>
<span class="line">    chunk_size=500,      # 每个块的最大字符数</span>
<span class="line">    chunk_overlap=50,    # 相邻块的重叠字符数</span>
<span class="line">    separators=["\n\n", "\n", "。", "，", " "] # 自定义分隔符优先级</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># 2. 执行分割</span>
<span class="line">chunks = text_splitter.split_text(long_text)</span>
<span class="line"></span>
<span class="line"># 3. 查看结果</span>
<span class="line">print(f"原始文本长度: {len(long_text)}")</span>
<span class="line">print(f"分割后得到的块数量: {len(chunks)}")</span>
<span class="line">for i, chunk in enumerate(chunks):</span>
<span class="line">    print(f"--- Chunk {i+1} (长度: {len(chunk)}) ---")</span>
<span class="line">    print(chunk)</span>
<span class="line">    print("\n")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong>：Text Splitter虽然是RAG流程中一个相对底层的技术环节，但**“切分”的质量直接决定了后续“检索”的质量，最终影响LLM生成答案的质量**。选择合适的分割策略，并精心调整<code v-pre>chunk_size</code>和<code v-pre>chunk_overlap</code>，是构建一个高性能RAG系统的第一步，也是至关重要的一步。</p>
</div></template>


