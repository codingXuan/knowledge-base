import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/数据处理与切分/文档加载器-Document Loaders.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E4%B8%8E%E5%88%87%E5%88%86/%E6%96%87%E6%A1%A3%E5%8A%A0%E8%BD%BD%E5%99%A8-Document%20Loaders.html\",\"title\":\"文档加载器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文档加载器\"},\"readingTime\":{\"minutes\":3.44,\"words\":1033},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/数据处理与切分/文档加载器-Document Loaders.md\",\"excerpt\":\"<h4><strong>1. 核心定位：连接数据源的“万能插头”</strong></h4>\\n<p>Document Loaders (文档加载器) 是RAG流程的<strong>起点</strong>。它的核心职责是读取来自各种不同来源和格式的数据，并将其转换成一个标准化的、LangChain或LlamaIndex能够理解的 <code>Document</code> 对象。</p>\\n<p>一个 <code>Document</code> 对象通常包含两部分内容：</p>\\n<ul>\\n<li><code>**page_content**</code>: 文档的主要文本内容。</li>\\n<li><code>**metadata**</code>: 描述文档的元数据，例如来源文件名、页码、网址、作者等。</li>\\n</ul>\"}")
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
