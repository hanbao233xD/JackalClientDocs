Shutdown
关机
分类：Combat
描述：立即关机。

需求
- 安全级别：不安全模块（谨慎使用）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Shutdown（关机）用于立即关机。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Method。
该模块属于不安全能力，建议先备份关键数据并确认回滚路径。

配置项
- Method（中文：方法）：类型=枚举，默认="WINAPI"
  可选：Command（命令）；WINAPI（未收录）；NTAPI（未收录）
- Force（中文：强制）：类型=布尔，默认=false
- Power Off（中文：关闭电源）：类型=布尔，默认=true

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

