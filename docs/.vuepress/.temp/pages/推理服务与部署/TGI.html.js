import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/推理服务与部署/TGI.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%8E%A8%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%8E%E9%83%A8%E7%BD%B2/TGI.html\",\"title\":\"TGI\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TGI\"},\"readingTime\":{\"minutes\":4.19,\"words\":1258},\"filePathRelative\":\"推理服务与部署/TGI.md\",\"excerpt\":\"<h4><strong>1. 核心定位：Hugging Face官方出品的“生产级”推理解决方案</strong></h4>\\n<p>TGI (Text Generation Inference) 是一个专门为大规模语言模型设计的、功能全面且经过生产环境严苛考验的推理服务器。</p>\\n<p>作为Hugging Face的“亲儿子”，它的首要目标就是为<strong>Hugging Face Hub</strong>上数以万计的Transformer模型，提供一个官方的、开箱即用的、高性能的部署方案。它被广泛地应用于Hugging Face自己的产品中，如HuggingChat和Inference API服务，其稳定性和可靠性得到了充分验证。</p>\"}")
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
