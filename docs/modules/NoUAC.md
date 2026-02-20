NoUAC
禁UAC
分类：Registry
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
NoUAC（禁UAC）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
建议先以管理员身份运行客户端。
初次使用可优先调整：Bypass Explorer Notify、Keep Mode Notify Action。

配置项
- Bypass Explorer Notify（中文：绕过资源管理器通知）：类型=布尔，默认=true
- Highest Level When UAC Enabled（中文：UAC启用时使用最高等级）：类型=布尔，默认=false
- Keep Mode Notify Action（中文：保持模式通知行为）：类型=布尔，默认=true
- Keep（中文：保持）：类型=布尔，默认=false

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [SecureLogin (安全登录)](./SecureLogin.md)
- [ListHijacks (劫持调查)](./ListHijacks.md)
- [KillHijacks (清除劫持)](./KillHijacks.md)
- [CrashKey (快捷蓝屏)](./CrashKey.md)
- [NoCmd (禁命令提示符)](./NoCmd.md)
- [NoPowerShell (禁PowerShell)](./NoPowerShell.md)
- [NoTaskmgr (禁任务管理器)](./NoTaskmgr.md)
- [NoRegedit (禁注册表编辑器)](./NoRegedit.md)

相关资料
无

