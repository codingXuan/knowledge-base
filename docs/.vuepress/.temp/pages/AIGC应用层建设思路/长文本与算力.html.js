import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/长文本与算力.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E9%95%BF%E6%96%87%E6%9C%AC%E4%B8%8E%E7%AE%97%E5%8A%9B.html\",\"title\":\"长文本与算力\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"长文本与算力\"},\"readingTime\":{\"minutes\":4.93,\"words\":1479},\"filePathRelative\":\"AIGC应用层建设思路/长文本与算力.md\",\"excerpt\":\"<h4><strong>1. 核心挑战：Transformer的二次方复杂度瓶颈</strong></h4>\\n<p>要解决问题，首先要理解其根源。标准Transformer模型处理长文本时面临的核心挑战是其<strong>自注意力（Self-Attention）机制的二次方复杂度</strong>。</p>\\n<ul>\\n<li><strong>计算量</strong>：序列长度增加一倍，注意力计算量增加约四倍。</li>\\n<li><strong>显存占用</strong>：存储注意力分数矩阵所需的显存同样以<code>O(n²)</code>级别增长。</li>\\n</ul>\\n<p>这意味着当文本长度从1k增加到32k时，对算力和显存的需求会增长约1000倍。因此，所有的优化策略，都是在想办法绕过或缓解这个瓶颈。</p>\"}")
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
