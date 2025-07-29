import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/推理服务与部署/vLLM.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%8E%A8%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%8E%E9%83%A8%E7%BD%B2/vLLM.html\",\"title\":\"vLLM\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vLLM\"},\"readingTime\":{\"minutes\":4.47,\"words\":1342},\"filePathRelative\":\"推理服务与部署/vLLM.md\",\"excerpt\":\"<h4><strong>1. 核心定位：LLM推理的“高吞吐量引擎”</strong></h4>\\n<p>vLLM是一个由<strong>加州大学伯克利分校（UC Berkeley）的研究人员开发的、专注于提升LLM推理吞吐量（Throughput）和GPU利用率</strong>的开源库。</p>\\n<p>我们可以用一个餐厅厨房的类比来理解它的价值：</p>\\n<ul>\\n<li><strong>传统的推理框架</strong>：像一个混乱的厨房。厨师（GPU）一次只能炒一桌菜（一个批次），并且必须等这桌所有菜都上齐（批次里最慢的请求完成），才能开始下一桌。如果某个客人点菜快、吃得快（短请求），他也得等着同桌吃得最慢的客人，导致厨师（GPU）大部分时间在<strong>空闲等待</strong>。</li>\\n<li><strong>vLLM</strong>：则是一个配备了<strong>智能调度系统</strong>的现代化中央厨房。系统（vLLM）能源源不断地、见缝插针地给厨师（GPU）派发新的炒菜任务（新请求），确保厨师<strong>永远处于忙碌状态</strong>，极大地提升了出菜的总效率（吞吐量）。</li>\\n</ul>\"}")
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
