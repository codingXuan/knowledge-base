import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/基础框架/深度学习框架/TensorFlow_Keras.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E6%A1%86%E6%9E%B6/TensorFlow_Keras.html\",\"title\":\"TensorFlow_Keras\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TensorFlow_Keras\"},\"readingTime\":{\"minutes\":5.32,\"words\":1595},\"filePathRelative\":\"AIGC框架详解/基础框架/深度学习框架/TensorFlow_Keras.md\",\"excerpt\":\"<h4><strong>1. 核心定位与关系：强大的引擎与优雅的接口</strong></h4>\\n<p>TensorFlow 是由 Google 开发的、一个用于高性能数值计算的开源平台。它的设计初衷就是为了应对大规模的、分布式的训练和部署场景，在工业界有着极其深厚的基础。</p>\\n<p>Keras 则是一个高级神经网络API，它以**“以人为本”**为设计原则，旨在实现快速、简单的原型设计。它的接口清晰、模块化，极大地降低了深度学习的入门门槛。</p>\\n<p><strong>现代关系</strong>：从TensorFlow 2.x开始，Keras 已被完全整合并作为其官方唯一推荐的高级API，我们通过 <code>tensorflow.keras</code>（通常简写为<code>tf.keras</code>）来使用它。可以这样理解：<strong>我们使用Keras简洁的语法来定义模型，而底层的计算、优化和部署则由强大的TensorFlow引擎来执行。</strong></p>\"}")
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
