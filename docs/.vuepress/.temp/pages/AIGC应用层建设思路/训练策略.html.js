import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/训练策略.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E8%AE%AD%E7%BB%83%E7%AD%96%E7%95%A5.html\",\"title\":\"训练策略\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"训练策略\"},\"readingTime\":{\"minutes\":4.39,\"words\":1317},\"filePathRelative\":\"AIGC应用层建设思路/训练策略.md\",\"excerpt\":\"<h5><strong>1. 训练的目标：为何需要训练？</strong></h5>\\n<p>在聊训练策略之前，先要阐述一个概念，为什么要做数据训练？</p>\\n<p>通过海量数据让大语言模型（如GLM、GPT等）进行学习，使其能够理解和生成自然语言。这个过程类似于人类通过阅读大量的书籍和文章来学习语言。模型通过数据训练，逐渐掌握语法、语义、上下文理解等语言的各个方面，从而能够在面对新问题时生成有意义的回答或执行特定任务。</p>\\n<p>用通俗易懂的说法可以理解为，<strong>人类整理的数据就是大模型的老师</strong>。它的一切知识都来源于训练的数据。</p>\\n<h5><strong>2. 训练的基石：数据是第一要义</strong></h5>\"}")
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
