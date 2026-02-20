AntiIntercept
反拦截
分类：Combat
描述：自动对一些杀软的拦截窗口按允许。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiIntercept（反拦截）用于自动对一些杀软的拦截窗口按允许。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Keep Alive。

配置项
- Keep Alive（中文：保持存活）：类型=布尔，默认=false

历史更新
- 20. AntiIntercept: 略更改关闭时的代码。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无

