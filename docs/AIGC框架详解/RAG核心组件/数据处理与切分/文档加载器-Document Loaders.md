---
title: 文档加载器
---

#### **1. 核心定位：连接数据源的“万能插头”**
Document Loaders (文档加载器) 是RAG流程的**起点**。它的核心职责是读取来自各种不同来源和格式的数据，并将其转换成一个标准化的、LangChain或LlamaIndex能够理解的 `Document` 对象。

一个 `Document` 对象通常包含两部分内容：

+ `**page_content**`: 文档的主要文本内容。
+ `**metadata**`: 描述文档的元数据，例如来源文件名、页码、网址、作者等。

#### **2. Loader 和 Splitter 的核心区别**
| 特性 | **Document Loaders (文档加载器)** | **Text Splitters (文本分割器)** |
| --- | --- | --- |
| **核心职责** | **数据读取**与**格式解析** (I/O & Parsing) | **内容处理**与**文本切分** (Processing & Chunking) |
| **处理对象** | 外部数据源 (文件, 网页, 数据库等) | `Document`<br/> 对象的 `page_content` |
| **输入** | 文件路径, URL, API凭证等 | 一个或多个 `Document`<br/> 对象 |
| **输出** | 一个或多个标准化的 `Document`<br/> 对象 | 一系列更小的 `Document`<br/> 对象 (Chunks) |
| **工作流程** | RAG数据管道的**第一步** | RAG数据管道的**第二步** |




#### **3. 为什么需要五花八门的Document Loaders？**
因为现实世界的数据源是多种多样的。我们不可能用同一种方法来读取所有类型的数据。例如：

+ 读取一个 `.txt` 文件，只需要简单的文件I/O操作。
+ 读取一个 `.pdf` 文件，需要专门的PDF解析库来提取文本和元数据。
+ 读取一个网页，需要发起HTTP请求，并用HTML解析库（如Beautiful Soup）来提取正文内容。
+ 读取一个Notion页面，需要调用Notion的官方API。

LangChain和LlamaIndex的强大之处，就在于它们社区提供了**数百种**预置的Document Loaders，让开发者无需为每一种数据源都手动编写一套复杂的解析代码。

#### **4. 常见的Document Loader类型（以LangChain为例）**
+ **文件加载器 (File Loaders)**
    - `TextLoader`: 加载 `.txt` 文件。
    - `PyPDFLoader`: 加载 `.pdf` 文件，并将每一页作为一个`Document`对象。
    - `CSVLoader`: 加载 `.csv` 文件，可将每一行或指定列作为`Document`。
    - `JSONLoader`: 加载 `.json` 文件，并支持用 [JSONPath](https://jsonpath.com/) 语法来抽取需要的内容。
    - `UnstructuredLoader`: 一个“全能型”加载器，能处理包括Word(`.docx`), PowerPoint(`.pptx`), HTML, EML等多种复杂格式的文件。
+ **网络加载器 (Web Loaders)**
    - `WebBaseLoader`: 加载单个网页。
    - `RecursiveUrlLoader`: 可以递归地爬取一个网站下的所有链接页面。
+ **集成加载器 (Integration Loaders)**
    - `NotionDirectoryLoader`: 加载整个Notion数据库或页面。
    - `SlackLoader`: 加载Slack频道中的聊天记录。
    - `WikipediaLoader`: 直接从维基百科加载词条。

#### **5. 实践示例：Loader与Splitter的协同工作**
下面的代码展示了“先加载，后切分”的完整流程。

Python

```plain
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# --- 第 1 步: 使用Document Loader加载数据 ---
# 实例化一个PDF加载器，指向您的PDF文件
loader = PyPDFLoader("example_document.pdf")

# 调用load()方法，将PDF的每一页加载成一个Document对象
# 假设PDF有3页，那么 docs 就是一个包含3个Document对象的列表
docs = loader.load()

print(f"文档加载完成，共加载了 {len(docs)} 页。")
print("--- 原始Document内容示例 (第一页) ---")
print(docs[0].page_content[:300]) # 打印第一页的前300个字符
print(f"元数据: {docs[0].metadata}")
print("\n" + "="*50 + "\n")


# --- 第 2 步: 使用Text Splitter切分加载好的文档 ---
# 实例化一个文本分割器
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

# 调用split_documents()方法，将所有加载的Document对象进行切分
# 3页的文档可能会被切分成几十个更小的块(Chunks)
chunks = text_splitter.split_documents(docs)

print(f"文本切分完成，共得到 {len(chunks)} 个文本块 (Chunks)。")
print("--- 切分后的Chunk内容示例 (第一个Chunk) ---")
print(chunks[0].page_content)
print(f"Chunk的元数据 (继承自原始页): {chunks[0].metadata}")
```

**总结**：Document Loader是RAG系统与多样化数据世界之间的桥梁。它负责**“标准化”**，将任何来源的数据都转换成统一的**`**Document**`**格式，为后续的**“精细化”**处理（由Text Splitter完成）铺平道路。选择合适的Loader，是构建高效、健壮RAG数据管道的第一步。

