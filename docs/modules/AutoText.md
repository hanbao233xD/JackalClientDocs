AutoText
自动文本
分类：Control
描述：特定情况下自动发送指定文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoText（自动文本）用于特定情况下自动发送指定文本。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Auto GG Mode、Auto Thank Watchdog Mode。

配置项
- Auto GG (PRO)（中文：自动GG（专业版））：类型=布尔，默认=true
- Auto Thank Watchdog（中文：自动感谢看门狗）：类型=布尔，默认=true
- Auto GG Mode（中文：自动GG模式）：类型=枚举，默认="Smart Send"
  可选：Smart Send（智能发送）；Copy（复制）；Chatter（弹幕）；Speak（讲述）；WinToast（系统通知）；Real Chatter（真弹幕）
- Auto Talk Back (Experimental)（中文：自动顶嘴（实验性））：类型=布尔，默认=false
- Auto Register (PRO)（中文：自动注册（专业版））：类型=布尔，默认=false
- Auto Thank Watchdog Content (Hypixel)（中文：自动感谢看门狗内容 (Hypixel)）：类型=文本，默认="Thanks Watchd0g!!!"
- Auto GG Content (Victory)（中文：自动GG内容（赢））：类型=文本，默认="gg"
- Auto Thank Watchdog Mode（中文：自动感谢看门狗模式）：类型=枚举，默认="Smart Send"
  可选：Smart Send（智能发送）；Copy（复制）；Chatter（弹幕）；Speak（讲述）；WinToast（系统通知）；Real Chatter（真弹幕）
- Password Source（中文：密码来源）：类型=枚举，默认="Fixed"
  可选：Fixed（固定）；File（文件）
- Password File Path（中文：密码文件路径）：类型=文本，默认=""
- Password (Fixed)（中文：密码（固定））：类型=文本，默认="123456"
- Auto Thank Watchdog Content (Heypixel)（中文：自动感谢看门狗内容 (布吉岛)）：类型=文本，默认="少羽牛逼"
- Auto GG Content (Defeat)（中文：自动GG内容（输））：类型=文本，默认="gg"
- Auto Login (PRO)（中文：自动登陆（专业版））：类型=布尔，默认=false

历史更新
- 30. 修复 AutoText 未启用时仍 Auto Thank Watchdog 的问题。
- 5. 【PRO】修复了 AutoText 没有启用的情况下启用 Auto Login / Auto Register 仍会触发的问题。
- 69. 添加模块：Auto Text，包括 AutoGG, AutoThankWatchdog, AutoLogin, AutoRegister 等，在 Minecraft 自动发送文本。建议打开 ChatQueue 模块实时查看待发送消息队列。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无

