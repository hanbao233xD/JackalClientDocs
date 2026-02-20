NoFirewall
关闭防火墙
分类：Combat
描述：禁用系统防火墙（不需要管理员）

需求
- 安全级别：不安全模块（谨慎使用）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
NoFirewall（关闭防火墙）用于禁用系统防火墙（不需要管理员）。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Domain、Private、Public。
该模块属于不安全能力，建议先备份关键数据并确认回滚路径。

配置项
- Domain（中文：域）：类型=布尔，默认=true
- Private（中文：专用）：类型=布尔，默认=true
- Public（中文：公用）：类型=布尔，默认=true
- Masquerade（中文：伪装）：类型=布尔，默认=true

历史更新
- 16. 客户端初始化时导入动态函数的操作为防止一些用户崩溃，被拆解至使用前导入。相关模块为：Masquerade, NoFirewall, ACGButcher
- 9. No Firewall: 添加配置项 Masquerade，是否伪装进程为 explorer.exe。默认开启

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)

相关资料
无

