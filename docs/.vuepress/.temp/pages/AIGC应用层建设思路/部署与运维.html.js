import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/部署与运维.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E9%83%A8%E7%BD%B2%E4%B8%8E%E8%BF%90%E7%BB%B4.html\",\"title\":\"部署与运维\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"部署与运维\"},\"readingTime\":{\"minutes\":3.38,\"words\":1015},\"filePathRelative\":\"AIGC应用层建设思路/部署与运维.md\",\"excerpt\":\"<p><strong>1. 核心原则：将CI/CD扩展到模型和数据</strong></p>\\n<p>LLMOps（大语言模型运维）的核心，是将传统DevOps中成熟的自动化、持续集成、持续部署（CI/CD）原则，扩展到包含**代码（Code）、模型（Model）和数据（Data）**三位一体的AI应用生命周期管理中。其目标是实现AI应用快速、可靠、可复现地交付与迭代。</p>\\n<p><strong>2. LLMOps的生命周期闭环</strong></p>\\n<p>一个完整的LLMOps流程是一个持续的循环：</p>\\n<ol>\\n<li><strong>数据管理与处理 (CI for Data)</strong>：自动化地收集、清洗、标注新的数据，并进行版本化管理。</li>\\n<li><strong>模型训练与微调 (CT for Models)</strong>：当有新数据或新代码时，自动触发模型的微调或训练流程。</li>\\n<li><strong>模型评估与验证 (CI for Models)</strong>：使用“黄金评估集”自动评估新生成的模型，只有当新模型的性能指标优于旧模型时，才允许进入部署环节。</li>\\n<li><strong>模型打包与部署 (CD for Models)</strong>：将通过验证的模型、相关代码和配置打包成一个可部署的单元（如Docker镜像），并根据预设策略部署到生产环境。</li>\\n<li><strong>线上服务与监控</strong>：模型上线后，对其性能、成本、效果和安全性进行全方位监控。</li>\\n<li><strong>反馈收集</strong>：从线上监控和用户反馈中收集有价值的数据，并将其送回到第一步的数据管理环节，形成下一次迭代的基础。</li>\\n</ol>\"}")
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
