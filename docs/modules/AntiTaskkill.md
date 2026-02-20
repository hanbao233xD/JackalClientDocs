AntiTaskkill
反进程杀手
分类：Combat
描述：阻止所有对客户端有威胁的taskkill命令。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiTaskkill（反进程杀手）用于阻止所有对客户端有威胁的taskkill命令。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify Failure、Notify Success。

配置项
- Only Threat For Client（中文：只处理对客户端有威胁的）：类型=布尔，默认=true
- Notify Failure（中文：通知失败）：类型=布尔，默认=true
- Check Tskill.exe（中文：检查 Tskill.exe）：类型=布尔，默认=false
- Notify Success（中文：通知成功）：类型=布尔，默认=true

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
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无

