import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/安全、隐私与伦理.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E5%AE%89%E5%85%A8%E3%80%81%E9%9A%90%E7%A7%81%E4%B8%8E%E4%BC%A6%E7%90%86.html\",\"title\":\"安全、隐私与伦理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"安全、隐私与伦理\"},\"readingTime\":{\"minutes\":3.53,\"words\":1060},\"filePathRelative\":\"AIGC应用层建设思路/安全、隐私与伦理.md\",\"excerpt\":\"<p><strong>1. 核心理念：纵深防御（Defense-in-Depth）</strong></p>\\n<p>构建一个安全、可靠且符合伦理的AIGC应用，需要建立一个多层次的防御体系。每一层都负责处理不同类型的风险，任何一层被绕过，后续的层次依然能提供保护。其防御流程贯穿数据处理的全链路：<code>用户输入 -&gt; 输入审查 -&gt; Prompt构建 -&gt; LLM推理 -&gt; 输出审查 -&gt; 返回用户</code>。</p>\\n<p><strong>2. 安全性（Security）：防范恶意攻击</strong></p>\\n<p>核心目标是防止用户通过恶意输入来操纵、滥用或破坏系统的正常功能。</p>\"}")
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
