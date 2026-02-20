AntiSpy
反间谍
分类：Combat
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiSpy（反间谍）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify、Anti Prefetch Check Cooldown (ms)、Check Cooldown (ms)。

配置项
- Anti Prefetch (PRO)（中文：反预取（专业版））：类型=枚举，默认="Filtered"
  可选：Off（关闭）；Filtered（已过滤）；All（所有）
- Clear Run History (PRO)（中文：清空运行历史（专业版））：类型=布尔，默认=true
- Async（中文：异步）：类型=布尔，默认=true
- Notify（中文：通知）：类型=布尔，默认=true
- Anti Prefetch Whitelist Processes (Sep With Semicolon)（中文：反预取进程白名单（用分号分隔））：类型=文本，默认="JackalClient.exe;loader.exe;Inject.exe;Injector.exe;liquidlauncher.exe;Vape_V4. ...
- Anti Prefetch Whitelist Processes Enabled（中文：反预取启用进程白名单）：类型=布尔，默认=true
- Anti Prefetch Blacklist Processes (Sep With Semicolon)（中文：反预取进程黑名单（用分号分隔））：类型=文本，默认=""
- Clear Recent Office History（中文：清空近期Office历史）：类型=布尔，默认=true
- Clear Recent Activity Timeline (PRO)（中文：清空最近活动时间轴（专业版））：类型=布尔，默认=true
- Toggle Anti Microphone（中文：联动反麦克风）：类型=布尔，默认=false
- Anti Prefetch Check Cooldown (ms)（中文：Anti Prefetch Check 冷却 (ms)）：类型=数值，默认=50000L
- Clear Recent File History（中文：清空近期文件历史）：类型=布尔，默认=true
- Disable Clipboard History（中文：禁用剪贴板历史）：类型=布尔，默认=true
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=1000U
- Clear Explorer Search History (PRO)（中文：清空资源管理器搜索历史（专业版））：类型=布尔，默认=true
- Anti Prefetch Deletion Notify（中文：反预取删除通知）：类型=布尔，默认=false
- Anti Prefetch Blacklist Processes Enabled（中文：反预取启用进程黑名单）：类型=布尔，默认=false

历史更新
- 79. 为 Anti Spy 添加配置项：
- 33. 为 Anti Spy 添加配置：
- 8. 添加模块： Anti Spy，反间谍。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiCapture (反捕获)](./AntiCapture.md)
- [AntiClose (反关闭)](./AntiClose.md)
- [AntiDebug (反调试)](./AntiDebug.md)
- [AntiIntercept (反拦截)](./AntiIntercept.md)
- [AntiTaskkill (反进程杀手)](./AntiTaskkill.md)
- [AntiMouseHook (反鼠标钩子)](./AntiMouseHook.md)
- [AntiKeyHook (反键盘钩子)](./AntiKeyHook.md)
- [AutoStart (开机自启)](./AutoStart.md)

相关资料
无

