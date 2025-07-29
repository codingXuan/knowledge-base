import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/RAG建设.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/RAG%E5%BB%BA%E8%AE%BE.html\",\"title\":\"RAG建设\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"RAG建设\"},\"readingTime\":{\"minutes\":3.94,\"words\":1181},\"filePathRelative\":\"AIGC应用层建设思路/RAG建设.md\",\"excerpt\":\"<h4><strong>1. 核心理念：为LLM配备一个可检索的“长期记忆”</strong></h4>\\n<p>RAG（Retrieval-Augmented Generation，检索增强生成）是一种将**信息检索（Retrieval）<strong>与</strong>文本生成（Generation）**相结合的强大架构。其核心理念是，在让大语言模型（LLM）回答问题或执行任务之前，先从一个外部的、可信的知识库中检索出最相关的信息片段，并将这些信息作为上下文（Context）一并提供给LLM。</p>\\n<p>这种方式的优势在于：</p>\\n<ul>\\n<li><strong>缓解模型幻觉</strong>：确保LLM的回答<strong>有据可依（Grounded）</strong>，答案来源于我们提供的知识，而不是模型自身的凭空捏造。</li>\\n<li><strong>知识动态更新</strong>：当知识发生变化时，我们只需更新外部知识库，而无需重新训练昂贵的LLM。</li>\\n<li><strong>处理私有数据</strong>：能够让LLM安全地利用企业内部的私有数据，而无需将这些数据用于模型训练。</li>\\n</ul>\"}")
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
