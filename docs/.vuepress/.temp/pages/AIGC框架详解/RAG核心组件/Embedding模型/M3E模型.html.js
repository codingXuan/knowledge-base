import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/Embedding模型/M3E模型.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/Embedding%E6%A8%A1%E5%9E%8B/M3E%E6%A8%A1%E5%9E%8B.html\",\"title\":\"M3E模型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"M3E模型\"},\"readingTime\":{\"minutes\":3.47,\"words\":1041},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/Embedding模型/M3E模型.md\",\"excerpt\":\"<h4><strong>1. 核心定位：为中英双语优化的“All-in-One”语义向量模型</strong></h4>\\n<p>M3E（Moka Massive Mixed Embedding）系列模型的核心定位是成为一个<strong>高效、全能的中英双语文本嵌入模型</strong>。它的设计目标是“All-in-One”，即用一个模型来出色地完成多种常见的检索任务，如文本相似度计算、语义检索等。</p>\\n<p>它的训练语料库非常庞大，包含了超过2.2亿的中文句对和1.45亿的英文三元组，这为其强大的中英文语义理解能力奠定了坚实的基础。</p>\\n<h4><strong>2. M3E的核心特性</strong></h4>\"}")
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
