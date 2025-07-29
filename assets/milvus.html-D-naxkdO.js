import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-lPIr1JiT.js";const e={};function t(p,n){return l(),a("div",null,n[0]||(n[0]=[i(`<h4 id="_1-核心定位-为ai应用打造的云原生-分布式向量数据库" tabindex="-1"><a class="header-anchor" href="#_1-核心定位-为ai应用打造的云原生-分布式向量数据库"><span><strong>1. 核心定位：为AI应用打造的云原生“分布式向量数据库”</strong></span></a></h4><p>Milvus是一个<strong>开源的、专为向量检索设计的云原生数据库</strong>。它的核心定位，可以类比为传统数据领域的 <strong>MySQL</strong> 或 <strong>PostgreSQL</strong>——一个功能全面、性能卓越、稳定可靠、为生产环境而生的基础设施。</p><p>它从一开始就不是为单机或小型项目设计的，其整个架构都围绕着**可扩展性（Scalability）、可靠性（Reliability）和高性能（High Performance）**这三个企业级核心需求来构建。</p><h4 id="_2-milvus的-云原生-架构-解构其强大之处" tabindex="-1"><a class="header-anchor" href="#_2-milvus的-云原生-架构-解构其强大之处"><span><strong>2. Milvus的“云原生”架构：解构其强大之处</strong></span></a></h4><p>理解Milvus的关键，在于理解其**“存储计算分离”**的现代云原生架构。与传统的单体数据库不同，Milvus由一组各司其职、可以独立扩展的微服务组件构成。</p><p>这主要包括四大核心组件：</p><ol><li><strong>Proxy (代理节点)</strong>： <ul><li><strong>职责</strong>：作为系统的<strong>统一入口</strong>，负责接收所有来自客户端的请求（如插入、删除、查询）。它本身是<strong>无状态的</strong>，负责验证请求、路由请求并返回最终结果。</li><li><strong>扩展性</strong>：当系统的请求并发量增大时，可以简单地<strong>增加Proxy节点的数量</strong>来提高接入能力。</li></ul></li><li><strong>Query Node (查询节点)</strong>： <ul><li><strong>职责</strong>：系统的**“大脑”**，负责执行向量搜索和混合查询。它会从磁盘加载索引和数据到内存中，以提供毫秒级的查询响应。</li><li><strong>扩展性</strong>：当查询负载（QPS）变得非常高时，可以<strong>增加Query节点的数量</strong>，并将数据分片（Segment）加载到更多的节点上，从而实现查询能力的水平扩展。</li></ul></li><li><strong>Index Node (索引节点)</strong>： <ul><li><strong>职责</strong>：系统的**“建筑工人”**，专门负责在后台为新插入的向量数据构建索引。这是一个计算密集型任务。</li><li><strong>扩展性</strong>：当数据写入量巨大，索引构建速度跟不上时，可以<strong>增加Index节点的数量</strong>来加速索引的构建。</li></ul></li><li><strong>Data Node (数据节点)</strong>： <ul><li><strong>职责</strong>：系统的**“仓库管理员”**，负责数据的持久化存储，处理数据的增删改，并维护数据的日志。</li></ul></li></ol><p><strong>这个架构的巨大优势</strong>：可以根据业务负载的特点，<strong>按需、独立地扩展</strong>不同的组件。例如，一个读多写少的应用，可以只增加Query Node；一个写多读少的应用，则可以重点增加Index Node和Data Node。这种极致的弹性和灵活性，是其“企业级”定位的最好体现。</p><h4 id="_3-专为生产环境设计的核心特性" tabindex="-1"><a class="header-anchor" href="#_3-专为生产环境设计的核心特性"><span><strong>3. 专为生产环境设计的核心特性</strong></span></a></h4><ul><li><strong>A. 强大的混合搜索与过滤</strong>：Milvus支持在执行向量搜索的同时，基于数据的**标量字段（Scalar Fields）**进行复杂的逻辑过滤（如 <code>age &gt; 30 AND category == &#39;news&#39;</code>）。这使得可以实现非常精细和复杂的业务检索逻辑。</li><li><strong>B. 可调的一致性级别 (Tunable Consistency)</strong>：这是一个非常高级的数据库特性。Milvus允许在<strong>数据一致性</strong>和<strong>搜索性能</strong>之间做出权衡，提供了从强到弱的四种一致性级别，以适应不同场景： <ul><li><strong>Strong (强一致性)</strong>：保证能读到所有已经成功写入的数据，但查询延迟可能稍高。</li><li><strong>Bounded Staleness (有限过时)</strong>：允许读取几秒钟之前的旧数据，查询延迟较低。</li><li><strong>Session (会话一致性)</strong>：保证在同一个会话中，自己写入的数据对自己是可见的。</li><li><strong>Eventually Consistent (最终一致性)</strong>：性能最高，但数据同步有一定延迟。</li></ul></li><li><strong>C. 丰富全面的索引与距离度量支持</strong>：Milvus在底层集成了Faiss等多个高性能的向量检索库，并提供了对多种索引类型（如HNSW, IVF_FLAT, ScaNN等）和距离度量（欧氏距离L2、内积IP等）的全面支持，让可以为不同的数据分布和场景选择最优的算法。</li><li><strong>D. 多租户与数据管理</strong>： <ul><li><strong>Collection</strong>: 类似于关系数据库中的“表”。</li><li><strong>Partition</strong>: 可以在一个Collection内创建分区，将数据物理隔离，查询时可以指定只在某个分区内搜索，极大地提高检索效率。</li></ul></li></ul><h4 id="_4-pymilvus实践示例" tabindex="-1"><a class="header-anchor" href="#_4-pymilvus实践示例"><span><strong>4. PyMilvus实践示例</strong></span></a></h4><p>使用Milvus通常需要先通过Docker或Kubernetes部署一个Milvus实例。</p><p>Python</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>from pymilvus import connections, utility, FieldSchema, CollectionSchema, DataType, Collection</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 1. 连接到Milvus服务</span></span>
<span class="line"><span>connections.connect(&quot;default&quot;, host=&quot;localhost&quot;, port=&quot;19530&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 定义Collection的Schema（表结构）</span></span>
<span class="line"><span>fields = [</span></span>
<span class="line"><span>    FieldSchema(name=&quot;pk&quot;, dtype=DataType.INT64, is_primary=True, auto_id=True),</span></span>
<span class="line"><span>    FieldSchema(name=&quot;doc_source&quot;, dtype=DataType.VARCHAR, max_length=256),</span></span>
<span class="line"><span>    FieldSchema(name=&quot;embedding&quot;, dtype=DataType.FLOAT_VECTOR, dim=768) # 向量字段</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>schema = CollectionSchema(fields, &quot;我的第一个Milvus Collection&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3. 创建Collection</span></span>
<span class="line"><span>collection_name = &quot;my_first_collection&quot;</span></span>
<span class="line"><span>if utility.has_collection(collection_name):</span></span>
<span class="line"><span>    utility.drop_collection(collection_name)</span></span>
<span class="line"><span>collection = Collection(collection_name, schema)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4. 准备并插入数据</span></span>
<span class="line"><span>import numpy as np</span></span>
<span class="line"><span>data_to_insert = [</span></span>
<span class="line"><span>    {&quot;doc_source&quot;: &quot;doc_A&quot;, &quot;embedding&quot;: np.random.rand(768).tolist()},</span></span>
<span class="line"><span>    {&quot;doc_source&quot;: &quot;doc_B&quot;, &quot;embedding&quot;: np.random.rand(768).tolist()}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>collection.insert(data_to_insert)</span></span>
<span class="line"><span>collection.flush() # 确保数据被写入</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5. 为向量字段创建索引</span></span>
<span class="line"><span>index_params = {</span></span>
<span class="line"><span>    &quot;metric_type&quot;: &quot;L2&quot;,</span></span>
<span class="line"><span>    &quot;index_type&quot;: &quot;IVF_FLAT&quot;,</span></span>
<span class="line"><span>    &quot;params&quot;: {&quot;nlist&quot;: 128}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>collection.create_index(field_name=&quot;embedding&quot;, index_params=index_params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 6. 将Collection加载到内存以供查询</span></span>
<span class="line"><span>collection.load()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 7. 执行搜索</span></span>
<span class="line"><span>query_vector = np.random.rand(1, 768).tolist()</span></span>
<span class="line"><span>search_params = {&quot;metric_type&quot;: &quot;L2&quot;, &quot;params&quot;: {&quot;nprobe&quot;: 10}}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>results = collection.search(</span></span>
<span class="line"><span>    data=query_vector,</span></span>
<span class="line"><span>    anns_field=&quot;embedding&quot;,</span></span>
<span class="line"><span>    param=search_params,</span></span>
<span class="line"><span>    limit=1,</span></span>
<span class="line"><span>    output_fields=[&quot;doc_source&quot;]</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(results)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong>：Milvus是一个<strong>功能全面、架构先进、为大规模生产环境而生</strong>的开源向量数据库。当的RAG应用需要处理数百万、千万甚至数十亿级别的向量数据，并且对系统的稳定性、可扩展性和查询灵活性有高要求时，Milvus是当之无愧的首选方案。它代表了当前向量数据库领域的工业级标准。</p>`,15)]))}const c=s(e,[["render",t]]),d=JSON.parse('{"path":"/tech/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93/milvus.html","title":"milvus","lang":"zh-CN","frontmatter":{"title":"milvus"},"git":{"createdTime":1753758135000,"updatedTime":1753782201000,"contributors":[{"name":"codingXuan","username":"codingXuan","email":"34129858+codingXuan@users.noreply.github.com","commits":2,"url":"https://github.com/codingXuan"}]},"readingTime":{"minutes":4.67,"words":1401},"filePathRelative":"tech/AIGC框架详解/RAG核心组件/向量数据库/milvus.md","excerpt":"<h4><strong>1. 核心定位：为AI应用打造的云原生“分布式向量数据库”</strong></h4>\\n<p>Milvus是一个<strong>开源的、专为向量检索设计的云原生数据库</strong>。它的核心定位，可以类比为传统数据领域的 <strong>MySQL</strong> 或 <strong>PostgreSQL</strong>——一个功能全面、性能卓越、稳定可靠、为生产环境而生的基础设施。</p>\\n<p>它从一开始就不是为单机或小型项目设计的，其整个架构都围绕着**可扩展性（Scalability）、可靠性（Reliability）和高性能（High Performance）**这三个企业级核心需求来构建。</p>"}');export{c as comp,d as data};
