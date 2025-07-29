import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/微调策略.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E5%BE%AE%E8%B0%83%E7%AD%96%E7%95%A5.html\",\"title\":\"微调策略\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"微调策略\"},\"readingTime\":{\"minutes\":6.48,\"words\":1943},\"filePathRelative\":\"AIGC应用层建设思路/微调策略.md\",\"excerpt\":\"<h4><strong>1. 微调的目标与定位</strong></h4>\\n<p>在上一篇文章中，我分享了对微调的理解。微调是在预训练模型的基础上，针对垂直领域进行特定任务的训练，或者可以理解为使用自身数据来进一步优化模型，使其更好地适应特定业务场景。这个过程的核心在于通过调整一系列关键参数和策略，来引导模型学习新的知识和行为范式。</p>\\n<h4><strong>2. 微调策略的核心支柱</strong></h4>\\n<p>一个成功的微调任务，可以从三个核心支柱来进行顶层设计：</p>\\n<ul>\\n<li><strong>A. 数据策略</strong>：定义了模型“学什么”。这包括如何准备、清洗和组织训练数据，以及如何设定输入输出的长度限制等。</li>\\n<li><strong>B. 优化策略</strong>：定义了模型“怎么学”。这涉及到学习率、批次大小、优化器等超参数的选择，它们共同决定了模型参数更新的数学过程。</li>\\n<li><strong>C. 训练策略</strong>：定义了“如何保障学习过程顺利进行”。这涉及到训练的步数/轮次、模型的保存与评估机制、以及使用何种分布式或加速技术（如DeepSpeed）等工程层面的配置。</li>\\n</ul>\"}")
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
