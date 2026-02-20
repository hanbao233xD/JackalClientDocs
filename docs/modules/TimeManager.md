TimeManager
时间管理
分类：Misc
描述：调整系统时间及其流速。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TimeManager（时间管理）用于调整系统时间及其流速。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Mode、Sync Method (Disabling Offset)、Sync Method (Disabling Set)。

配置项
- Offset Year（中文：偏移年）：类型=数值，默认=0
- Set Day（中文：指定日）：类型=数值，默认=28
- Async（中文：异步）：类型=布尔，默认=true
- Set Month（中文：指定月份）：类型=数值，默认=2
- Offset Minute（中文：偏移分钟）：类型=数值，默认=0
- Set Hour（中文：指定时）：类型=数值，默认=12
- Set Second（中文：指定秒）：类型=数值，默认=0
- Mode（中文：模式）：类型=枚举，默认="Offset Toggle"
  可选：Freeze（冻结）；Set Once（单次设置时间点）；Offset Once（单次偏移）；Offset Toggle（偏移切换）；Online Sync Once（单次联网同步）；Online Sync Keep（保持联网同步）；Set Accelerated（时间点变速）；Offset Accelerated（偏移变速）；Accelerated（纯变速）
- Sync Method (Disabling Offset)（中文：同步方式 (当禁用偏移模式时)）：类型=枚举，默认="Config"
  可选：Off（关闭）；Config（配置）；Web（网络）
- Offset Month（中文：偏移月）：类型=数值，默认=0
- Offset Second（中文：偏移秒钟）：类型=数值，默认=0
- Sync Method (Disabling Set)（中文：同步方式 (禁用时间点模式时)）：类型=枚举，默认="Memory"
  可选：Off（关闭）；Memory（内存）；Web（网络）
- Sync Method (Disabling Freeze)（中文：同步方式 (禁用冻结时)）：类型=枚举，默认="Memory"
  可选：Off（关闭）；Memory（内存）；Web（网络）
- Online Sync Cooldown (ms)（中文：联网同步冷却 (毫秒)）：类型=数值，默认=30000L
- Offset Hour（中文：偏移小时）：类型=数值，默认=12
- Set Minute（中文：指定分）：类型=数值，默认=0
- Set Year（中文：指定年份）：类型=数值，默认=2025
- Acceleration Speed（中文：加速速率）：类型=数值，默认=1.0f
- Offset Day（中文：偏移日）：类型=数值，默认=0

历史更新
- 2. 尝试修复 TimeManager 模块设置时间有时会发生错误的问题。添加时间修改数据的持久化。
- 3. 为 TimeManager 的 Mode 模式添加：Accelerated，仅加速模式。
- 15. 添加模块： TimeManager (时间管理大师)

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

