import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-DmMQ8k-i.js";const l={};function p(r,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h4 id="_1-核心定位-基于角色扮演的-流程自动化-框架" tabindex="-1"><a class="header-anchor" href="#_1-核心定位-基于角色扮演的-流程自动化-框架"><span><strong>1. 核心定位：基于角色扮演的“流程自动化”框架</strong></span></a></h4><p>CrewAI是一个开源框架，旨在帮助开发者轻松地编排、组织和运行多个自主Agent，让它们协同完成复杂的任务。</p><p>它的核心理念是**“角色扮演（Role-Playing）”<strong>和</strong>“任务驱动（Task-Driven）”**。开发者不再需要去思考Agent之间底层的通信细节，而是像一个项目经理一样，去定义团队里需要哪些“角色”，每个角色需要完成哪些“任务”，以及整个团队的“工作流程”。</p><h4 id="_2-crewai的四大核心组件" tabindex="-1"><a class="header-anchor" href="#_2-crewai的四大核心组件"><span><strong>2. CrewAI的四大核心组件</strong></span></a></h4><p>构建一个CrewAI应用，需要理解并定义以下四个核心概念：</p><p><strong>A. <strong><code>**Agent**</code></strong> (智能体) - 团队里的“成员”</strong> 这是执行工作的基本单位。定义一个Agent时，需要赋予它一个清晰的“人设”：</p><ul><li><code>**role**</code>** (角色)**：一个简洁的职位名称，如“高级市场研究员”。</li><li><code>**goal**</code>** (目标)**：这个角色需要达成的最终目的，如“发现下一个热门的AI技术趋势”。</li><li><code>**backstory**</code>** (背景故事)**：对这个角色经验、专长的详细描述。这部分会极大地影响Prompt的质量，让LLM能更好地代入角色进行思考。</li><li><code>**tools**</code>** (工具)**：这个角色被授权使用的工具列表（例如，网络搜索工具、文件读写工具）。</li><li><code>**llm**</code>：指定这个Agent使用哪个LLM作为其“大脑”。</li></ul><p><strong>B. <strong><code>**Task**</code></strong> (任务) - 分配给成员的“工作”</strong> 这是需要被完成的具体工作单元。</p><ul><li><code>**description**</code>** (描述)**：对任务的详细、清晰的描述，支持变量占位符。</li><li><code>**agent**</code>** (执行者)**：明确指定这个任务由哪个Agent来执行。</li><li><code>**expected_output**</code>** (预期输出)**：明确告知任务完成后，应该产出什么格式和内容的成果。</li></ul><p><strong>C. <strong><code>**Tool**</code></strong> (工具) - 成员的“技能”</strong> 任何可以被Agent使用的函数或能力。CrewAI可以无缝集成LangChain的工具（Tools），这极大地扩展了其能力。</p><p><strong>D. <strong><code>**Crew**</code></strong> (团队) - 组织起来的“项目组”</strong> 这是将所有Agent和Task组合在一起并负责运行的最高层对象。</p><ul><li><code>**agents**</code>: 包含所有参与工作的Agent的列表。</li><li><code>**tasks**</code>: 包含所有需要被完成的任务的列表。</li><li><code>**process**</code>: **（关键）**定义了团队的工作流程。</li></ul><h4 id="_3-工作流程-process-指挥团队如何协作" tabindex="-1"><a class="header-anchor" href="#_3-工作流程-process-指挥团队如何协作"><span><strong>3. 工作流程 (Process)：指挥团队如何协作</strong></span></a></h4><p><code>process</code>是<code>Crew</code>的核心，它规定了任务被执行的顺序和方式。</p><ul><li><strong>顺序流程 (Sequential Process)</strong>： <ul><li>这是默认的、最简单的工作流。</li><li><code>Crew</code>会像一条<strong>流水线</strong>一样，严格按照在<code>tasks</code>列表中定义的顺序，一个接一个地执行任务。前一个任务的输出可以作为后一个任务的输入。</li></ul></li><li><strong>层级流程 (Hierarchical Process)</strong>： <ul><li>这是一个更高级、更智能的工作流。</li><li>开发者可以指定一个“经理Agent”，由它来根据项目目标，<strong>动态地、自主地决定</strong>任务的执行顺序、甚至可以创建新的子任务。</li><li>这使得<code>Crew</code>能够应对更复杂、需要动态规划的场景，但同时也增加了不确定性。</li></ul></li></ul><h4 id="_4-python代码示例-组建一个-市场研究与报告撰写-团队" tabindex="-1"><a class="header-anchor" href="#_4-python代码示例-组建一个-市场研究与报告撰写-团队"><span><strong>4. Python代码示例：组建一个“市场研究与报告撰写”团队</strong></span></a></h4><p>假设我们的目标是“分析AI在自动驾驶领域的最新进展，并撰写一篇博客文章”。</p><p>Python</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import os</span></span>
<span class="line"><span>from crewai import Agent, Task, Crew, Process</span></span>
<span class="line"><span>from langchain_openai import ChatOpenAI</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 建议设置您的OpenAI API密钥</span></span>
<span class="line"><span>os.environ[&quot;OPENAI_API_KEY&quot;] = &quot;YOUR_API_KEY&quot;</span></span>
<span class="line"><span># 如果使用国内模型服务，可以配置base_url</span></span>
<span class="line"><span># os.environ[&quot;OPENAI_API_BASE&quot;] = &quot;http://localhost:8000/v1&quot; </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 0. 定义一个LLM实例供所有Agent使用</span></span>
<span class="line"><span>llm = ChatOpenAI(model=&quot;gpt-4o&quot;) </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 1. 定义团队成员 (Agents)</span></span>
<span class="line"><span>#    成员一：研究员</span></span>
<span class="line"><span>researcher = Agent(</span></span>
<span class="line"><span>  role=&#39;高级AI技术研究员&#39;,</span></span>
<span class="line"><span>  goal=&#39;发现并总结AI在自动驾驶领域的最新突破和关键参与者&#39;,</span></span>
<span class="line"><span>  backstory=&#39;你是一位在顶尖科技公司工作多年的AI专家，对技术趋势有敏锐的洞察力。&#39;,</span></span>
<span class="line"><span>  verbose=True,</span></span>
<span class="line"><span>  llm=llm</span></span>
<span class="line"><span>  # tools=[search_tool]  # 可以挂载网络搜索等工具</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#    成员二：作家</span></span>
<span class="line"><span>writer = Agent(</span></span>
<span class="line"><span>  role=&#39;专业的科技博主&#39;,</span></span>
<span class="line"><span>  goal=&#39;将复杂的技术信息，用通俗易懂、引人入胜的语言撰写成一篇博客文章&#39;,</span></span>
<span class="line"><span>  backstory=&#39;你拥有将技术概念转化为精彩故事的天赋，你的文章在网络上广受欢迎。&#39;,</span></span>
<span class="line"><span>  verbose=True,</span></span>
<span class="line"><span>  llm=llm</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 定义需要完成的任务 (Tasks)</span></span>
<span class="line"><span>#    任务一：研究</span></span>
<span class="line"><span>research_task = Task(</span></span>
<span class="line"><span>  description=&#39;调研并分析2025年上半年AI在自动驾驶领域的最新进展，重点关注技术突破和主要公司动态。&#39;,</span></span>
<span class="line"><span>  expected_output=&#39;一份包含3-5个关键要点的、简洁的总结报告。&#39;,</span></span>
<span class="line"><span>  agent=researcher</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#    任务二：写作</span></span>
<span class="line"><span>writing_task = Task(</span></span>
<span class="line"><span>  description=&#39;利用研究员提供的总结报告，撰写一篇面向技术爱好者的博客文章，文章需要生动有趣，并包含一个吸引人的标题。&#39;,</span></span>
<span class="line"><span>  expected_output=&#39;一篇格式为Markdown的、大约500字的完整博客文章。&#39;,</span></span>
<span class="line"><span>  agent=writer</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3. 组建团队并设定流程 (Crew)</span></span>
<span class="line"><span>#    我们使用顺序流程，先研究后写作</span></span>
<span class="line"><span>tech_crew = Crew(</span></span>
<span class="line"><span>  agents=[researcher, writer],</span></span>
<span class="line"><span>  tasks=[research_task, writing_task],</span></span>
<span class="line"><span>  process=Process.sequential,</span></span>
<span class="line"><span>  verbose=2</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4. 启动任务！</span></span>
<span class="line"><span>result = tech_crew.kickoff()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;######################&quot;)</span></span>
<span class="line"><span>print(&quot;任务完成! 最终产出的博客文章:&quot;)</span></span>
<span class="line"><span>print(result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-crewai在生态中的位置" tabindex="-1"><a class="header-anchor" href="#_5-crewai在生态中的位置"><span><strong>5. CrewAI在生态中的位置</strong></span></a></h4><ul><li><strong>与LangChain的关系</strong>：CrewAI是构建在LangChain（特别是其工具和模型接口）之上的<strong>更高层抽象</strong>。它提供了一套“有主张的（opinionated）”多Agent协作框架，让开发者不必像在LangChain中那样手动搭建状态机或复杂的Chain来控制流程。</li><li><strong>与AutoGen的对比</strong>： <ul><li><strong>CrewAI</strong>更适合<strong>目标明确、流程清晰</strong>的任务，如同一个分工明确的**“生产流水线”**。</li><li><strong>AutoGen</strong>更适合<strong>开放性、探索性</strong>的任务，如同一个专家团队在进行**“头脑风暴”**，其过程和结果更具动态性。</li></ul></li></ul><p><strong>总结</strong>：CrewAI是当您需要构建一个<strong>角色分明、流程化</strong>的多Agent系统时的绝佳选择。它通过直观的“团队-任务”模型，极大地简化了多Agent应用的开发，让开发者可以快速地将复杂的业务流程自动化，是所有希望实践多Agent协作的开发者的理想入门和生产力工具。</p>`,22)]))}const d=s(l,[["render",p]]),t=JSON.parse('{"path":"/tech/AIGC%E6%A1%86%E6%9E%B6%E8%AF%A6%E8%A7%A3/Agent%E6%A1%86%E6%9E%B6/CrewAI.html","title":"CrewAI","lang":"zh-CN","frontmatter":{"title":"CrewAI","date":"2025-06-10T00:00:00.000Z"},"git":{"createdTime":1753758135000,"updatedTime":1753782201000,"contributors":[{"name":"codingXuan","username":"codingXuan","email":"34129858+codingXuan@users.noreply.github.com","commits":2,"url":"https://github.com/codingXuan"}]},"readingTime":{"minutes":5.21,"words":1564},"filePathRelative":"tech/AIGC框架详解/Agent框架/CrewAI.md","excerpt":"<h4><strong>1. 核心定位：基于角色扮演的“流程自动化”框架</strong></h4>\\n<p>CrewAI是一个开源框架，旨在帮助开发者轻松地编排、组织和运行多个自主Agent，让它们协同完成复杂的任务。</p>\\n<p>它的核心理念是**“角色扮演（Role-Playing）”<strong>和</strong>“任务驱动（Task-Driven）”**。开发者不再需要去思考Agent之间底层的通信细节，而是像一个项目经理一样，去定义团队里需要哪些“角色”，每个角色需要完成哪些“任务”，以及整个团队的“工作流程”。</p>\\n<h4><strong>2. CrewAI的四大核心组件</strong></h4>"}');export{d as comp,t as data};
