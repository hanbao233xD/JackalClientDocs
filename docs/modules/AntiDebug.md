AntiDebug
反调试
分类：Combat
描述：防止客户端被调试。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiDebug（反调试）用于防止客户端被调试。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Check Cooldown、Reaction。

配置项
- Related File Detection（中文：相关文件探测）：类型=布尔，默认=true
- Active Defense（中文：主动防御）：类型=布尔，默认=true
- Check Cooldown（中文：检查冷却）：类型=数值，默认=500
- Async（中文：异步）：类型=布尔，默认=true
- Reaction（中文：反应）：类型=枚举，默认="Exit"
  可选：Warn（警告）；Exit（退出）；Self Destruct（自毁）；Extinction（灭亡）

历史更新
- 8. 修复 Anti Debug 报错的问题。
- 4. 修复了 AntiDebug 反调试模块无法击杀部分窗口的问题，并支持异步模式了，以免很卡。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiSpy (反间谍)](./AntiSpy.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无

