import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/AIGC应用层建设思路.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF.html\",\"title\":\"AIGC应用层建设思路\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"AIGC应用层建设思路\"},\"readingTime\":{\"minutes\":2.35,\"words\":706},\"filePathRelative\":\"AIGC应用层建设思路/AIGC应用层建设思路.md\",\"excerpt\":\"<h4>ai应用建设思路。</h4>\\n<p>在没有算法支持的情况下，构建AI应用，我认为必须具备以下三个核心要素：</p>\\n<ol>\\n<li><strong>强大的开源或闭源模型</strong></li>\\n<li><strong>高质量的数据</strong></li>\\n<li><strong>有效的超参数微调方法</strong></li>\\n</ol>\\n<p>目前市面上的开源模型大多基于具备普适性的大众数据进行训练。然而，企业所需的应用层模型往往涉及更为专业的数据和知识，这些领域的认知是通用模型难以全面理解的。例如，虽然开源模型可以正确回答“心理学是什么学科”，但如果询问关于医学领域的IPT（整合心理治疗），它可能会无法理解或给出错误的回答。因此，按照我的理解，构建AIGC应用的首要任务是收集相关领域的专业知识，并搭建知识库或向量库（即RAG），以便AI能够掌握这些特定的概念。</p>\"}")
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
