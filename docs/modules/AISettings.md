AISettings
AI设定
分类：Web
描述：关于AI的设置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AISettings（AI设定）用于关于AI的设置。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Filter Keywords (Sep With Semicolon)、Chat History Default Storage Policy、Filter (PRO)。

配置项
- AI Type（中文：人工智能类型）：类型=枚举，默认="PearAPI"
  可选：Spark（未收录）；Dashscope（未收录）；ChatAnywhere（未收录）；PearAPI（未收录）；Local（本地）；Custom（自定义）
- Filter Keywords (Sep With Semicolon)（中文：筛选器关键词（用分号分隔））：类型=文本，默认=""
- Spark API Key（中文：Spark API 键）：类型=文本，默认=""
- Off（中文：关闭）：类型=文本，默认="Chinese", "English", "Japanese"
- Clipboard Tweaks Module Text Processor（中文：剪贴板功能模块文本处理器）：类型=布尔，默认=false
- Local Route（中文：本地路由）：类型=文本，默认="/api/chat"
- Local Route (Stream)（中文：本地路由（流式））：类型=文本，默认="/api/chat"
- AI Role Prompt（中文：人工智能角色提示词）：类型=文本，默认="You are a helpful assistant."
- AI Top P（中文：默认0.8		[0-1]）：类型=数值，默认=0.8f
- AI Temperature（中文：默认0.3   [0-1]）：类型=数值，默认=0.3f
- Local Port（中文：本地端口）：类型=数值，默认=11434
- ChatAnywhere Use EnvVar ApiKey: CHATANYWHERE_API_KEY（中文：ChatAnywhere 使用环境变量作为 ApiKey: CHATANYWHERE_API_KEY）：类型=布尔，默认=true
- Custom AI Use EnvVar ApiKey（中文：自定义人工智能使用环境变量作为ApiKey）：类型=布尔，默认=false
- Chat History Default Storage Policy（中文：聊天记录默认存储方案）：类型=枚举，默认="Temporary"
  可选：Temporary（临时的）；Records（记录）；Files（文件）
- Spark Use EnvVar ApiKey: SPARK_API_KEY（中文：Spark 使用 EnvVar ApiKey: SPARK_API_键）：类型=布尔，默认=true
- Filter (PRO)（中文：过滤器 (专业版)）：类型=枚举，默认="Replace"
  可选：Off（关闭）；Block（格挡）；Filtered（已过滤）；Replace（替换）
- Dashscope Use EnvVar ApiKey: DASHSCOPE_API_KEY（中文：Dashscope 使用 EnvVar ApiKey: DASHSCOPE_API_键）：类型=布尔，默认=true
- Chat History Sessions Saved in Records (Sep With Semicolon)（中文：保存到记录中的聊天记录的会话名 (用分号分隔)）：类型=文本，默认=""
- ChatAnywhere API Key（中文：ChatAnywhere API 键）：类型=文本，默认="sk-"
- Spark Model（中文：未收录）：类型=枚举，默认="Spark Lite"
  可选：Spark 4.0 Ultra（未收录）；Spark Max（Spark 最大数量）；Spark Max-32K（Spark 最大数量-32K）；Spark Pro（未收录）；Spark Pro-128K（未收录）；Spark Lite（未收录）
- Memeizer Processor (PRO)（中文：生草机处理器（专业版））：类型=布尔，默认=false
- Command /chat Show Session（中文：/chat 命令显示会话名）：类型=布尔，默认=true
- Chat History Sessions Saved in Files (Sep With Semicolon)（中文：保存到文件中的聊天记录的会话名 (用分号分隔)）：类型=文本，默认="livestream"
- Dashscope Model（中文：未收录）：类型=枚举，默认="qwen-turbo"
  可选：qwen-turbo（未收录）；qwen-long（未收录）；qwen-max（qwen-最大数量）；qwen-plus（qwen-加号）；qwen-math-plus（qwen-math-加号）；qwen-coder-plus（qwen-coder-加号）；qwen-coder-turbo（未收录）
- Debug Output（中文：调试输出）：类型=布尔，默认=false
- Translation（中文：翻译）：类型=枚举，默认="Off"
  可选：Off（关闭）；Chinese（中文）；English（英语）；Japanese（日语）
- Custom AI Model（中文：自定义人工智能模型）：类型=文本，默认=""
- Local Model（中文：本地模型）：类型=文本，默认=""
- Command /chat Prompt Prefix（中文：命令 /chat 提示词前缀）：类型=文本，默认=""
- Custom AI Use EnvVar ApiKey Name（中文：自定义人工智能ApiKey环境变量名称）：类型=文本，默认=""
- Response Console Output Format（中文：回复控制台输出格式）：类型=枚举，默认="Markdown"
  可选：Markdown（未收录）；Markdown With Marks（未收录）；Raw（原始）；Plaintext（未收录）
- Dashscope API Key（中文：Dashscope API 键）：类型=文本，默认="sk-"
- Custom AI API Key（中文：自定义人工智能ApiKey）：类型=文本，默认=""
- Command /chat Force Stream（中文：/chat 命令强制流式）：类型=布尔，默认=true
- PearAPI Model（中文：未收录）：类型=枚举，默认="ChatGLM"
  可选：ChatGLM（未收录）
- Command /chat Mode Without Arguments（中文：/chat 命令在没有参数时的模式）：类型=枚举，默认="Input Box"
  可选：Input Box（输入框）；Clipboard（剪贴板）
- ChatAnywhere Model（中文：ChatAnywhere 模型）：类型=枚举，默认="gpt-3.5-turbo"
  可选：gpt-3.5-turbo（未收录）；gpt-4o-mini（未收录）；gpt-4.1-mini（未收录）；gpt-4.1-nano（未收录）；gpt-5-mini（未收录）；gpt-5-nano（未收录）；deepseek-r1（未收录）；deepseek-v3（未收录）；deepseek-v3-2-exp（未收录）；gpt-5（未收录）；gpt-4o（未收录）；gpt-4.1（未收录）

历史更新
- 13. 为 AI Settings 添加配置：
- 31. 为 AI Settings 添加配置：
- 52. 添加模块：AI Settings，将之前的 Chat Ask 的 API Key 等配置移动到这里。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无

