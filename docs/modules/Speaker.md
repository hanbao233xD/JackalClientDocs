Speaker
讲述人
分类：Misc
描述：调用 Windows 的讲述人念一段文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Speaker（讲述人）用于调用 Windows 的讲述人念一段文本。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Spoken Text Mode、Notify Error、Method。

配置项
- Async（中文：异步）：类型=布尔，默认=true
- Pitch（中文：音高）：类型=枚举，默认="Default"
  可选：Default（默认）；Auto（自动）；Custom（自定义）
- Rate（中文：比率）：类型=枚举，默认="Default"
  可选：Default（默认）；Auto（自动）；Custom（自定义）
- Custom Pitch（中文：自定义音高）：类型=数值，默认=0
- Spoken Text Mode（中文：讲述文本模式）：类型=枚举，默认="Fixed"
  可选：Fixed（固定）；List Random Element（列表中随机的元素）；List Loop（列表循环）；Clipboard Text（剪贴板文本）
- Spoken Text List（中文：讲述文本列表）：类型=文本，默认="你的钢门比较松弛;但是呢,你的痔疮又弥补了这一部分;如果做痔疮手术,把痔疮切除的话;可能就会显得你的钢门就比较大;可能会有一些漏液漏气的情况;现在最好的办法就 ...
- Notify Error（中文：通知错误）：类型=布尔，默认=true
- Not As Debuggee（中文：被调试时禁用）：类型=布尔，默认=true
- Japanese Transformation（中文：日语转换）：类型=布尔，默认=true
- Custom Rate（中文：自定义比率）：类型=数值，默认=0
- Method（中文：方法）：类型=枚举，默认="SAPI"
  可选：SAPI（未收录）
- List Current Index（中文：列表当前索引）：类型=数值，默认=0
- Auto Rate Coefficient（中文：自动速率系数）：类型=数值，默认=1.0f
- Custom Voice Name（中文：自定义音色名称）：类型=文本，默认="Microsoft Huihui Desktop - Chinese (Simplified)"
- Multiple Text Arrangement（中文：多文本安排）：类型=枚举，默认="Queue"
  可选：Off（关闭）；Queue（队列）；Available（可用）
- Voice（中文：音色）：类型=枚举，默认="Default"
  可选：Default（默认）；Auto（自动）；Custom（自定义）
- Volume（中文：音量）：类型=数值，默认=80
- Fixed Spoken Text（中文：固定的讲述文本）：类型=文本，默认="Hello World 你好，世界！"

历史更新
- 14. 将部分配置中的 Speaker 改为 Speak
- 12. 为 Speaker 添加配置：
- 12. 添加模块：Speaker（讲述人）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无

