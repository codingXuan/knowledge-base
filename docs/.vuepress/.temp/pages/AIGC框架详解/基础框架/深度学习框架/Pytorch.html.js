import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/基础框架/深度学习框架/Pytorch.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E6%A1%86%E6%9E%B6/Pytorch.html\",\"title\":\"Pytorch\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Pytorch\"},\"readingTime\":{\"minutes\":6.36,\"words\":1907},\"filePathRelative\":\"AIGC框架详解/基础框架/深度学习框架/Pytorch.md\",\"excerpt\":\"<h4><strong>1. 核心定位：一个以Python为先、灵活强大的深度学习框架</strong></h4>\\n<p>PyTorch是构建所有现代AI模型（包括Transformer）的底层基础。它并非一个开箱即用的“应用”，而是一个“工具箱”或“开发平台”。开发者可以用它来定义、训练和部署任意复杂的神经网络。</p>\\n<ul>\\n<li><strong>与Spring的类比</strong>：Spring为Java应用提供了Bean管理、依赖注入、AOP等底层能力，但不会规定您的业务逻辑必须如何实现。同样，PyTorch提供了张量（Tensors）、自动求导、神经网络层等核心部件，让开发者可以自由地构建任何能想象到的模型结构，<strong>控制力极强</strong>。</li>\\n<li><strong>Pythonic（贴近Python风格）</strong>：PyTorch的设计哲学与Python的风格深度融合，其代码直观、易于上手，调试过程也像在写普通的Python程序一样简单，这是它广受学术界和研究人员喜爱的重要原因。</li>\\n</ul>\"}")
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
