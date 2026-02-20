AntiMicrophone
反麦克风
分类：Misc
描述：自动将采集设备静音，防止录音。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiMicrophone（反麦克风）用于自动将采集设备静音，防止录音。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Check Cooldown (ms)、Notify、Mode。

配置项
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=1000U
- Notify（中文：通知）：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Mode（中文：模式）：类型=枚举，默认="Mute"
  可选：Mute（静音）

历史更新
- 47. 让 AntiSpy 的 AntiMicrophone 为 Mute 时禁用模块自动给麦克风取消静音。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)
- [Encryptor (加密器)](./Encryptor.md)

相关资料
无

