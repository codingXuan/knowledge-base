import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/业务流程控制-agent.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E4%B8%9A%E5%8A%A1%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6-agent.html\",\"title\":\"业务流程控制-agent\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"业务流程控制-agent\"},\"readingTime\":{\"minutes\":3.7,\"words\":1109},\"filePathRelative\":\"AIGC应用层建设思路/业务流程控制-agent.md\",\"excerpt\":\"<p><strong>1. 核心思想：从语言生成到任务执行</strong></p>\\n<p>传统的LLM应用以“问-答”为主，而Agent化的应用则将LLM从一个“语言模型”升级为了一个“任务执行大脑”。其核心思想是：利用LLM强大的自然语言理解和推理能力，将其作为中心控制器，通过生成结构化的指令来调用外部工具（API、数据库、代码等），从而完成复杂的、多步骤的业务流程。</p>\\n<p><strong>2. 单个Agent的内部构造 (The Anatomy of an Agent)</strong></p>\\n<p>一个功能完备的Agent，是“思考”与“行动”的结合体，其内部通常包含三大核心组件：</p>\"}")
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
