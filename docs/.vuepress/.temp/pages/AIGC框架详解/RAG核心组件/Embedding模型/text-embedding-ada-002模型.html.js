import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/Embedding模型/text-embedding-ada-002模型.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/Embedding%E6%A8%A1%E5%9E%8B/text-embedding-ada-002%E6%A8%A1%E5%9E%8B.html\",\"title\":\"text-embedding-ada-002模型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"text-embedding-ada-002模型\"},\"readingTime\":{\"minutes\":4.23,\"words\":1270},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/Embedding模型/text-embedding-ada-002模型.md\",\"excerpt\":\"<h4><strong>1. 核心定位：文本的“语义坐标转换器”</strong></h4>\\n<p>如果说向量数据库是一个高维度的“宇宙空间”，那么Embedding模型就是这个宇宙的**“通用物理定律”<strong>或者</strong>“GPS定位系统”**。</p>\\n<p>它的核心任务只有一个：<strong>将人类能够理解的、非结构化的文本（Text），转换成计算机能够理解和计算的、结构化的数字坐标——向量（Vector）。</strong></p>\\n<p>这个“坐标”并非随机生成，它精确地捕捉了文本的<strong>语义（Semantic Meaning）</strong>。在由这个模型所定义的“语义宇宙”中，意思相近的文本，它们的坐标点在空间中的距离也就越近。</p>\"}")
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
