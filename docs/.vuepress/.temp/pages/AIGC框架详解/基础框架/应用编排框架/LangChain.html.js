import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/基础框架/应用编排框架/LangChain.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/%E5%BA%94%E7%94%A8%E7%BC%96%E6%8E%92%E6%A1%86%E6%9E%B6/LangChain.html\",\"title\":\"LangChain\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"LangChain\"},\"readingTime\":{\"minutes\":4.11,\"words\":1232},\"filePathRelative\":\"AIGC框架详解/基础框架/应用编排框架/LangChain.md\",\"excerpt\":\"<h4><strong>1. 核心定位：AIGC应用开发的“Spring Boot”</strong></h4>\\n<p>如果说PyTorch是让我们能“造出”高性能发动机（LLM）的底层工具集，那么LangChain就是一套能让我们快速“组装”出一辆功能完备的汽车（AIGC应用）的<strong>应用层开发框架</strong>。</p>\\n<p>它通过提供一系列标准化的、可组合的组件，极大地简化了构建复杂AIGC应用（如RAG、Agents）的过程，其核心哲学与Spring Boot如出一辙：<strong>约定优于配置、快速开发、功能集成</strong>。</p>\\n<h4><strong>2. LangChain的核心封装模块</strong></h4>\"}")
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
