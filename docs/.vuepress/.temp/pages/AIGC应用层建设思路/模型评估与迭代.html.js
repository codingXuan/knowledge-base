import comp from "/Users/zhutingxuan/IdeaProjects/knowledge-base/docs/.vuepress/.temp/pages/AIGC应用层建设思路/模型评估与迭代.html.vue"
const data = JSON.parse("{\"path\":\"/AIGC%E5%BA%94%E7%94%A8%E5%B1%82%E5%BB%BA%E8%AE%BE%E6%80%9D%E8%B7%AF/%E6%A8%A1%E5%9E%8B%E8%AF%84%E4%BC%B0%E4%B8%8E%E8%BF%AD%E4%BB%A3.html\",\"title\":\"模型评估与迭代\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"模型评估与迭代\"},\"readingTime\":{\"minutes\":3.6,\"words\":1081},\"filePathRelative\":\"AIGC应用层建设思路/模型评估与迭代.md\",\"excerpt\":\"<p><strong>1. 指导原则：场景、数据与模型的匹配</strong></p>\\n<p>模型评估与迭代的第一步是基于业务的“顶层设计”。其核心原则是实现业务场景、可用数据和模型能力三者之间的最佳匹配。</p>\\n<ul>\\n<li><strong>场景决定模型架构</strong>：\\n<ul>\\n<li><strong>判别式任务</strong>（如意图识别、情感分类）：优先考虑轻量级的BERT、RoBERTa等编码器（Encoder）模型，或传统的机器学习模型（如XGBoost），成本效益高。</li>\\n<li><strong>生成式任务</strong>（如多轮对话、文案撰写、代码生成）：需要选择基于Transformer架构的生成式大语言模型（LLM），如GPT系列、Llama系列，或支持MoE（混合专家）架构的模型以提高效率。</li>\\n</ul>\\n</li>\\n<li><strong>数据决定策略与模型规模</strong>：\\n<ul>\\n<li><strong>数据量极少（&lt; 1万条）</strong>：<strong>不建议进行微调</strong>。微调很可能导致模型“过拟合”，忘记原有的通用能力。此时最佳策略是 <strong>RAG（检索增强生成）</strong>，将少量高质量数据作为上下文，通过Prompt工程来利用大模型的零样本（Zero-shot）或少样本（Few-shot）能力。</li>\\n<li><strong>数据量中等（10万-100万条）</strong>：这是<strong>微调的最佳区间</strong>。可以选择一个合适尺寸的基础模型（如7B、13B，一般不超过30B）进行全量或部分参数微调（如LoRA）。目标是向模型注入领域知识和特定的任务范式。</li>\\n<li><strong>数据量巨大（千万级以上）</strong>：具备了进行**持续预训练（Continual Pre-training）**甚至从零开始训练一个模型（Train from Scratch）的潜力。此时需要选择更大参数量的模型（如70B以上）来有效“吸收”海量数据中的知识。</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
