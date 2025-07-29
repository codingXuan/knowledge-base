<template><div><h4 id="_1-核心理念-为llm配备一个可检索的-长期记忆" tabindex="-1"><a class="header-anchor" href="#_1-核心理念-为llm配备一个可检索的-长期记忆"><span><strong>1. 核心理念：为LLM配备一个可检索的“长期记忆”</strong></span></a></h4>
<p>RAG（Retrieval-Augmented Generation，检索增强生成）是一种将**信息检索（Retrieval）<strong>与</strong>文本生成（Generation）**相结合的强大架构。其核心理念是，在让大语言模型（LLM）回答问题或执行任务之前，先从一个外部的、可信的知识库中检索出最相关的信息片段，并将这些信息作为上下文（Context）一并提供给LLM。</p>
<p>这种方式的优势在于：</p>
<ul>
<li><strong>缓解模型幻觉</strong>：确保LLM的回答<strong>有据可依（Grounded）</strong>，答案来源于我们提供的知识，而不是模型自身的凭空捏造。</li>
<li><strong>知识动态更新</strong>：当知识发生变化时，我们只需更新外部知识库，而无需重新训练昂贵的LLM。</li>
<li><strong>处理私有数据</strong>：能够让LLM安全地利用企业内部的私有数据，而无需将这些数据用于模型训练。</li>
</ul>
<h4 id="_2-技术选型-从-库-到-数据库-的权衡-faiss-vs-milvus" tabindex="-1"><a class="header-anchor" href="#_2-技术选型-从-库-到-数据库-的权衡-faiss-vs-milvus"><span><strong>2. 技术选型：从“库”到“数据库”的权衡 (Faiss vs. Milvus)</strong></span></a></h4>
<p>构建RAG系统的核心，是选择一个合适的<strong>向量存储与检索方案</strong>。</p>
<ul>
<li><strong>Faiss</strong>：是一个高性能的<strong>向量检索算法库</strong>。它专注于提供极致的内存内（in-memory）搜索速度，但它本身不提供数据存储、元数据管理、网络服务等数据库功能。它更像一个“高性能引擎零件”。</li>
<li><strong>Milvus</strong>：是一个真正的<strong>分布式向量数据库</strong>。它在底层可能集成了类似Faiss的算法，但在其上构建了完整的数据库服务，包括：
<ul>
<li><strong>数据持久化存储</strong></li>
<li><strong>向量与元数据的增删改查（CRUD）</strong></li>
<li><strong>强大的标量过滤（Scalar Filtering）</strong></li>
<li><strong>高可用与可扩展性</strong></li>
</ul>
</li>
</ul>
<p><strong>选型结论</strong>：对于需要与现有数据库（如MySQL）协同工作、处理复杂元数据、并面向生产环境的企业级应用，功能全面的<strong>Milvus是比Faiss更合适的选择</strong>。</p>
<h4 id="_3-数据结构设计-为精准过滤与溯源而生" tabindex="-1"><a class="header-anchor" href="#_3-数据结构设计-为精准过滤与溯源而生"><span><strong>3. 数据结构设计：为精准过滤与溯源而生</strong></span></a></h4>
<p>一个健壮的RAG数据结构，是实现精准过滤和答案溯源的关键。您提出的结构很好，我们可以将其泛化并扩展，使其更具通用性。</p>
<p>我们存储在Milvus中的核心单元是一个**“数据块（Chunk）”**，其理想的Schema应包含：</p>
<table>
<thead>
<tr>
<th>字段名</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>chunk_id</code></td>
<td><code v-pre>INT64</code><br/> (Primary Key)</td>
<td>唯一的块ID，建议自动生成。</td>
</tr>
<tr>
<td><code v-pre>content</code></td>
<td><code v-pre>VARCHAR</code></td>
<td>文本块的原文，这是提供给LLM的核心上下文。</td>
</tr>
<tr>
<td><code v-pre>embedding</code></td>
<td><code v-pre>FLOAT_VECTOR</code></td>
<td><code v-pre>content</code><br/>对应的向量。</td>
</tr>
<tr>
<td><code v-pre>metadata</code></td>
<td><code v-pre>JSON</code></td>
<td>**（关键）**包含所有元信息的JSON对象。</td>
</tr>
</tbody>
</table>
<p><strong><strong><code v-pre>**metadata**</code></strong> 示例</strong>：</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">{</span>
<span class="line">  "source_type": "concept", // 您定义的类型，如 concept, knowledge_card</span>
<span class="line">  "document_title": "IPT 第一次诊疗框架",</span>
<span class="line">  "original_file_path": "/docs/ipt/session1.pdf",</span>
<span class="line">  "page_number": 1,</span>
<span class="line">  "last_updated": "2025-07-26T10:00:00Z"</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据同步策略</strong>：通过CDC工具或脚本将MySQL数据同步到Milvus，能确保关系型数据与向量数据的最终一致性。</p>
<h4 id="_4-rag实现流程" tabindex="-1"><a class="header-anchor" href="#_4-rag实现流程"><span><strong>4. RAG实现流程</strong></span></a></h4>
<p>Python</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">import torch</span>
<span class="line">from sentence_transformers import SentenceTransformer # 使用专门的库</span>
<span class="line">from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection</span>
<span class="line"></span>
<span class="line"># --- 1. 加载专门的Embedding模型 ---</span>
<span class="line"># 这是一个更专业、更高效的选择</span>
<span class="line">device = "cuda"</span>
<span class="line"># 从Hugging Face加载BGE模型，或加载您本地下载好的路径</span>
<span class="line">embedding_model = SentenceTransformer('BAAI/bge-large-zh-v1.5', device=device)</span>
<span class="line"></span>
<span class="line"># --- 2. 准备数据 ---</span>
<span class="line"># 假设documents是一个结构化的列表，例如:</span>
<span class="line"># documents = [{"id": 1, "type": "concept", "content": "在第一次诊疗中..."}, ...]</span>
<span class="line">documents = [</span>
<span class="line">    {"id": 1, "type": "concept", "content": "在第一次诊疗中，治疗师需要建立治疗关系，收集病史，询问病情等。"},</span>
<span class="line">    {"id": 2, "type": "knowledge_card", "content": "治疗师需要了解患者的病史，包括过去的心理健康状况、治疗经历等。"}</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line"># --- 3. 将文本批量转换为向量 ---</span>
<span class="line">texts = [doc["content"] for doc in documents]</span>
<span class="line"># 使用embedding_model进行编码，速度更快，效果更好</span>
<span class="line">vectors = embedding_model.encode(texts, normalize_embeddings=True)</span>
<span class="line">dim = vectors.shape[1] # 获取向量维度</span>
<span class="line"></span>
<span class="line"># --- 4. 连接到Milvus并创建Collection ---</span>
<span class="line">connections.connect("default", host='your_milvus_host', port='19530')</span>
<span class="line"></span>
<span class="line">collection_name = "rag_collection_bge"</span>
<span class="line">if collection_name in utility.list_collections():</span>
<span class="line">    utility.drop_collection(collection_name)</span>
<span class="line"></span>
<span class="line">fields = [</span>
<span class="line">    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True),</span>
<span class="line">    FieldSchema(name="type", dtype=DataType.VARCHAR, max_length=100),</span>
<span class="line">    FieldSchema(name="content", dtype=DataType.VARCHAR, max_length=2000), # 建议也存入原文</span>
<span class="line">    FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=dim)</span>
<span class="line">]</span>
<span class="line">schema = CollectionSchema(fields, "RAG collection with BGE embedding model")</span>
<span class="line">collection = Collection(name=collection_name, schema=schema)</span>
<span class="line"></span>
<span class="line"># --- 5. 插入数据 ---</span>
<span class="line">entities = [</span>
<span class="line">    [doc["id"] for doc in documents],</span>
<span class="line">    [doc["type"] for doc in documents],</span>
<span class="line">    [doc["content"] for doc in documents],</span>
<span class="line">    vectors</span>
<span class="line">]</span>
<span class="line">collection.insert(entities)</span>
<span class="line">collection.flush()</span>
<span class="line">print(f"成功插入 {collection.num_entities} 条数据。")</span>
<span class="line"></span>
<span class="line"># --- 6. 创建索引并加载 ---</span>
<span class="line">index_params = {"index_type": "IVF_FLAT", "metric_type": "L2", "params": {"nlist": 128}}</span>
<span class="line">collection.create_index(field_name="embedding", index_params=index_params)</span>
<span class="line">collection.load()</span>
<span class="line"></span>
<span class="line"># --- 7. 查询示例 ---</span>
<span class="line">query_text = "诊疗关系和病史收集"</span>
<span class="line">query_vector = embedding_model.encode([query_text], normalize_embeddings=True)</span>
<span class="line"></span>
<span class="line">search_params = {"metric_type": "L2", "params": {"nprobe": 10}}</span>
<span class="line">results = collection.search(</span>
<span class="line">    data=query_vector, </span>
<span class="line">    anns_field="embedding", </span>
<span class="line">    param=search_params, </span>
<span class="line">    limit=10, </span>
<span class="line">    output_fields=["id", "type", "content"] # 指定需要返回的字段</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># --- 8. 输出查询结果 ---</span>
<span class="line">print("\n查询结果:")</span>
<span class="line">for hit in results[0]:</span>
<span class="line">    print(f"Document ID: {hit.entity.get('id')}, Type: {hit.entity.get('type')}, Distance: {hit.distance}")</span>
<span class="line">    print(f"Content: {hit.entity.get('content')}")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


