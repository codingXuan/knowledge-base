import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/向量数据库/faiss库.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93/faiss%E5%BA%93.html\",\"title\":\"faiss库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"faiss库\"},\"readingTime\":{\"minutes\":5.07,\"words\":1521},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/向量数据库/faiss库.md\",\"excerpt\":\"<h4><strong>1. 核心定位：向量检索的“高性能计算引擎”</strong></h4>\\n<p>Faiss (Facebook AI Similarity Search) 是由 <strong>Facebook AI Research（现Meta AI）开发的、一个专注于高性能向量相似度搜索</strong>的<strong>开源库（Library）</strong>。</p>\\n<p>最核心的认知是：<strong>Faiss不是一个数据库，而是一个算法库。</strong></p>\\n<p>我们可以用一个比喻来理解它和向量数据库的关系：</p>\\n<ul>\\n<li><strong>Faiss</strong>：如同汽车里那台经过极致性能优化的**“V12发动机”**。它的唯一职责就是以最快的速度进行核心计算（向量相似度搜索），它本身不带轮子、方向盘或车身。</li>\\n<li><strong>ChromaDB / Milvus</strong>：则是一辆**“完整的汽车”**。这辆汽车的心脏可能就是一台类似Faiss的发动机，但它还提供了方向盘（API接口）、车身（数据管理）、油箱（持久化存储）、轮胎（网络服务）等所有部件，让可以直接“驾驶”。</li>\\n</ul>\"}")
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
