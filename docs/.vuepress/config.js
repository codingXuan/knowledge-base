// docs/.vuepress/config.js

import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    // --- 网站基础配置 ---
    lang: "zh-CN",
    title: "我的知识库",
    description: "一个记录学习与思考的地方",

    // --- 打包工具 ---
    bundler: viteBundler(),

    // --- 主题配置 ---
    theme: hopeTheme({
        // --- 基础主题设置 ---
        hostname: "", // 部署时请填写你的网址
        author: {
            name: "codingXuan",
        },
        // 关键改动1：加载 FontAwesome 图标库
        iconAssets: "fontawesome",

        // --- 顶部导航栏 ---
        navbar: [
            { text: "首页", link: "/" },
            { text: "AIGC框架", link: "/AIGC框架详解/" },
            { text: "AIGC应用", link: "/AIGC应用层建设思路/" },
            { text: "推理部署", link: "/推理服务与部署/" },
            { text: "数据结构", link: "/数据结构汇总/" },
        ],

        // --- 关键改动2：为侧边栏条目添加图标 ---
        sidebar: [
            {
                text: 'AIGC应用层建设思路',
                // icon: 'folder',
                prefix: '/AIGC应用层建设思路/',
                collapsible: true,
                children: [
                    { text: 'RAG建设', icon: 'file-lines', link: 'RAG建设.md' },
                    { text: '训练策略', icon: 'file-lines', link: '训练策略.md' },
                    { text: '微调策略', icon: 'file-lines', link: '微调策略.md' },
                    { text: '模型评估与迭代', icon: 'file-lines', link: '模型评估与迭代.md' },
                    { text: 'Prompt工程', icon: 'file-lines', link: 'prompt工程.md' },
                    { text: '业务流程控制-Agent', icon: 'file-lines', link: '业务流程控制-agent.md' },
                    { text: '多Agent组合', icon: 'file-lines', link: '多agent组合.md' },
                    { text: '长文本与算力', icon: 'file-lines', link: '长文本与算力.md' },
                    { text: '部署与运维', icon: 'file-lines', link: '部署与运维.md' },
                    { text: '安全、隐私与伦理', icon: 'file-lines', link: '安全、隐私与伦理.md' },
                    { text: 'AIGC应用层建设思路', icon: 'file-lines', link: 'AIGC应用层建设思路.md' },
                ],
            }, {
                text: 'AIGC框架详解',
                // icon: 'folder', // 文件夹图标
                prefix: '/AIGC框架详解/',
                collapsible: true,
                children: [
                    {
                        text: '基础框架',
                        // icon: 'folder',
                        prefix: '基础框架/',
                        collapsible: true,
                        children: [
                            {
                                text: '深度学习框架',
                                // icon: 'folder',
                                prefix: '深度学习框架/',
                                collapsible: true,
                                children: [
                                    { text: 'Pytorch', icon: 'file-lines', link: 'Pytorch.md' },
                                    { text: 'TensorFlow Keras', icon: 'file-lines', link: 'TensorFlow_Keras.md' },
                                ],
                            },
                            {
                                text: '应用编排框架',
                                // icon: 'folder',
                                prefix: '应用编排框架/',
                                collapsible: true,
                                children: [
                                    { text: 'LangChain', icon: 'file-lines', link: 'LangChain.md' },
                                    { text: 'LlamaIndex', icon: 'file-lines', link: 'LlamaIndex.md' },
                                ],
                            },
                            {
                                text: '模型与算法库',
                                // icon: 'folder',
                                prefix: '模型与算法库/',
                                collapsible: true,
                                children: [
                                    { text: 'Hugging Face Transformers', icon: 'file-lines', link: 'Hugging Face Transformers.md' },
                                ],
                            },
                        ],
                    },
                    {
                        text: '微调训练框架与工具',
                        // icon: 'folder',
                        prefix: '微调训练框架与工具/',
                        collapsible: true,
                        children: [
                            { text: 'DeepSpeed', icon: 'file-lines', link: 'DeepSpeed.md' },
                            { text: 'Hugging Face Trainer 与 PEFT', icon: 'file-lines', link: 'Hugging Face Trainer _ PEFT.md' },
                            { text: 'Llama-Alpaca-Factory', icon: 'file-lines', link: 'Llama-Alpaca-Factory.md' },
                        ],
                    },
                    {
                        text: 'RAG核心组件',
                        // icon: 'folder',
                        prefix: 'RAG核心组件/',
                        collapsible: true,
                        children: [
                            {
                                text: '数据处理与切分',
                                // icon: 'folder',
                                prefix: '数据处理与切分/',
                                collapsible: true,
                                children: [
                                    { text: '文本分割器', icon: 'file-lines', link: '文本分割器-Text Splitters.md' },
                                    { text: '文档加载器', icon: 'file-lines', link: '文档加载器-Document Loaders.md' },
                                ],
                            },
                            {
                                text: 'Embedding模型',
                                // icon: 'folder',
                                prefix: 'Embedding模型/',
                                collapsible: true,
                                children: [
                                    { text: 'text-embedding-ada-002', icon: 'file-lines', link: 'text-embedding-ada-002模型.md' },
                                    { text: 'BGE模型', icon: 'file-lines', link: 'BGE模型.md' },
                                    { text: 'M3E模型', icon: 'file-lines', link: 'M3E模型.md' },
                                ],
                            },
                            {
                                text: '向量数据库',
                                // icon: 'folder',
                                prefix: '向量数据库/',
                                collapsible: true,
                                children: [
                                    { text: 'Faiss库', icon: 'file-lines', link: 'faiss库.md' },
                                    { text: 'ChromaDB / Weaviate', icon: 'file-lines', link: 'ChromaDB _ Weaviate.md' },
                                    { text: 'Milvus', icon: 'file-lines', link: 'milvus.md' },
                                ],
                            },
                        ],
                    }, {
                        text: 'Agent框架',
                        // icon: 'folder',
                        prefix: 'Agent框架/',
                        collapsible: true,
                        children: [
                            { text: 'CrewAI', icon: 'file-lines', link: 'CrewAI.md' },
                            { text: 'AutoGen', icon: 'file-lines', link: 'AutoGen.md' },
                        ],
                    },
                ],
            },

            {
                text: '推理服务与部署',
                // icon: 'folder',
                prefix: '/推理服务与部署/',
                collapsible: true,
                children: [
                    { text: 'vLLM', icon: 'file-lines', link: 'vLLM.md' },
                    { text: 'TGI', icon: 'file-lines', link: 'TGI.md' },
                ],
            },
            {
                text: '数据结构汇总',
                // icon: 'folder',
                prefix: '/数据结构汇总/',
                collapsible: true,
                children: [
                    { text: 'rag', icon: 'file-lines', link: 'rag.md' },
                    { text: 'pt_ft', icon: 'file-lines', link: 'pt_ft.md' },
                    { text: 'rlhf_dpo', icon: 'file-lines', link: 'rlhf_dpo.md' },
                ],
            },
        ],

        // --- 插件配置 ---
        plugins: {
            blog: true,
            mdEnhance: {
                tabs: true,
                codetabs: true,
                gfm: true,
            },
        },
    }),
});