import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/基础框架/应用编排框架/LlamaIndex.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/%E5%BA%94%E7%94%A8%E7%BC%96%E6%8E%92%E6%A1%86%E6%9E%B6/LlamaIndex.html\",\"title\":\"LlamaIndex\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"LlamaIndex\"},\"readingTime\":{\"minutes\":4.76,\"words\":1429},\"filePathRelative\":\"AIGC框架详解/基础框架/应用编排框架/LlamaIndex.md\",\"excerpt\":\"<h4><strong>1. 核心定位：为LLM应用打造的专属“数据框架”</strong></h4>\\n<p>LlamaIndex的诞生，源于一个核心洞察：当LLM应用与外部数据结合时，最大的挑战往往来自于如何高效地<strong>摄取、索引、检索和合成</strong>这些数据。LangChain虽然也提供RAG功能，但LlamaIndex在此领域做得更深入、更专业。</p>\\n<p>它的设计哲学是**“以数据为中心（Data-Centric）”**，旨在提供最强大、最灵活的工具，来连接私有或领域特定数据与大语言模型。</p>\\n<h4><strong>2. LlamaIndex解决了哪些核心痛点？</strong></h4>\"}")
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
