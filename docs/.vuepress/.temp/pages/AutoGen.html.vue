<template><div><h4 id="_1-核心定位-可定制的多agent对话-conversation-框架" tabindex="-1"><a class="header-anchor" href="#_1-核心定位-可定制的多agent对话-conversation-框架"><span><strong>1. 核心定位：可定制的多Agent对话（Conversation）框架</strong></span></a></h4>
<p>AutoGen是一个开源框架，旨在简化和赋能基于多Agent对话的下一代LLM应用。它的核心是提供一套强大的机制，来定义不同角色的Agent，并精心编排它们之间的“对话流程”，让它们通过“聊天”来协同解决问题。</p>
<h4 id="_2-autogen的核心组件" tabindex="-1"><a class="header-anchor" href="#_2-autogen的核心组件"><span><strong>2. AutoGen的核心组件</strong></span></a></h4>
<p>理解AutoGen的关键，在于理解其最基础的两个Agent类型：</p>
<p><strong>A. <strong><code v-pre>**AssistantAgent**</code></strong> (助理Agent)</strong></p>
<ul>
<li><strong>角色</strong>：标准的**“AI工作者”**。它由一个LLM（如GPT-4）驱动，负责执行核心的智能任务，例如：
<ul>
<li>回答问题</li>
<li>撰写文章</li>
<li><strong>生成代码</strong></li>
<li>进行推理和规划</li>
</ul>
</li>
<li>它的行为与在ChatGPT中直接对话的体验非常相似。</li>
</ul>
<p><strong>B. <strong><code v-pre>**UserProxyAgent**</code></strong> (用户代理Agent)</strong></p>
<ul>
<li><strong>角色</strong>：这是AutoGen中一个非常独特且强大的概念。它扮演**“人类的代理人”<strong>或</strong>“代码执行者”**的角色。</li>
<li><strong>核心能力</strong>：
<ol>
<li><strong>征求人类反馈</strong>：在对话的关键节点，它可以暂停，并向真实的人类用户提问，请求下一步的指示。</li>
<li><strong>自动执行代码</strong>：这是它最强大的功能。当<code v-pre>AssistantAgent</code>生成一段代码（如Python脚本或Shell命令）时，<code v-pre>UserProxyAgent</code>可以<strong>自动地在本地环境中执行这段代码</strong>，然后将执行结果（成功信息或错误日志）作为新的消息，反馈到对话中，供<code v-pre>AssistantAgent</code>进行下一步的分析和修正。</li>
</ol>
</li>
</ul>
<p><strong>这种“生成代码 -&gt; 执行代码 -&gt; 反馈结果”的闭环，使得AutoGen在需要与真实世界（如文件系统、数据库、网络API）进行交互的任务中表现得极其强大。</strong></p>
<h4 id="_3-核心协作模式-编排agent的对话" tabindex="-1"><a class="header-anchor" href="#_3-核心协作模式-编排agent的对话"><span><strong>3. 核心协作模式：编排Agent的对话</strong></span></a></h4>
<p><strong>A. 双Agent对话 (Two-Agent Chat)</strong> 这是最基础的模式。通常由一个<code v-pre>AssistantAgent</code>和一个<code v-pre>UserProxyAgent</code>组成。</p>
<ul>
<li><strong>工作流程</strong>：
<ol>
<li><code v-pre>UserProxyAgent</code>代表人类发起一个任务（例如，“帮我画出今天和昨天的股票价格对比图”）。</li>
<li><code v-pre>AssistantAgent</code>接收到任务，思考后生成一段Python代码（使用<code v-pre>matplotlib</code>库）。</li>
<li><code v-pre>UserProxyAgent</code>接收到代码，<strong>自动执行</strong>它。</li>
<li>如果代码执行成功，图表被保存，任务完成。如果代码执行失败（例如，缺少某个库），<code v-pre>UserProxyAgent</code>会将<strong>错误信息</strong>返回给<code v-pre>AssistantAgent</code>。</li>
<li><code v-pre>AssistantAgent</code>看到错误信息，<strong>自我修正</strong>（例如，生成安装缺失库的<code v-pre>pip install</code>命令或修正代码bug），然后再次将新代码发给<code v-pre>UserProxyAgent</code>。</li>
<li>循环往复，直到任务成功。</li>
</ol>
</li>
</ul>
<p><strong>B. 群聊 (Group Chat)</strong> 这是AutoGen更高级、更强大的协作模式，用于解决需要多个专家协同的问题。</p>
<ul>
<li><strong>核心组件</strong>：
<ul>
<li><strong>多个专家Agent</strong>：例如，一个<code v-pre>Coder</code> (程序员Agent)、一个<code v-pre>ProductManager</code> (产品经理Agent)、一个<code v-pre>Tester</code> (测试工程师Agent)。</li>
<li><code v-pre>**GroupChat**</code>: 定义一个包含所有参与者的“聊天室”。</li>
<li><code v-pre>**GroupChatManager**</code>: 扮演“会议主持人”的角色。它负责在每一轮对话中，根据上下文决定下一个应该由哪个Agent发言，以保证对话能够有条不紊地向着解决问题的方向推进。</li>
</ul>
</li>
</ul>
<h4 id="_4-python代码示例-一个简单的-代码生成与执行-任务" tabindex="-1"><a class="header-anchor" href="#_4-python代码示例-一个简单的-代码生成与执行-任务"><span><strong>4. Python代码示例：一个简单的“代码生成与执行”任务</strong></span></a></h4>
<p>Python</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code class="language-plain"><span class="line">import os</span>
<span class="line">from autogen import AssistantAgent, UserProxyAgent, config_list_from_json</span>
<span class="line"></span>
<span class="line"># 0. 加载LLM配置</span>
<span class="line"># 您可以从一个JSON文件中加载，或者直接在代码中设置</span>
<span class="line"># 示例：config_list = [{"model": "gpt-4o", "api_key": "YOUR_API_KEY"}]</span>
<span class="line">config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")</span>
<span class="line"></span>
<span class="line"># 1. 创建助理Agent (AI工作者)</span>
<span class="line">assistant = AssistantAgent(</span>
<span class="line">    name="assistant",</span>
<span class="line">    llm_config={</span>
<span class="line">        "config_list": config_list,</span>
<span class="line">        "temperature": 0</span>
<span class="line">    }</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># 2. 创建用户代理Agent (人类代理/代码执行者)</span>
<span class="line">user_proxy = UserProxyAgent(</span>
<span class="line">    name="user_proxy",</span>
<span class="line">    human_input_mode="NEVER",  # 在这个例子中，我们不寻求人类输入</span>
<span class="line">    max_consecutive_auto_reply=10,</span>
<span class="line">    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),</span>
<span class="line">    code_execution_config={</span>
<span class="line">        "work_dir": "coding",  # 指定一个工作目录来保存和执行代码</span>
<span class="line">        "use_docker": False,   # 为了简单，我们不使用Docker。生产环境建议开启。</span>
<span class="line">    },</span>
<span class="line">    llm_config={ "config_list": config_list }</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line"># 3. 发起任务</span>
<span class="line"># user_proxy代表人类向assistant发起一个对话</span>
<span class="line">user_proxy.initiate_chat(</span>
<span class="line">    assistant,</span>
<span class="line">    message="""</span>
<span class="line">    What is the date today? Compare the year-to-date gain for META and TESLA.</span>
<span class="line">    (今天是几号？对比一下META和TESLA从年初至今的股价涨幅。)</span>
<span class="line">    """</span>
<span class="line">)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>assistant</code>会生成获取股价并计算涨幅的Python代码，<code v-pre>user_proxy</code>会自动执行这段代码，并将结果或错误返回，整个过程将自动进行，直到问题被解决。</p>
<h4 id="_5-autogen在生态中的位置" tabindex="-1"><a class="header-anchor" href="#_5-autogen在生态中的位置"><span><strong>5. AutoGen在生态中的位置</strong></span></a></h4>
<ul>
<li><strong>与LangChain的关系</strong>：AutoGen是一个更高层次的、专注于多Agent<strong>对话编排</strong>的框架。LangChain提供了构建Agent所需的基础工具，但要实现像AutoGen这样复杂的、自动化的对话流和代码执行闭环，需要用LangChain手写大量的逻辑。</li>
<li><strong>与CrewAI的对比</strong>：
<ul>
<li><strong>AutoGen</strong>更像一个**“头脑风暴”<strong>或</strong>“研发小组”**，其对话流程更灵活、动态，甚至有些不可预测，非常适合需要探索和自我修正的复杂任务（特别是涉及代码生成的任务）。 .</li>
<li><strong>CrewAI</strong>更像一条**“生产流水线”**，其流程是预先定义好的、线性的，非常适合自动化那些角色分明、步骤清晰的业务流程。</li>
</ul>
</li>
</ul>
<p><strong>总结</strong>：AutoGen是一个极其强大的多Agent框架，尤其擅长处理<strong>需要通过代码生成与真实世界进行交互的任务</strong>。它通过“对话驱动计算”的核心理念，以及独特的<code v-pre>UserProxyAgent</code>设计，实现了AI的“思考-行动-观察-修正”的强大闭环，是构建高级自动化和问题解决系统的理想选择。</p>
</div></template>


