import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/数据结构汇总/pt_ft.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%B1%87%E6%80%BB/pt_ft.html\",\"title\":\"pt_ft\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"pt_ft\"},\"readingTime\":{\"minutes\":5,\"words\":1499},\"filePathRelative\":\"数据结构汇总/pt_ft.md\",\"excerpt\":\"<h4><strong>Part 1: 继续预训练 (Continued Pre-training, PT)</strong></h4>\\n<p><strong>1. 核心目标：知识灌输 (Knowledge Infusion)</strong></p>\\n<ul>\\n<li><strong>一句话概括</strong>：让模型成为一个**“特定领域的书呆子”**。</li>\\n<li><strong>详细描述</strong>：继续预训练的目标，是向一个已经具备通用知识的LLM（如Qwen），注入<strong>大量特定领域的专业知识和语言风格</strong>。例如，让它学习海量的医学文献、法律文书或公司内部的技术文档。这个过程并不教模型如何“对话”，而是让它熟悉这个领域的词汇、概念、实体关系和叙事方式，使其语言模型的基础概率分布更贴近该领域。</li>\\n</ul>\"}")
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
