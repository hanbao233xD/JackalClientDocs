DebugESP
调试透视
分类：Process
描述：接收并输出进程的调试字符串。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DebugESP（调试透视）用于接收并输出进程的调试字符串。
适合进程观测、控制与排障场景。
初次使用可优先调整：Display Mode。

配置项
- Chatter Type（中文：弹幕类型）：类型=枚举，默认="Top"
  可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Show Namespace Source（中文：显示命名空间来源）：类型=布尔，默认=false
- Capture Global Win32 (Admin Required)（中文：捕获全局 Win32（需要管理员））：类型=布尔，默认=false
- Show Process Source（中文：显示进程来源）：类型=枚举，默认="Both"
  可选：Off（关闭）；PID（进程ID）；Process Name（进程名）；Both（两者）
- Capture Win32（中文：捕获 Win32）：类型=布尔，默认=true
- Anti Spam（中文：反刷屏）：类型=布尔，默认=true
- Display Mode（中文：展示模式）：类型=枚举，默认="Chatter"
  可选：Console Output（控制台输出）；Chatter（弹幕）；Notify（通知）；Title（标题）；Actionbar（行为栏）；Speak（讲述）

历史更新
- 25. 添加模块：Debug ESP，捕获并显示应用程序的调试信息，就跟 Debugview 一样。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

相关资料
无

