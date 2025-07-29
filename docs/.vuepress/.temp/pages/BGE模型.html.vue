<template><div><h4 id="_1-bge-embedding模型-语义检索的-全能冠军" tabindex="-1"><a class="header-anchor" href="#_1-bge-embedding模型-语义检索的-全能冠军"><span><strong>1. BGE Embedding模型：语义检索的“全能冠军”</strong></span></a></h4>
<p>BGE (BAAI General Embedding) 的核心定位是成为一个<strong>通用、高性能</strong>的文本嵌入模型系列。它经过了从<code v-pre>v1.5</code>版本到最新的<code v-pre>M3</code>版本的持续迭代，能力不断增强。</p>
<h5 id="旗舰模型-bge-m3" tabindex="-1"><a class="header-anchor" href="#旗舰模型-bge-m3"><span><strong>旗舰模型：BGE-M3</strong></span></a></h5>
<p>BGE-M3是该系列的最新力作，它不仅仅是一个Embedding模型，更是一个**“多功能一体化”的检索基础模型**。</p>
<ul>
<li><strong>超强的多语言能力 (Multi-Lingual)</strong>：BGE-M3原生支持<strong>超过100种语言</strong>，能够在一个统一的语义空间中处理和理解多语言文本，非常适合需要处理跨语言信息的业务场景。</li>
<li><strong>超长的上下文窗口 (Large Context Window)</strong>：支持高达<strong>8192个Token</strong>的输入长度，远超<code v-pre>m3e-base</code>和早期BGE模型的512个Token，能够捕捉更丰富的长文本上下文信息。</li>
<li><strong>一体化的检索能力 (Multi-Functionality)</strong>：这是BGE-M3最核心的创新。它<strong>同时支持三种检索模式</strong>：
<ol>
<li><strong>稠密检索 (Dense Retrieval)</strong>：即传统的语义向量检索，擅长理解意图和概念。</li>
<li><strong>稀疏检索 (Lexical Retrieval)</strong>：类似于传统的关键词搜索（如BM25），擅长精确匹配关键词和术语。</li>
<li><strong>多向量检索 (Multi-Vector Retrieval)</strong>：采用ColBERT模型的思想，将文本中的每个Token都生成一个向量，实现更精细化的“词对词”匹配，精准度更高。 BGE-M3可以将这三种检索方式的优势结合起来，实现<strong>混合检索（Hybrid Retrieval）</strong>，其效果远超单一的语义检索。</li>
</ol>
</li>
</ul>
<h4 id="_2-bge-reranker模型-检索结果的-精度过滤器" tabindex="-1"><a class="header-anchor" href="#_2-bge-reranker模型-检索结果的-精度过滤器"><span><strong>2. BGE Reranker模型：检索结果的“精度过滤器”</strong></span></a></h4>
<p>这是要重点理解的新概念。单纯的Embedding模型负责的是**“召回（Recall）”**阶段，即从海量文档中，快速捞出几十个可能相关的候选文档。但这个阶段更注重速度和覆盖面，精准度不一定是最高的。为了解决这个问题，就引入了第二阶段的“精排”——<strong>Reranker</strong>。</p>
<h5 id="a-什么是reranker" tabindex="-1"><a class="header-anchor" href="#a-什么是reranker"><span><strong>A. 什么是Reranker？</strong></span></a></h5>
<p>Reranker（重排序模型）是一个**跨编码器（Cross-Encoder）**模型。它与Embedding模型（双编码器）的工作方式完全不同：</p>
<ul>
<li><strong>Embedding模型 (双编码器)</strong>：将“问题”和“文档”<strong>分开独立地</strong>编码成向量，然后计算向量之间的距离。速度快，适合大规模召回。</li>
<li><strong>Reranker模型 (跨编码器)</strong>：将“问题”和<strong>每一个候选文档拼接在一起</strong>（<code v-pre>[CLS] query [SEP] document [SEP]</code>），作为一个整体输入到模型中，让模型内部的Transformer层进行充分的注意力交互，最终输出一个<strong>单一的相关性分数（Relevance Score）</strong>。</li>
</ul>
<p>因为Reranker对问题和文档进行了深度的交叉注意力计算，所以它对二者之间相关性的判断<strong>远比向量距离计算要精准得多</strong>。</p>
<h5 id="b-两阶段检索-two-stage-retrieval-工作流" tabindex="-1"><a class="header-anchor" href="#b-两阶段检索-two-stage-retrieval-工作流"><span><strong>B. 两阶段检索（Two-Stage Retrieval）工作流</strong></span></a></h5>
<p>一个集成了Reranker的、先进的RAG流程如下：</p>
<ol>
<li><strong>召回阶段 (Recall Stage)</strong>：
<ul>
<li>使用高性能的Embedding模型（如BGE-M3），将用户问题编码成向量。</li>
<li>在向量数据库中进行相似度搜索，快速找出<strong>Top-K</strong>个候选文档（例如，K=50或100）。这个阶段的目标是“宁可错杀，不可放过”。</li>
</ul>
</li>
<li><strong>精排阶段 (Rerank Stage)</strong>：
<ul>
<li>将用户问题和第一阶段召回的50个候选文档，逐一配对。</li>
<li>将这50个<code v-pre>（问题，文档）</code>对送入BGE Reranker模型。</li>
<li>Reranker会为每一个文档对输出一个精确的相关性分数。</li>
<li>根据分数从高到低进行排序，选取<strong>最终的Top-N</strong>个文档（例如，N=3或5）作为最精准的上下文，提交给LLM。</li>
</ul>
</li>
</ol>
<h5 id="c-bge-reranker的优势" tabindex="-1"><a class="header-anchor" href="#c-bge-reranker的优势"><span><strong>C. BGE Reranker的优势</strong></span></a></h5>
<ul>
<li><strong>显著提升精准度</strong>：通过引入精排阶段，可以过滤掉大量在召回阶段被错误引入的“噪音”文档，为LLM提供一个更干净、更相关的上下文，从而极大地提升最终生成答案的质量。</li>
<li><strong>开源且强大</strong>：BGE Reranker同样由智源研究院开发，性能卓越，可以免费私有化部署。</li>
</ul>
<h4 id="_3-如何使用bge系列" tabindex="-1"><a class="header-anchor" href="#_3-如何使用bge系列"><span><strong>3. 如何使用BGE系列</strong></span></a></h4>
<h5 id="示例1-使用bge-m3进行embedding" tabindex="-1"><a class="header-anchor" href="#示例1-使用bge-m3进行embedding"><span><strong>示例1：使用BGE-M3进行Embedding</strong></span></a></h5>
<p>Python</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">from sentence_transformers import SentenceTransformer</span>
<span class="line"></span>
<span class="line">sentences_1 = ["今天天气怎么样"]</span>
<span class="line">sentences_2 = ["你好世界", "明天的天气如何"]</span>
<span class="line"></span>
<span class="line"># 加载BGE-M3模型</span>
<span class="line">model = SentenceTransformer('BAAI/bge-m3')</span>
<span class="line"></span>
<span class="line"># 将文本编码为向量</span>
<span class="line">embeddings_1 = model.encode(sentences_1, normalize_embeddings=True)</span>
<span class="line">embeddings_2 = model.encode(sentences_2, normalize_embeddings=True)</span>
<span class="line"></span>
<span class="line"># 计算余弦相似度</span>
<span class="line">similarity = embeddings_1 @ embeddings_2.T</span>
<span class="line">print(similarity)</span>
<span class="line"># 输出: [[0.5315 0.9814]] </span>
<span class="line"># 可以看到"今天天气怎么样"和"明天的天气如何"的相似度非常高</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="示例2-使用bge-reranker进行精排" tabindex="-1"><a class="header-anchor" href="#示例2-使用bge-reranker进行精排"><span><strong>示例2：使用BGE Reranker进行精排</strong></span></a></h5>
<p>需要先安装 <code v-pre>bge-rerank</code> 库: <code v-pre>pip install bge-rerank</code></p>
<p>Python</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">from BgeRerank import BgeRerank</span>
<span class="line"></span>
<span class="line"># 模拟一个问题和一组从召回阶段获取的候选文档</span>
<span class="line">query = "今天北京天气怎么样？"</span>
<span class="line">documents = [</span>
<span class="line">    "北京今天晴转多云，气温15至25摄氏度，微风。",</span>
<span class="line">    "上海明天有雨，请注意携带雨具。",</span>
<span class="line">    "如何做一道美味的红烧肉？",</span>
<span class="line">    "北京今日空气质量良好，适合户外活动。"</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line"># 加载Reranker模型</span>
<span class="line">reranker = BgeRerank('BAAI/bge-reranker-large')</span>
<span class="line"></span>
<span class="line"># 调用compute_score方法计算相关性分数</span>
<span class="line">scores = reranker.compute_score([(query, doc) for doc in documents])</span>
<span class="line">print(scores)</span>
<span class="line"># 输出类似: [0.98, 0.15, 0.01, 0.95] (具体数值可能不同)</span>
<span class="line"></span>
<span class="line"># 根据分数可以判断，第一个和第四个文档与问题的相关性最高</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong>：BGE系列为开发者提供了一套<strong>从粗到精</strong>的完整开源检索方案。使用<strong>BGE-M3</strong>进行大规模、多语言、多功能的**“粗召回”<strong>，再用</strong>BGE-Reranker<strong>进行高精度的</strong>“精排序”**，已经成为当前构建生产级、SOTA（State-of-the-art）RAG系统的最佳实践之一。</p>
</div></template>


