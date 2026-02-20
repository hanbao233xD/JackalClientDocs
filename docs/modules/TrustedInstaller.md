TrustedInstaller
受信任安装者
分类：Combat
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TrustedInstaller（受信任安装者）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Exit After Run、Use NSudo。

配置项
- Exit After Run（中文：运行后退出）：类型=布尔，默认=true
- Use NSudo（中文：使用 NSudo）：类型=布尔，默认=false

历史更新
- 6. 为需要管理员、系统、TrustedInstaller 权限的模块设计了新的图标。
- 7. 另设需要系统和 TrustedInstaller 权限的模块，将Config中的 Admin Modules Check Admin改为Check Module Privileges Before Turning On。

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

