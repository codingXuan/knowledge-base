---
title: AutoGen
---

#### **1. 核心定位：可定制的多Agent对话（Conversation）框架**
AutoGen是一个开源框架，旨在简化和赋能基于多Agent对话的下一代LLM应用。它的核心是提供一套强大的机制，来定义不同角色的Agent，并精心编排它们之间的“对话流程”，让它们通过“聊天”来协同解决问题。

#### **2. AutoGen的核心组件**
理解AutoGen的关键，在于理解其最基础的两个Agent类型：

**A. **`**AssistantAgent**`** (助理Agent)**

+ **角色**：标准的**“AI工作者”**。它由一个LLM（如GPT-4）驱动，负责执行核心的智能任务，例如：
    - 回答问题
    - 撰写文章
    - **生成代码**
    - 进行推理和规划
+ 它的行为与在ChatGPT中直接对话的体验非常相似。

**B. **`**UserProxyAgent**`** (用户代理Agent)**

+ **角色**：这是AutoGen中一个非常独特且强大的概念。它扮演**“人类的代理人”**或**“代码执行者”**的角色。
+ **核心能力**：
    1. **征求人类反馈**：在对话的关键节点，它可以暂停，并向真实的人类用户提问，请求下一步的指示。
    2. **自动执行代码**：这是它最强大的功能。当`AssistantAgent`生成一段代码（如Python脚本或Shell命令）时，`UserProxyAgent`可以**自动地在本地环境中执行这段代码**，然后将执行结果（成功信息或错误日志）作为新的消息，反馈到对话中，供`AssistantAgent`进行下一步的分析和修正。

**这种“生成代码 -> 执行代码 -> 反馈结果”的闭环，使得AutoGen在需要与真实世界（如文件系统、数据库、网络API）进行交互的任务中表现得极其强大。**

#### **3. 核心协作模式：编排Agent的对话**
**A. 双Agent对话 (Two-Agent Chat)** 这是最基础的模式。通常由一个`AssistantAgent`和一个`UserProxyAgent`组成。

+ **工作流程**：
    1. `UserProxyAgent`代表人类发起一个任务（例如，“帮我画出今天和昨天的股票价格对比图”）。
    2. `AssistantAgent`接收到任务，思考后生成一段Python代码（使用`matplotlib`库）。
    3. `UserProxyAgent`接收到代码，**自动执行**它。
    4. 如果代码执行成功，图表被保存，任务完成。如果代码执行失败（例如，缺少某个库），`UserProxyAgent`会将**错误信息**返回给`AssistantAgent`。
    5. `AssistantAgent`看到错误信息，**自我修正**（例如，生成安装缺失库的`pip install`命令或修正代码bug），然后再次将新代码发给`UserProxyAgent`。
    6. 循环往复，直到任务成功。

**B. 群聊 (Group Chat)** 这是AutoGen更高级、更强大的协作模式，用于解决需要多个专家协同的问题。

+ **核心组件**：
    - **多个专家Agent**：例如，一个`Coder` (程序员Agent)、一个`ProductManager` (产品经理Agent)、一个`Tester` (测试工程师Agent)。
    - `**GroupChat**`: 定义一个包含所有参与者的“聊天室”。
    - `**GroupChatManager**`: 扮演“会议主持人”的角色。它负责在每一轮对话中，根据上下文决定下一个应该由哪个Agent发言，以保证对话能够有条不紊地向着解决问题的方向推进。

#### **4. Python代码示例：一个简单的“代码生成与执行”任务**
Python

```plain
import os
from autogen import AssistantAgent, UserProxyAgent, config_list_from_json

# 0. 加载LLM配置
# 您可以从一个JSON文件中加载，或者直接在代码中设置
# 示例：config_list = [{"model": "gpt-4o", "api_key": "YOUR_API_KEY"}]
config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")

# 1. 创建助理Agent (AI工作者)
assistant = AssistantAgent(
    name="assistant",
    llm_config={
        "config_list": config_list,
        "temperature": 0
    }
)

# 2. 创建用户代理Agent (人类代理/代码执行者)
user_proxy = UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",  # 在这个例子中，我们不寻求人类输入
    max_consecutive_auto_reply=10,
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
    code_execution_config={
        "work_dir": "coding",  # 指定一个工作目录来保存和执行代码
        "use_docker": False,   # 为了简单，我们不使用Docker。生产环境建议开启。
    },
    llm_config={ "config_list": config_list }
)

# 3. 发起任务
# user_proxy代表人类向assistant发起一个对话
user_proxy.initiate_chat(
    assistant,
    message="""
    What is the date today? Compare the year-to-date gain for META and TESLA.
    (今天是几号？对比一下META和TESLA从年初至今的股价涨幅。)
    """
)
```

在这个例子中，`assistant`会生成获取股价并计算涨幅的Python代码，`user_proxy`会自动执行这段代码，并将结果或错误返回，整个过程将自动进行，直到问题被解决。

#### **5. AutoGen在生态中的位置**
+ **与LangChain的关系**：AutoGen是一个更高层次的、专注于多Agent**对话编排**的框架。LangChain提供了构建Agent所需的基础工具，但要实现像AutoGen这样复杂的、自动化的对话流和代码执行闭环，需要用LangChain手写大量的逻辑。
+ **与CrewAI的对比**：
    - **AutoGen**更像一个**“头脑风暴”**或**“研发小组”**，其对话流程更灵活、动态，甚至有些不可预测，非常适合需要探索和自我修正的复杂任务（特别是涉及代码生成的任务）。 .
    - **CrewAI**更像一条**“生产流水线”**，其流程是预先定义好的、线性的，非常适合自动化那些角色分明、步骤清晰的业务流程。

**总结**：AutoGen是一个极其强大的多Agent框架，尤其擅长处理**需要通过代码生成与真实世界进行交互的任务**。它通过“对话驱动计算”的核心理念，以及独特的`UserProxyAgent`设计，实现了AI的“思考-行动-观察-修正”的强大闭环，是构建高级自动化和问题解决系统的理想选择。

