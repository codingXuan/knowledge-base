import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/多agent组合.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E5%A4%9Aagent%E7%BB%84%E5%90%88.html\",\"title\":\"多agent组合\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"多agent组合\"},\"readingTime\":{\"minutes\":5.68,\"words\":1703},\"filePathRelative\":\"AIGC应用层建设思路/多agent组合.md\",\"excerpt\":\"<h4><strong>1. 从单一到协作：为什么需要多Agent？</strong></h4>\\n<p>当任务的复杂度超出单个LLM（即使配备了工具和知识库）所能高效处理的范畴时，多Agent系统就应运而生。单一Agent模型如同一个全能的“通才”，但在面对需要深度专业知识、多重角色协作或复杂流程的场景时，会显得力不从心。多Agent系统，则像组建一个各有所长的“专家团队”。</p>\\n<p>其核心优势在于：</p>\\n<ul>\\n<li><strong>任务分解与分治 (Task Decomposition &amp; Divide-and-Conquer)</strong>：将一个宏大、复杂的问题，拆解成多个更小、更易于管理和执行的子任务。每个子任务交由最擅长它的Agent来处理，最终将结果汇总，实现“分而治之”。</li>\\n<li><strong>领域专长与深度 (Domain Expertise &amp; Depth)</strong>：允许我们创建多个“专家Agent”，例如“数据分析Agent”、“代码生成Agent”、“市场研究Agent”、“文案创作Agent”。每个Agent都可以拥有自己专属的Prompt、工具和知识库（RAG），从而在各自的垂直领域达到更高的专业水准和输出质量。</li>\\n<li><strong>模块化与可扩展性 (Modularity &amp; Scalability)</strong>：系统由多个独立的Agent模块组成，使得开发、测试、维护和升级都变得更加容易。当需要增加新功能时，我们只需开发一个新的Agent并将其集成到系统中，而无需修改庞大而复杂的单体Agent。</li>\\n<li><strong>并行处理与效率 (Parallelism &amp; Efficiency)</strong>：对于可以并行处理的子任务，可以调度多个Agent同时工作，从而缩短整个任务的完成时间。</li>\\n</ul>\"}")
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
