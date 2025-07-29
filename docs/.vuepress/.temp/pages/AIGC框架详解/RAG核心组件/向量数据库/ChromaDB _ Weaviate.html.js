import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/向量数据库/ChromaDB _ Weaviate.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93/ChromaDB%20_%20Weaviate.html\",\"title\":\"ChromaDB _ Weaviate\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ChromaDB _ Weaviate\"},\"readingTime\":{\"minutes\":4.65,\"words\":1394},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/向量数据库/ChromaDB _ Weaviate.md\",\"excerpt\":\"<p><strong>1. 核心定位：为开发者设计的、开源的嵌入式向量数据库</strong></p>\\n<p>ChromaDB（通常简称Chroma）的设计哲学是<strong>简单、易用、开箱即用</strong>。它极大地降低了开发者使用向量数据库的门槛，非常适合快速原型设计、中小型项目以及作为应用的内置（embedded）向量存储引擎。</p>\\n<p><strong>2. 核心特性</strong></p>\\n<ul>\\n<li><strong>API优先</strong>：提供了简洁、直观的Python和JavaScript/TypeScript客户端。</li>\\n<li><strong>嵌入式与客户端-服务器模式</strong>：\\n<ul>\\n<li><strong>嵌入式 (In-Memory)</strong>：无需安装任何独立的数据库服务，可以直接在您的Python代码中运行，数据默认存储在内存或本地磁盘，非常适合本地开发和测试。</li>\\n<li><strong>客户端-服务器</strong>：也可以作为独立的服务器运行，让多个应用通过网络连接和访问。</li>\\n</ul>\\n</li>\\n<li><strong>元数据与过滤</strong>：这是它相比Faiss的一大优势。在存储向量的同时，可以存入丰富的元数据（如文档来源、作者、日期等），并在查询时根据这些元数据进行<strong>前置或后置过滤</strong>，实现更精确的检索。</li>\\n<li><strong>与生态的集成</strong>：与LangChain、LlamaIndex等框架深度集成，可以无缝替换。</li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
