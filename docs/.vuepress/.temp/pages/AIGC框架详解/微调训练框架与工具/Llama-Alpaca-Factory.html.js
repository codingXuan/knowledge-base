import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC框架详解/微调训练框架与工具/Llama-Alpaca-Factory.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/%E5%BE%AE%E8%B0%83%E8%AE%AD%E7%BB%83%E6%A1%86%E6%9E%B6%E4%B8%8E%E5%B7%A5%E5%85%B7/Llama-Alpaca-Factory.html\",\"title\":\"Llama-Alpaca-Factory\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Llama-Alpaca-Factory\"},\"readingTime\":{\"minutes\":3.8,\"words\":1139},\"filePathRelative\":\"AIGC框架详解/微调训练框架与工具/Llama-Alpaca-Factory.md\",\"excerpt\":\"<h4><strong>1. 核心定位：一站式、可视化的LLM微调平台</strong></h4>\\n<p>Llama-Factory（现已更名为 Llama-Alpaca-Factory，但通常仍被简称为Llama-Factory）是一个开源项目，其核心目标是<strong>将复杂、代码驱动的LLM微调流程，简化为一个人人都能轻松上手的、可视化的、一键式的操作体验</strong>。</p>\\n<p>它本身并不是一个底层的深度学习框架，而是一个构建在 <strong>Hugging Face <strong><code>**Trainer**</code>、<code>**PEFT**</code>、<code>**transformers**</code> 和 <code>**DeepSpeed**</code> 等一系列强大工具之上的、高度集成的</strong>“上层应用”</strong>。</p>\"}")
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
