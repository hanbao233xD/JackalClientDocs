SetPassword
篡改密码
分类：Combat
描述：清除或设置计算机密码。（需要管理员）

需求
- 安全级别：恶意模块（高风险）
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SetPassword（篡改密码）用于清除或设置计算机密码。（需要管理员）。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Close Menu、Or Custom Password:、Or Custom Username:。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Close Menu（中文：关闭菜单）：类型=布尔，默认=true
- Or Custom Password:（中文：或者自定义密码:）：类型=文本，默认="123456"
- Or Custom Username:（中文：或者自定义用户名:）：类型=文本，默认="Administrator"
- Async（中文：异步）：类型=布尔，默认=true
- Just Clear（中文：清除就行）：类型=布尔，默认=true
- Auto Fill Username（中文：自动填写用户名）：类型=布尔，默认=true
- Async Single Instance（中文：异步单例）：类型=布尔，默认=true

历史更新
无（HISTORY 中暂无明确记录）

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

