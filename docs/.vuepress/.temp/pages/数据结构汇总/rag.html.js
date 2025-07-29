import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/数据结构汇总/rag.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E6%B1%87%E6%80%BB/rag.html\",\"title\":\"rag\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"rag\"},\"readingTime\":{\"minutes\":4.93,\"words\":1480},\"filePathRelative\":\"数据结构汇总/rag.md\",\"excerpt\":\"<h4><strong>1. RAG的数据结构设计：为精准检索奠定基石</strong></h4>\\n<p>构建一个健壮的RAG系统的第一步，是设计一个优秀的、信息丰富的<strong>数据结构</strong>。我们存入向量数据库的，不应该仅仅是“文本块+向量”，而是一个结构化的**“数据节点（Node/Chunk）”**。</p>\\n<p><strong>一个理想的数据节点Schema应包含：</strong></p>\\n<table>\\n<thead>\\n<tr>\\n<th>字段名</th>\\n<th>类型</th>\\n<th>描述</th>\\n<th>示例</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>chunk_id</code></td>\\n<td>String (UUID)</td>\\n<td><strong>唯一的块ID</strong>。用于精确引用和更新。</td>\\n<td><code>“c1a2b3d4-…”</code></td>\\n</tr>\\n<tr>\\n<td><code>content</code></td>\\n<td>String</td>\\n<td><strong>文本块原文</strong>。这是将要被Embedding和提供给LLM的核心内容。</td>\\n<td><code>“RAG的核心是检索...”</code></td>\\n</tr>\\n<tr>\\n<td><code>vector</code></td>\\n<td>Array[Float]</td>\\n<td><strong>文本块的向量表示</strong>。由Embedding模型生成。</td>\\n<td><code>[0.12, -0.45, ...]</code></td>\\n</tr>\\n<tr>\\n<td><code>metadata</code></td>\\n<td>Object/JSON</td>\\n<td><strong>丰富的元数据</strong>。这是实现高级功能的关键，必须精心设计。</td>\\n<td>(见下方详细示例)</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
