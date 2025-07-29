import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/向量数据库/milvus.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93/milvus.html\",\"title\":\"milvus\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"milvus\"},\"readingTime\":{\"minutes\":4.67,\"words\":1401},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/向量数据库/milvus.md\",\"excerpt\":\"<h4><strong>1. 核心定位：为AI应用打造的云原生“分布式向量数据库”</strong></h4>\\n<p>Milvus是一个<strong>开源的、专为向量检索设计的云原生数据库</strong>。它的核心定位，可以类比为传统数据领域的 <strong>MySQL</strong> 或 <strong>PostgreSQL</strong>——一个功能全面、性能卓越、稳定可靠、为生产环境而生的基础设施。</p>\\n<p>它从一开始就不是为单机或小型项目设计的，其整个架构都围绕着**可扩展性（Scalability）、可靠性（Reliability）和高性能（High Performance）**这三个企业级核心需求来构建。</p>\"}")
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
