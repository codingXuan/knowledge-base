---
title: BGE模型
date: 2025-04-25 
---

#### **1. BGE Embedding模型：语义检索的“全能冠军”**
BGE (BAAI General Embedding) 的核心定位是成为一个**通用、高性能**的文本嵌入模型系列。它经过了从`v1.5`版本到最新的`M3`版本的持续迭代，能力不断增强。

##### **旗舰模型：BGE-M3**
BGE-M3是该系列的最新力作，它不仅仅是一个Embedding模型，更是一个**“多功能一体化”的检索基础模型**。

+ **超强的多语言能力 (Multi-Lingual)**：BGE-M3原生支持**超过100种语言**，能够在一个统一的语义空间中处理和理解多语言文本，非常适合需要处理跨语言信息的业务场景。
+ **超长的上下文窗口 (Large Context Window)**：支持高达**8192个Token**的输入长度，远超`m3e-base`和早期BGE模型的512个Token，能够捕捉更丰富的长文本上下文信息。
+ **一体化的检索能力 (Multi-Functionality)**：这是BGE-M3最核心的创新。它**同时支持三种检索模式**：
    1. **稠密检索 (Dense Retrieval)**：即传统的语义向量检索，擅长理解意图和概念。
    2. **稀疏检索 (Lexical Retrieval)**：类似于传统的关键词搜索（如BM25），擅长精确匹配关键词和术语。
    3. **多向量检索 (Multi-Vector Retrieval)**：采用ColBERT模型的思想，将文本中的每个Token都生成一个向量，实现更精细化的“词对词”匹配，精准度更高。 BGE-M3可以将这三种检索方式的优势结合起来，实现**混合检索（Hybrid Retrieval）**，其效果远超单一的语义检索。

#### **2. BGE Reranker模型：检索结果的“精度过滤器”**
这是要重点理解的新概念。单纯的Embedding模型负责的是**“召回（Recall）”**阶段，即从海量文档中，快速捞出几十个可能相关的候选文档。但这个阶段更注重速度和覆盖面，精准度不一定是最高的。为了解决这个问题，就引入了第二阶段的“精排”——**Reranker**。

##### **A. 什么是Reranker？**
Reranker（重排序模型）是一个**跨编码器（Cross-Encoder）**模型。它与Embedding模型（双编码器）的工作方式完全不同：

+ **Embedding模型 (双编码器)**：将“问题”和“文档”**分开独立地**编码成向量，然后计算向量之间的距离。速度快，适合大规模召回。
+ **Reranker模型 (跨编码器)**：将“问题”和**每一个候选文档拼接在一起**（`[CLS] query [SEP] document [SEP]`），作为一个整体输入到模型中，让模型内部的Transformer层进行充分的注意力交互，最终输出一个**单一的相关性分数（Relevance Score）**。

因为Reranker对问题和文档进行了深度的交叉注意力计算，所以它对二者之间相关性的判断**远比向量距离计算要精准得多**。

##### **B. 两阶段检索（Two-Stage Retrieval）工作流**
一个集成了Reranker的、先进的RAG流程如下：

1. **召回阶段 (Recall Stage)**：
    - 使用高性能的Embedding模型（如BGE-M3），将用户问题编码成向量。
    - 在向量数据库中进行相似度搜索，快速找出**Top-K**个候选文档（例如，K=50或100）。这个阶段的目标是“宁可错杀，不可放过”。
2. **精排阶段 (Rerank Stage)**：
    - 将用户问题和第一阶段召回的50个候选文档，逐一配对。
    - 将这50个`（问题，文档）`对送入BGE Reranker模型。
    - Reranker会为每一个文档对输出一个精确的相关性分数。
    - 根据分数从高到低进行排序，选取**最终的Top-N**个文档（例如，N=3或5）作为最精准的上下文，提交给LLM。

##### **C. BGE Reranker的优势**
+ **显著提升精准度**：通过引入精排阶段，可以过滤掉大量在召回阶段被错误引入的“噪音”文档，为LLM提供一个更干净、更相关的上下文，从而极大地提升最终生成答案的质量。
+ **开源且强大**：BGE Reranker同样由智源研究院开发，性能卓越，可以免费私有化部署。

#### **3. 如何使用BGE系列**
##### **示例1：使用BGE-M3进行Embedding**
Python

```plain
from sentence_transformers import SentenceTransformer

sentences_1 = ["今天天气怎么样"]
sentences_2 = ["你好世界", "明天的天气如何"]

# 加载BGE-M3模型
model = SentenceTransformer('BAAI/bge-m3')

# 将文本编码为向量
embeddings_1 = model.encode(sentences_1, normalize_embeddings=True)
embeddings_2 = model.encode(sentences_2, normalize_embeddings=True)

# 计算余弦相似度
similarity = embeddings_1 @ embeddings_2.T
print(similarity)
# 输出: [[0.5315 0.9814]] 
# 可以看到"今天天气怎么样"和"明天的天气如何"的相似度非常高
```

##### **示例2：使用BGE Reranker进行精排**
需要先安装 `bge-rerank` 库: `pip install bge-rerank`

Python

```plain
from BgeRerank import BgeRerank

# 模拟一个问题和一组从召回阶段获取的候选文档
query = "今天北京天气怎么样？"
documents = [
    "北京今天晴转多云，气温15至25摄氏度，微风。",
    "上海明天有雨，请注意携带雨具。",
    "如何做一道美味的红烧肉？",
    "北京今日空气质量良好，适合户外活动。"
]

# 加载Reranker模型
reranker = BgeRerank('BAAI/bge-reranker-large')

# 调用compute_score方法计算相关性分数
scores = reranker.compute_score([(query, doc) for doc in documents])
print(scores)
# 输出类似: [0.98, 0.15, 0.01, 0.95] (具体数值可能不同)

# 根据分数可以判断，第一个和第四个文档与问题的相关性最高
```

**总结**：BGE系列为开发者提供了一套**从粗到精**的完整开源检索方案。使用**BGE-M3**进行大规模、多语言、多功能的**“粗召回”**，再用**BGE-Reranker**进行高精度的**“精排序”**，已经成为当前构建生产级、SOTA（State-of-the-art）RAG系统的最佳实践之一。

