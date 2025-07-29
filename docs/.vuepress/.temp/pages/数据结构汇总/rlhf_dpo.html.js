import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/数据结构汇总/rlhf_dpo.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%B1%87%E6%80%BB/rlhf_dpo.html\",\"title\":\"rlhf_dpo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"rlhf_dpo\"},\"readingTime\":{\"minutes\":4.83,\"words\":1450},\"filePathRelative\":\"数据结构汇总/rlhf_dpo.md\",\"excerpt\":\"<h4><strong>1. 核心目标：对齐（Alignment）——让模型更像“人”</strong></h4>\\n<p>在完成了**继续预训练（PT，学习知识）<strong>和</strong>指令微调（SFT，学习遵循指令）**之后，模型已经具备了强大的能力。但此时的模型可能还存在一些问题：</p>\\n<ul>\\n<li>它可能会生成一些无害但无用的“废话”。</li>\\n<li>它的回答可能过于“机械”，缺乏真诚和共情。</li>\\n<li>在面对模棱两可的问题时，它不知道哪种风格的回答更受人类欢迎。</li>\\n</ul>\\n<p><strong>RLHF/DPO</strong>的目标，就是解决这个“好不好”的问题。它通过学习人类的<strong>偏好（Preference）数据，将模型的价值观和行为准则，与人类的期望进行对齐（Alignment）</strong>，使其变得更<strong>有用（Helpful）、诚实（Honest）和无害（Harmless）</strong>。</p>\"}")
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
