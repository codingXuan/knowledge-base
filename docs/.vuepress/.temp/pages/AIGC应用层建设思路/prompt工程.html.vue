<template><div><p><strong>1. 核心定位与原则</strong></p>
<p>Prompt工程是人机（或应用程序与大语言模型）交互的桥梁，是所有AIGC应用与LLM沟通的核心。应用层的所有技术栈，如RAG和微调，其最终目标都是为了在合适的时机，生成一个信息最丰富、指令最明确的Prompt，并将其提交给LLM。</p>
<p><strong>2. 优秀Prompt的构成要素</strong></p>
<p>一个设计精良的Prompt通常是结构化的，并且包含以下部分：</p>
<ul>
<li><strong>角色 (Role)</strong>：定义模型的身份。
<ul>
<li><em>示例</em>：“你是一名专业的市场营销文案专家。”</li>
</ul>
</li>
<li><strong>指令 (Instruction)</strong>：明确、无歧义地描述需要模型完成的核心任务。
<ul>
<li><em>示例</em>：“请为下面这款产品撰写三条社交媒体宣传文案。”</li>
</ul>
</li>
<li><strong>上下文 (Context)</strong>：提供完成任务所需的所有背景信息。这部分通常是<strong>动态注入</strong>的，主要来源是：
<ul>
<li><strong>RAG库检索内容</strong>：从向量数据库（Milvus, Faiss等）中检索出的与用户问题最相关的知识片段。</li>
<li><strong>用户会话历史</strong>：为了实现多轮对话的连贯性。</li>
<li><strong>外部数据</strong>：通过API调用等方式获取的实时信息。</li>
</ul>
</li>
<li><strong>示例 (Examples / Few-Shot)</strong>：提供一或多个输入输出的范例，帮助模型理解期望的风格和格式。
<ul>
<li><em>示例</em>：“例如，如果产品是咖啡豆，文案可以是：‘清晨的第一缕阳光，从一杯手冲开始。’现在，请为以下产品生成文案...”</li>
</ul>
</li>
<li><strong>输出格式 (Output Format)</strong>：明确指定返回内容的格式。
<ul>
<li><em>示例</em>：“请将三条文案以JSON数组的格式返回，每个对象的键为‘copywriting’。”</li>
</ul>
</li>
</ul>
<p><strong>3. Prompt设计模式与模板化</strong></p>
<p>为了适应不同的业务场景，我们需要为不同的任务创建和维护一系列Prompt模板。</p>
<ul>
<li><strong>模板 (Templates)</strong>：使用占位符（如 <code v-pre>{rag_content}</code>, <code v-pre>{user_question}</code>）创建可复用的Prompt结构。</li>
<li><strong>动态注入</strong>：在运行时，程序根据业务逻辑填充这些占位符，生成最终的Prompt。
<ul>
<li><em>示例模板</em>：<code v-pre>“你是一位{role}。请根据以下背景知识：‘{rag_content}’，来回答用户的问题：‘{user_question}’。请以{output_format}格式输出。”</code></li>
</ul>
</li>
</ul>
<p><strong>4. 高级Prompting策略</strong></p>
<p>对于需要复杂推理和规划的任务，可以采用更高级的策略：</p>
<ul>
<li><strong>思维链 (Chain-of-Thought, CoT)</strong>：通过加入“请逐步思考”等引导词，让模型先输出推理步骤，再给出结论，以提高逻辑任务的准确性。</li>
<li><strong>ReAct框架 (Reason + Act)</strong>：主要用于Agent场景。Prompt不仅让模型思考，还引导它生成可执行的动作（如<code v-pre>tool_call('search_database', {'query': '...'})</code>），模型根据动作的返回结果进行下一步的思考和规划。</li>
</ul>
<p><strong>5. 实践中的考量</strong></p>
<ul>
<li><strong>Token使用率与优化</strong>：
<ul>
<li><strong>输入端</strong>：精炼指令和上下文，移除冗余信息。对于长文本，使用摘要或关键词提取等方法浓缩后注入Prompt。</li>
<li><strong>输出端</strong>：通过指令限制输出的长度（如“请在200字以内回答”），以控制成本和提高响应速度。</li>
</ul>
</li>
<li><strong>迭代与测试</strong>：将Prompt工程视为一个持续优化的过程。建立评估机制，通过不断测试和对比不同版本的Prompt，找到最优解。</li>
<li><strong>安全护栏</strong>：警惕提示词注入攻击。对用户输入进行必要的清洗，对模型的输出进行合规性与安全性校验。</li>
</ul>
</div></template>


