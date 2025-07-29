import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/RAG核心组件/数据处理与切分/文本分割器-Text Splitters.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/RAG%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E4%B8%8E%E5%88%87%E5%88%86/%E6%96%87%E6%9C%AC%E5%88%86%E5%89%B2%E5%99%A8-Text%20Splitters.html\",\"title\":\"文本分割器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文本分割器\"},\"readingTime\":{\"minutes\":4.58,\"words\":1374},\"filePathRelative\":\"AIGC框架详解/RAG核心组件/数据处理与切分/文本分割器-Text Splitters.md\",\"excerpt\":\"<h4><strong>1. 核心定位：RAG流程的“智能备菜工”</strong></h4>\\n<p>Text Splitters（文本分割器）是在构建RAG系统时，负责将加载进来的长文档（<code>Documents</code>）切分成多个更小的、独立的、但又在语义上相关的文本块（<code>Chunks</code>）的工具。这是进行Embedding和向量化之前的<strong>强制性预处理步骤</strong>。</p>\\n<h4><strong>2. 为什么必须进行文本分割？</strong></h4>\\n<p>直接将一整篇长文档进行Embedding是不可行且无效的，主要有两个原因：</p>\"}")
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
