import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as i}from"./app-7M4PPNja.js";const l={};function t(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h4 id="_1-核心理念-为llm配备一个可检索的-长期记忆" tabindex="-1"><a class="header-anchor" href="#_1-核心理念-为llm配备一个可检索的-长期记忆"><span><strong>1. 核心理念：为LLM配备一个可检索的“长期记忆”</strong></span></a></h4><p>RAG（Retrieval-Augmented Generation，检索增强生成）是一种将**信息检索（Retrieval）<strong>与</strong>文本生成（Generation）**相结合的强大架构。其核心理念是，在让大语言模型（LLM）回答问题或执行任务之前，先从一个外部的、可信的知识库中检索出最相关的信息片段，并将这些信息作为上下文（Context）一并提供给LLM。</p><p>这种方式的优势在于：</p><ul><li><strong>缓解模型幻觉</strong>：确保LLM的回答<strong>有据可依（Grounded）</strong>，答案来源于我们提供的知识，而不是模型自身的凭空捏造。</li><li><strong>知识动态更新</strong>：当知识发生变化时，我们只需更新外部知识库，而无需重新训练昂贵的LLM。</li><li><strong>处理私有数据</strong>：能够让LLM安全地利用企业内部的私有数据，而无需将这些数据用于模型训练。</li></ul><h4 id="_2-技术选型-从-库-到-数据库-的权衡-faiss-vs-milvus" tabindex="-1"><a class="header-anchor" href="#_2-技术选型-从-库-到-数据库-的权衡-faiss-vs-milvus"><span><strong>2. 技术选型：从“库”到“数据库”的权衡 (Faiss vs. Milvus)</strong></span></a></h4><p>构建RAG系统的核心，是选择一个合适的<strong>向量存储与检索方案</strong>。</p><ul><li><strong>Faiss</strong>：是一个高性能的<strong>向量检索算法库</strong>。它专注于提供极致的内存内（in-memory）搜索速度，但它本身不提供数据存储、元数据管理、网络服务等数据库功能。它更像一个“高性能引擎零件”。</li><li><strong>Milvus</strong>：是一个真正的<strong>分布式向量数据库</strong>。它在底层可能集成了类似Faiss的算法，但在其上构建了完整的数据库服务，包括： <ul><li><strong>数据持久化存储</strong></li><li><strong>向量与元数据的增删改查（CRUD）</strong></li><li><strong>强大的标量过滤（Scalar Filtering）</strong></li><li><strong>高可用与可扩展性</strong></li></ul></li></ul><p><strong>选型结论</strong>：对于需要与现有数据库（如MySQL）协同工作、处理复杂元数据、并面向生产环境的企业级应用，功能全面的<strong>Milvus是比Faiss更合适的选择</strong>。</p><h4 id="_3-数据结构设计-为精准过滤与溯源而生" tabindex="-1"><a class="header-anchor" href="#_3-数据结构设计-为精准过滤与溯源而生"><span><strong>3. 数据结构设计：为精准过滤与溯源而生</strong></span></a></h4><p>一个健壮的RAG数据结构，是实现精准过滤和答案溯源的关键。您提出的结构很好，我们可以将其泛化并扩展，使其更具通用性。</p><p>我们存储在Milvus中的核心单元是一个**“数据块（Chunk）”**，其理想的Schema应包含：</p><table><thead><tr><th>字段名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>chunk_id</code></td><td><code>INT64</code><br> (Primary Key)</td><td>唯一的块ID，建议自动生成。</td></tr><tr><td><code>content</code></td><td><code>VARCHAR</code></td><td>文本块的原文，这是提供给LLM的核心上下文。</td></tr><tr><td><code>embedding</code></td><td><code>FLOAT_VECTOR</code></td><td><code>content</code><br>对应的向量。</td></tr><tr><td><code>metadata</code></td><td><code>JSON</code></td><td>**（关键）**包含所有元信息的JSON对象。</td></tr></tbody></table><p><strong><strong><code>**metadata**</code></strong> 示例</strong>：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;source_type&quot;: &quot;concept&quot;, // 您定义的类型，如 concept, knowledge_card</span></span>
<span class="line"><span>  &quot;document_title&quot;: &quot;IPT 第一次诊疗框架&quot;,</span></span>
<span class="line"><span>  &quot;original_file_path&quot;: &quot;/docs/ipt/session1.pdf&quot;,</span></span>
<span class="line"><span>  &quot;page_number&quot;: 1,</span></span>
<span class="line"><span>  &quot;last_updated&quot;: &quot;2025-07-26T10:00:00Z&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据同步策略</strong>：通过CDC工具或脚本将MySQL数据同步到Milvus，能确保关系型数据与向量数据的最终一致性。</p><h4 id="_4-rag实现流程" tabindex="-1"><a class="header-anchor" href="#_4-rag实现流程"><span><strong>4. RAG实现流程</strong></span></a></h4><p>Python</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import torch</span></span>
<span class="line"><span>from sentence_transformers import SentenceTransformer # 使用专门的库</span></span>
<span class="line"><span>from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 1. 加载专门的Embedding模型 ---</span></span>
<span class="line"><span># 这是一个更专业、更高效的选择</span></span>
<span class="line"><span>device = &quot;cuda&quot;</span></span>
<span class="line"><span># 从Hugging Face加载BGE模型，或加载您本地下载好的路径</span></span>
<span class="line"><span>embedding_model = SentenceTransformer(&#39;BAAI/bge-large-zh-v1.5&#39;, device=device)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 2. 准备数据 ---</span></span>
<span class="line"><span># 假设documents是一个结构化的列表，例如:</span></span>
<span class="line"><span># documents = [{&quot;id&quot;: 1, &quot;type&quot;: &quot;concept&quot;, &quot;content&quot;: &quot;在第一次诊疗中...&quot;}, ...]</span></span>
<span class="line"><span>documents = [</span></span>
<span class="line"><span>    {&quot;id&quot;: 1, &quot;type&quot;: &quot;concept&quot;, &quot;content&quot;: &quot;在第一次诊疗中，治疗师需要建立治疗关系，收集病史，询问病情等。&quot;},</span></span>
<span class="line"><span>    {&quot;id&quot;: 2, &quot;type&quot;: &quot;knowledge_card&quot;, &quot;content&quot;: &quot;治疗师需要了解患者的病史，包括过去的心理健康状况、治疗经历等。&quot;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 3. 将文本批量转换为向量 ---</span></span>
<span class="line"><span>texts = [doc[&quot;content&quot;] for doc in documents]</span></span>
<span class="line"><span># 使用embedding_model进行编码，速度更快，效果更好</span></span>
<span class="line"><span>vectors = embedding_model.encode(texts, normalize_embeddings=True)</span></span>
<span class="line"><span>dim = vectors.shape[1] # 获取向量维度</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 4. 连接到Milvus并创建Collection ---</span></span>
<span class="line"><span>connections.connect(&quot;default&quot;, host=&#39;your_milvus_host&#39;, port=&#39;19530&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>collection_name = &quot;rag_collection_bge&quot;</span></span>
<span class="line"><span>if collection_name in utility.list_collections():</span></span>
<span class="line"><span>    utility.drop_collection(collection_name)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fields = [</span></span>
<span class="line"><span>    FieldSchema(name=&quot;id&quot;, dtype=DataType.INT64, is_primary=True),</span></span>
<span class="line"><span>    FieldSchema(name=&quot;type&quot;, dtype=DataType.VARCHAR, max_length=100),</span></span>
<span class="line"><span>    FieldSchema(name=&quot;content&quot;, dtype=DataType.VARCHAR, max_length=2000), # 建议也存入原文</span></span>
<span class="line"><span>    FieldSchema(name=&quot;embedding&quot;, dtype=DataType.FLOAT_VECTOR, dim=dim)</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>schema = CollectionSchema(fields, &quot;RAG collection with BGE embedding model&quot;)</span></span>
<span class="line"><span>collection = Collection(name=collection_name, schema=schema)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 5. 插入数据 ---</span></span>
<span class="line"><span>entities = [</span></span>
<span class="line"><span>    [doc[&quot;id&quot;] for doc in documents],</span></span>
<span class="line"><span>    [doc[&quot;type&quot;] for doc in documents],</span></span>
<span class="line"><span>    [doc[&quot;content&quot;] for doc in documents],</span></span>
<span class="line"><span>    vectors</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>collection.insert(entities)</span></span>
<span class="line"><span>collection.flush()</span></span>
<span class="line"><span>print(f&quot;成功插入 {collection.num_entities} 条数据。&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 6. 创建索引并加载 ---</span></span>
<span class="line"><span>index_params = {&quot;index_type&quot;: &quot;IVF_FLAT&quot;, &quot;metric_type&quot;: &quot;L2&quot;, &quot;params&quot;: {&quot;nlist&quot;: 128}}</span></span>
<span class="line"><span>collection.create_index(field_name=&quot;embedding&quot;, index_params=index_params)</span></span>
<span class="line"><span>collection.load()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 7. 查询示例 ---</span></span>
<span class="line"><span>query_text = &quot;诊疗关系和病史收集&quot;</span></span>
<span class="line"><span>query_vector = embedding_model.encode([query_text], normalize_embeddings=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>search_params = {&quot;metric_type&quot;: &quot;L2&quot;, &quot;params&quot;: {&quot;nprobe&quot;: 10}}</span></span>
<span class="line"><span>results = collection.search(</span></span>
<span class="line"><span>    data=query_vector, </span></span>
<span class="line"><span>    anns_field=&quot;embedding&quot;, </span></span>
<span class="line"><span>    param=search_params, </span></span>
<span class="line"><span>    limit=10, </span></span>
<span class="line"><span>    output_fields=[&quot;id&quot;, &quot;type&quot;, &quot;content&quot;] # 指定需要返回的字段</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --- 8. 输出查询结果 ---</span></span>
<span class="line"><span>print(&quot;\\n查询结果:&quot;)</span></span>
<span class="line"><span>for hit in results[0]:</span></span>
<span class="line"><span>    print(f&quot;Document ID: {hit.entity.get(&#39;id&#39;)}, Type: {hit.entity.get(&#39;type&#39;)}, Distance: {hit.distance}&quot;)</span></span>
<span class="line"><span>    print(f&quot;Content: {hit.entity.get(&#39;content&#39;)}&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const c=s(l,[["render",t]]),r=JSON.parse('{"path":"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/RAG%E5%BB%BA%E8%AE%BE.html","title":"RAG建设","lang":"zh-CN","frontmatter":{"title":"RAG建设"},"git":{"createdTime":1753758135000,"updatedTime":1753758135000,"contributors":[{"name":"codingXuan","username":"codingXuan","email":"34129858+codingXuan@users.noreply.github.com","commits":1,"url":"https://github.com/codingXuan"}]},"readingTime":{"minutes":3.94,"words":1181},"filePathRelative":"AIGC应用层建设思路/RAG建设.md","excerpt":"<h4><strong>1. 核心理念：为LLM配备一个可检索的“长期记忆”</strong></h4>\\n<p>RAG（Retrieval-Augmented Generation，检索增强生成）是一种将**信息检索（Retrieval）<strong>与</strong>文本生成（Generation）**相结合的强大架构。其核心理念是，在让大语言模型（LLM）回答问题或执行任务之前，先从一个外部的、可信的知识库中检索出最相关的信息片段，并将这些信息作为上下文（Context）一并提供给LLM。</p>\\n<p>这种方式的优势在于：</p>\\n<ul>\\n<li><strong>缓解模型幻觉</strong>：确保LLM的回答<strong>有据可依（Grounded）</strong>，答案来源于我们提供的知识，而不是模型自身的凭空捏造。</li>\\n<li><strong>知识动态更新</strong>：当知识发生变化时，我们只需更新外部知识库，而无需重新训练昂贵的LLM。</li>\\n<li><strong>处理私有数据</strong>：能够让LLM安全地利用企业内部的私有数据，而无需将这些数据用于模型训练。</li>\\n</ul>"}');export{c as comp,r as data};
