---
title: CrewAI
---

#### **1. 核心定位：基于角色扮演的“流程自动化”框架**
CrewAI是一个开源框架，旨在帮助开发者轻松地编排、组织和运行多个自主Agent，让它们协同完成复杂的任务。

它的核心理念是**“角色扮演（Role-Playing）”**和**“任务驱动（Task-Driven）”**。开发者不再需要去思考Agent之间底层的通信细节，而是像一个项目经理一样，去定义团队里需要哪些“角色”，每个角色需要完成哪些“任务”，以及整个团队的“工作流程”。

#### **2. CrewAI的四大核心组件**
构建一个CrewAI应用，需要理解并定义以下四个核心概念：

**A. **`**Agent**`** (智能体) - 团队里的“成员”** 这是执行工作的基本单位。定义一个Agent时，需要赋予它一个清晰的“人设”：

+ `**role**`** (角色)**：一个简洁的职位名称，如“高级市场研究员”。
+ `**goal**`** (目标)**：这个角色需要达成的最终目的，如“发现下一个热门的AI技术趋势”。
+ `**backstory**`** (背景故事)**：对这个角色经验、专长的详细描述。这部分会极大地影响Prompt的质量，让LLM能更好地代入角色进行思考。
+ `**tools**`** (工具)**：这个角色被授权使用的工具列表（例如，网络搜索工具、文件读写工具）。
+ `**llm**`：指定这个Agent使用哪个LLM作为其“大脑”。

**B. **`**Task**`** (任务) - 分配给成员的“工作”** 这是需要被完成的具体工作单元。

+ `**description**`** (描述)**：对任务的详细、清晰的描述，支持变量占位符。
+ `**agent**`** (执行者)**：明确指定这个任务由哪个Agent来执行。
+ `**expected_output**`** (预期输出)**：明确告知任务完成后，应该产出什么格式和内容的成果。

**C. **`**Tool**`** (工具) - 成员的“技能”** 任何可以被Agent使用的函数或能力。CrewAI可以无缝集成LangChain的工具（Tools），这极大地扩展了其能力。

**D. **`**Crew**`** (团队) - 组织起来的“项目组”** 这是将所有Agent和Task组合在一起并负责运行的最高层对象。

+ `**agents**`: 包含所有参与工作的Agent的列表。
+ `**tasks**`: 包含所有需要被完成的任务的列表。
+ `**process**`: **（关键）**定义了团队的工作流程。

#### **3. 工作流程 (Process)：指挥团队如何协作**
`process`是`Crew`的核心，它规定了任务被执行的顺序和方式。

+ **顺序流程 (Sequential Process)**：
    - 这是默认的、最简单的工作流。
    - `Crew`会像一条**流水线**一样，严格按照在`tasks`列表中定义的顺序，一个接一个地执行任务。前一个任务的输出可以作为后一个任务的输入。
+ **层级流程 (Hierarchical Process)**：
    - 这是一个更高级、更智能的工作流。
    - 开发者可以指定一个“经理Agent”，由它来根据项目目标，**动态地、自主地决定**任务的执行顺序、甚至可以创建新的子任务。
    - 这使得`Crew`能够应对更复杂、需要动态规划的场景，但同时也增加了不确定性。

#### **4. Python代码示例：组建一个“市场研究与报告撰写”团队**
假设我们的目标是“分析AI在自动驾驶领域的最新进展，并撰写一篇博客文章”。

Python

```plain
import os
from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI

# 建议设置您的OpenAI API密钥
os.environ["OPENAI_API_KEY"] = "YOUR_API_KEY"
# 如果使用国内模型服务，可以配置base_url
# os.environ["OPENAI_API_BASE"] = "http://localhost:8000/v1" 

# 0. 定义一个LLM实例供所有Agent使用
llm = ChatOpenAI(model="gpt-4o") 

# 1. 定义团队成员 (Agents)
#    成员一：研究员
researcher = Agent(
  role='高级AI技术研究员',
  goal='发现并总结AI在自动驾驶领域的最新突破和关键参与者',
  backstory='你是一位在顶尖科技公司工作多年的AI专家，对技术趋势有敏锐的洞察力。',
  verbose=True,
  llm=llm
  # tools=[search_tool]  # 可以挂载网络搜索等工具
)

#    成员二：作家
writer = Agent(
  role='专业的科技博主',
  goal='将复杂的技术信息，用通俗易懂、引人入胜的语言撰写成一篇博客文章',
  backstory='你拥有将技术概念转化为精彩故事的天赋，你的文章在网络上广受欢迎。',
  verbose=True,
  llm=llm
)

# 2. 定义需要完成的任务 (Tasks)
#    任务一：研究
research_task = Task(
  description='调研并分析2025年上半年AI在自动驾驶领域的最新进展，重点关注技术突破和主要公司动态。',
  expected_output='一份包含3-5个关键要点的、简洁的总结报告。',
  agent=researcher
)

#    任务二：写作
writing_task = Task(
  description='利用研究员提供的总结报告，撰写一篇面向技术爱好者的博客文章，文章需要生动有趣，并包含一个吸引人的标题。',
  expected_output='一篇格式为Markdown的、大约500字的完整博客文章。',
  agent=writer
)

# 3. 组建团队并设定流程 (Crew)
#    我们使用顺序流程，先研究后写作
tech_crew = Crew(
  agents=[researcher, writer],
  tasks=[research_task, writing_task],
  process=Process.sequential,
  verbose=2
)

# 4. 启动任务！
result = tech_crew.kickoff()

print("######################")
print("任务完成! 最终产出的博客文章:")
print(result)
```

#### **5. CrewAI在生态中的位置**
+ **与LangChain的关系**：CrewAI是构建在LangChain（特别是其工具和模型接口）之上的**更高层抽象**。它提供了一套“有主张的（opinionated）”多Agent协作框架，让开发者不必像在LangChain中那样手动搭建状态机或复杂的Chain来控制流程。
+ **与AutoGen的对比**：
    - **CrewAI**更适合**目标明确、流程清晰**的任务，如同一个分工明确的**“生产流水线”**。
    - **AutoGen**更适合**开放性、探索性**的任务，如同一个专家团队在进行**“头脑风暴”**，其过程和结果更具动态性。

**总结**：CrewAI是当您需要构建一个**角色分明、流程化**的多Agent系统时的绝佳选择。它通过直观的“团队-任务”模型，极大地简化了多Agent应用的开发，让开发者可以快速地将复杂的业务流程自动化，是所有希望实践多Agent协作的开发者的理想入门和生产力工具。

