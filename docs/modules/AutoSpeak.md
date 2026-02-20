AutoSpeak
自动讲述
分类：Misc
描述：自动说出一些话。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoSpeak（自动讲述）用于自动说出一些话。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Translator (Except Main Mode)、Speak Actionbar、Main Mode。

配置项
- Translator (Except Main Mode)（中文：翻译器 (除主模式外)）：类型=枚举，默认="Off"
  可选：Off（关闭）；Chinese（中文）；English（英语）；Exchange（交换）
- Speak Actionbar（中文：念行为栏）：类型=布尔，默认=false
- Random Min Interval (ms)（中文：最小随机间隔 (毫秒)）：类型=数值，默认=20000L
- Speak Title（中文：念标题）：类型=布尔，默认=true
- Random Max Interval (ms)（中文：最大随机间隔 (毫秒)）：类型=数值，默认=120000L
- Dialog Text Max Speak Length（中文：对话框文本最大朗读长度）：类型=数值，默认=100U
- Periodic Interval (ms)（中文：周期性间隔 (毫秒)）：类型=数值，默认=10000L
- Main Mode（中文：主模式）：类型=枚举，默认="Off"
  可选：Off（关闭）；Periodic（周期性）；Random（随机）；Smart（智能）
- Skip Speaking Dialog Text Same As Previous（中文：朗读跳过和上一次相同的对话框文本）：类型=布尔，默认=true
- Speak Dialog (Auto Detect)（中文：念对话框 (自动检测)）：类型=布尔，默认=true
- Speak Subtitle（中文：念副标题）：类型=布尔，默认=false
- Smart Mode Gap (ms)（中文：智能模式间隔（毫秒））：类型=数值，默认=1000L
- Speak Chatter（中文：念弹幕）：类型=布尔，默认=false

历史更新
- 33. 为 AutoSpeak 添加配置：
- 28. 为 AutoSpeak 模块添加配置：
- 14. 添加模块：Auto Speak（自动讲述）。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

相关资料
无

