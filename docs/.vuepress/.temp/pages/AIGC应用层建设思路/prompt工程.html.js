import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/prompt工程.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/prompt%E5%B7%A5%E7%A8%8B.html\",\"title\":\"prompt工程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"prompt工程\"},\"readingTime\":{\"minutes\":2.92,\"words\":876},\"filePathRelative\":\"AIGC应用层建设思路/prompt工程.md\",\"excerpt\":\"<p><strong>1. 核心定位与原则</strong></p>\\n<p>Prompt工程是人机（或应用程序与大语言模型）交互的桥梁，是所有AIGC应用与LLM沟通的核心。应用层的所有技术栈，如RAG和微调，其最终目标都是为了在合适的时机，生成一个信息最丰富、指令最明确的Prompt，并将其提交给LLM。</p>\\n<p><strong>2. 优秀Prompt的构成要素</strong></p>\\n<p>一个设计精良的Prompt通常是结构化的，并且包含以下部分：</p>\\n<ul>\\n<li><strong>角色 (Role)</strong>：定义模型的身份。\\n<ul>\\n<li><em>示例</em>：“你是一名专业的市场营销文案专家。”</li>\\n</ul>\\n</li>\\n<li><strong>指令 (Instruction)</strong>：明确、无歧义地描述需要模型完成的核心任务。\\n<ul>\\n<li><em>示例</em>：“请为下面这款产品撰写三条社交媒体宣传文案。”</li>\\n</ul>\\n</li>\\n<li><strong>上下文 (Context)</strong>：提供完成任务所需的所有背景信息。这部分通常是<strong>动态注入</strong>的，主要来源是：\\n<ul>\\n<li><strong>RAG库检索内容</strong>：从向量数据库（Milvus, Faiss等）中检索出的与用户问题最相关的知识片段。</li>\\n<li><strong>用户会话历史</strong>：为了实现多轮对话的连贯性。</li>\\n<li><strong>外部数据</strong>：通过API调用等方式获取的实时信息。</li>\\n</ul>\\n</li>\\n<li><strong>示例 (Examples / Few-Shot)</strong>：提供一或多个输入输出的范例，帮助模型理解期望的风格和格式。\\n<ul>\\n<li><em>示例</em>：“例如，如果产品是咖啡豆，文案可以是：‘清晨的第一缕阳光，从一杯手冲开始。’现在，请为以下产品生成文案...”</li>\\n</ul>\\n</li>\\n<li><strong>输出格式 (Output Format)</strong>：明确指定返回内容的格式。\\n<ul>\\n<li><em>示例</em>：“请将三条文案以JSON数组的格式返回，每个对象的键为‘copywriting’。”</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
