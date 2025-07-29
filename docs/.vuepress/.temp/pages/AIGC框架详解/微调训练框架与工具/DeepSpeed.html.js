import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/微调训练框架与工具/DeepSpeed.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%BE%AE%E8%B0%83%E8%AE%AD%E7%BB%83%E6%A1%86%E6%9E%B6%E4%B8%8E%E5%B7%A5%E5%85%B7/DeepSpeed.html\",\"title\":\"DeepSeed\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"DeepSeed\"},\"readingTime\":{\"minutes\":4.63,\"words\":1389},\"filePathRelative\":\"AIGC框架详解/微调训练框架与工具/DeepSpeed.md\",\"excerpt\":\"<h4><strong>1. 核心定位：大规模AI模型的“超级增压器”</strong></h4>\\n<p>如果说PyTorch是制造发动机的工具箱，那么DeepSpeed就是一套为这款发动机设计的、集成了<strong>涡轮增压、氮气加速、先进冷却系统于一体的“极限性能改装套件”</strong>。</p>\\n<p>它的核心价值在于，让您能够在现有的硬件上，训练和推理更大规模的模型，或者以更高的效率来训练和推理同等规模的模型。它通过在并行计算、内存优化和推理加速等多个维度提供极致的优化来实现这一目标。</p>\\n<h4><strong>2. 训练优化：ZeRO——DeepSpeed的“黑科技”</strong></h4>\"}")
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
