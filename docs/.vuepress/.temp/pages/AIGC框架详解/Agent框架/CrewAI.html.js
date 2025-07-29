import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/Agent框架/CrewAI.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/Agent%E6%A1%86%E6%9E%B6/CrewAI.html\",\"title\":\"CrewAI\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CrewAI\"},\"readingTime\":{\"minutes\":5.2,\"words\":1560},\"filePathRelative\":\"AIGC框架详解/Agent框架/CrewAI.md\",\"excerpt\":\"<h4><strong>1. 核心定位：基于角色扮演的“流程自动化”框架</strong></h4>\\n<p>CrewAI是一个开源框架，旨在帮助开发者轻松地编排、组织和运行多个自主Agent，让它们协同完成复杂的任务。</p>\\n<p>它的核心理念是**“角色扮演（Role-Playing）”<strong>和</strong>“任务驱动（Task-Driven）”**。开发者不再需要去思考Agent之间底层的通信细节，而是像一个项目经理一样，去定义团队里需要哪些“角色”，每个角色需要完成哪些“任务”，以及整个团队的“工作流程”。</p>\\n<h4><strong>2. CrewAI的四大核心组件</strong></h4>\"}")
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
