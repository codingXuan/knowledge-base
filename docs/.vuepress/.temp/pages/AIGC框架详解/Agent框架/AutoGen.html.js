import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/Agent框架/AutoGen.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/Agent%E6%A1%86%E6%9E%B6/AutoGen.html\",\"title\":\"AutoGen\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"AutoGen\"},\"readingTime\":{\"minutes\":4.6,\"words\":1380},\"filePathRelative\":\"AIGC框架详解/Agent框架/AutoGen.md\",\"excerpt\":\"<h4><strong>1. 核心定位：可定制的多Agent对话（Conversation）框架</strong></h4>\\n<p>AutoGen是一个开源框架，旨在简化和赋能基于多Agent对话的下一代LLM应用。它的核心是提供一套强大的机制，来定义不同角色的Agent，并精心编排它们之间的“对话流程”，让它们通过“聊天”来协同解决问题。</p>\\n<h4><strong>2. AutoGen的核心组件</strong></h4>\\n<p>理解AutoGen的关键，在于理解其最基础的两个Agent类型：</p>\\n<p><strong>A. <strong><code>**AssistantAgent**</code></strong> (助理Agent)</strong></p>\"}")
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
