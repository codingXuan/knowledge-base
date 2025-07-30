---
title: RAG建设
date: 2024-05-11 
---

#### **1. 核心理念：为LLM配备一个可检索的“长期记忆”**
RAG（Retrieval-Augmented Generation，检索增强生成）是一种将**信息检索（Retrieval）**与**文本生成（Generation）**相结合的强大架构。其核心理念是，在让大语言模型（LLM）回答问题或执行任务之前，先从一个外部的、可信的知识库中检索出最相关的信息片段，并将这些信息作为上下文（Context）一并提供给LLM。

这种方式的优势在于：

+ **缓解模型幻觉**：确保LLM的回答**有据可依（Grounded）**，答案来源于我们提供的知识，而不是模型自身的凭空捏造。
+ **知识动态更新**：当知识发生变化时，我们只需更新外部知识库，而无需重新训练昂贵的LLM。
+ **处理私有数据**：能够让LLM安全地利用企业内部的私有数据，而无需将这些数据用于模型训练。

#### **2. 技术选型：从“库”到“数据库”的权衡 (Faiss vs. Milvus)**
构建RAG系统的核心，是选择一个合适的**向量存储与检索方案**。

+ **Faiss**：是一个高性能的**向量检索算法库**。它专注于提供极致的内存内（in-memory）搜索速度，但它本身不提供数据存储、元数据管理、网络服务等数据库功能。它更像一个“高性能引擎零件”。
+ **Milvus**：是一个真正的**分布式向量数据库**。它在底层可能集成了类似Faiss的算法，但在其上构建了完整的数据库服务，包括：
    - **数据持久化存储**
    - **向量与元数据的增删改查（CRUD）**
    - **强大的标量过滤（Scalar Filtering）**
    - **高可用与可扩展性**

**选型结论**：对于需要与现有数据库（如MySQL）协同工作、处理复杂元数据、并面向生产环境的企业级应用，功能全面的**Milvus是比Faiss更合适的选择**。

#### **3. 数据结构设计：为精准过滤与溯源而生**
一个健壮的RAG数据结构，是实现精准过滤和答案溯源的关键。您提出的结构很好，我们可以将其泛化并扩展，使其更具通用性。

我们存储在Milvus中的核心单元是一个**“数据块（Chunk）”**，其理想的Schema应包含：

| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| `chunk_id` | `INT64`<br/> (Primary Key) | 唯一的块ID，建议自动生成。 |
| `content` | `VARCHAR` | 文本块的原文，这是提供给LLM的核心上下文。 |
| `embedding` | `FLOAT_VECTOR` | `content`<br/>对应的向量。 |
| `metadata` | `JSON` | **（关键）**包含所有元信息的JSON对象。 |




****`metadata`** 示例**：



```plain
{
  "source_type": "concept", // 您定义的类型，如 concept, knowledge_card
  "document_title": "IPT 第一次诊疗框架",
  "original_file_path": "/docs/ipt/session1.pdf",
  "page_number": 1,
  "last_updated": "2025-07-26T10:00:00Z"
}
```

**数据同步策略**：通过CDC工具或脚本将MySQL数据同步到Milvus，能确保关系型数据与向量数据的最终一致性。

#### **4. RAG实现流程**
Python

```plain
import torch
from sentence_transformers import SentenceTransformer # 使用专门的库
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection

# --- 1. 加载专门的Embedding模型 ---
# 这是一个更专业、更高效的选择
device = "cuda"
# 从Hugging Face加载BGE模型，或加载您本地下载好的路径
embedding_model = SentenceTransformer('BAAI/bge-large-zh-v1.5', device=device)

# --- 2. 准备数据 ---
# 假设documents是一个结构化的列表，例如:
# documents = [{"id": 1, "type": "concept", "content": "在第一次诊疗中..."}, ...]
documents = [
    {"id": 1, "type": "concept", "content": "在第一次诊疗中，治疗师需要建立治疗关系，收集病史，询问病情等。"},
    {"id": 2, "type": "knowledge_card", "content": "治疗师需要了解患者的病史，包括过去的心理健康状况、治疗经历等。"}
]

# --- 3. 将文本批量转换为向量 ---
texts = [doc["content"] for doc in documents]
# 使用embedding_model进行编码，速度更快，效果更好
vectors = embedding_model.encode(texts, normalize_embeddings=True)
dim = vectors.shape[1] # 获取向量维度

# --- 4. 连接到Milvus并创建Collection ---
connections.connect("default", host='your_milvus_host', port='19530')

collection_name = "rag_collection_bge"
if collection_name in utility.list_collections():
    utility.drop_collection(collection_name)

fields = [
    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True),
    FieldSchema(name="type", dtype=DataType.VARCHAR, max_length=100),
    FieldSchema(name="content", dtype=DataType.VARCHAR, max_length=2000), # 建议也存入原文
    FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=dim)
]
schema = CollectionSchema(fields, "RAG collection with BGE embedding model")
collection = Collection(name=collection_name, schema=schema)

# --- 5. 插入数据 ---
entities = [
    [doc["id"] for doc in documents],
    [doc["type"] for doc in documents],
    [doc["content"] for doc in documents],
    vectors
]
collection.insert(entities)
collection.flush()
print(f"成功插入 {collection.num_entities} 条数据。")

# --- 6. 创建索引并加载 ---
index_params = {"index_type": "IVF_FLAT", "metric_type": "L2", "params": {"nlist": 128}}
collection.create_index(field_name="embedding", index_params=index_params)
collection.load()

# --- 7. 查询示例 ---
query_text = "诊疗关系和病史收集"
query_vector = embedding_model.encode([query_text], normalize_embeddings=True)

search_params = {"metric_type": "L2", "params": {"nprobe": 10}}
results = collection.search(
    data=query_vector, 
    anns_field="embedding", 
    param=search_params, 
    limit=10, 
    output_fields=["id", "type", "content"] # 指定需要返回的字段
)

# --- 8. 输出查询结果 ---
print("\n查询结果:")
for hit in results[0]:
    print(f"Document ID: {hit.entity.get('id')}, Type: {hit.entity.get('type')}, Distance: {hit.distance}")
    print(f"Content: {hit.entity.get('content')}")
```



