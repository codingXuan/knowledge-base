import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/基础框架/模型与算法库/Hugging Face Transformers.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%AE%97%E6%B3%95%E5%BA%93/Hugging%20Face%20Transformers.html\",\"title\":\"Hugging Face Transformers\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Hugging Face Transformers\"},\"readingTime\":{\"minutes\":3.64,\"words\":1093},\"filePathRelative\":\"AIGC框架详解/基础框架/模型与算法库/Hugging Face Transformers.md\",\"excerpt\":\"<h4><strong>1. 核心定位：AI模型的“GitHub”与“Maven”</strong></h4>\\n<p>Hugging Face 不仅仅是一个名为 <code>transformers</code> 的Python库，它是一个庞大的生态系统。其核心可以被理解为<strong>AI领域的“GitHub”与“Maven”的结合体</strong>：</p>\\n<ul>\\n<li><strong>作为“GitHub”</strong>：它提供了一个名为 <strong>Hugging Face Hub</strong> 的中央仓库，全世界的研究者和开发者都可以在这里上传、分享、发现和下载数以十万计的预训练模型、数据集和演示应用（Spaces）。</li>\\n<li><strong>作为“Maven”</strong>：它旗下的 <code>transformers</code> 库，提供了一套标准化的接口，让您可以极其方便地在您的代码中，从Hub上下载并使用这些模型，解决了AI领域的“依赖管理”问题。</li>\\n</ul>\"}")
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
