AutoL
自动嘲讽
[PRO]
分类：Control
描述：敌人死亡时自动发送嘲讽信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
AutoL（自动嘲讽）用于敌人死亡时自动发送嘲讽信息。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：AntiSpam Style、Mode、Add Target Name。

配置项
- Remove Decoration（中文：自动嘲讽移除装饰）：类型=布尔，默认=false
- Name Transform（中文：名称转换）：类型=枚举，默认="Lower Case 2"
  可选：Off（关闭）；Lower Case（小写）；Upper Case（大写）；Annoying Case（混写）；Lower Case 2（小写 2）
- Off（中文：关闭）：类型=文本，默认="Normal", "Japanese"
- Includes Nonfinal Kills（中文：包括非最终击杀）：类型=布尔，默认=true
- Length Limit（中文：长度限制）：类型=数值，默认=60L
- Includes Player Speak（中文：包括玩家发言）：类型=布尔，默认=false
- Includes Spear Penetration（中文：包括长矛穿刺）：类型=布尔，默认=true
- Includes Bed Destruction（中文：包括床摧毁）：类型=布尔，默认=false
- Includes Falling（中文：包括坠落）：类型=布尔，默认=true
- Fixed Content（中文：固定内容）：类型=文本，默认="一破，卧龙出山！{player} 已被 Wurst 击毙"
- Player Blacklist Keywords (Sep With Semicolon)（中文：玩家黑名单关键词（用分号分隔））：类型=文本，默认="Owner;Admin"
- AntiSpam Style（中文：反刷屏风格）：类型=枚举，默认="Off"
  可选：Off（关闭）；Normal（普通）；Japanese（日语）
- Includes Burnt（中文：包括火烧死亡）：类型=布尔，默认=true
- Content List（中文：内容列表）：类型=文本，默认="{player} ꮮ;{player} ꮮꮮ;{player} ꮮꮮⅬ"
- Format（中文：格式）：类型=枚举，默认="Direct"
  可选：Direct（直接）；/shout（未收录）；/pc（未收录）；@（未收录）；/title（/标题）；/tellraw（未收录）；actionbar（行为栏）
- File Path（中文：文件路径）：类型=文本，默认=""
- Mode（中文：模式）：类型=枚举，默认="Smart Send"
  可选：Smart Send（智能发送）；Copy（复制）；Chatter（弹幕）；Speak（讲述）；WinToast（系统通知）；Real Chatter（真弹幕）
- Add Target Name（中文：添加目标名称）：类型=布尔，默认=true
- Player Blacklist (Sep With Semicolon)（中文：玩家黑名单（用分号分隔））：类型=文本，默认=""
- Includes Void Falling（中文：包括落入虚空）：类型=布尔，默认=true
- Includes Mace Smashing（中文：包括重锤压扁）：类型=布尔，默认=true
- Trigger Cooldown (ms)（中文：触发冷却 (毫秒)）：类型=数值，默认=800L
- Event Dedup Cooldown (ms)（中文：事件去重冷却 (毫秒)）：类型=数值，默认=2200L
- Length Limit Mode（中文：长度限制模式）：类型=枚举，默认="Off"
  可选：Off（关闭）；Fallback（后备方案）；Filter（筛选器）；Ellipsis（省略号）；Cut（剪切）
- Includes Lava（中文：包括岩浆死亡）：类型=布尔，默认=true
- Includes Team Elimination（中文：包括团灭）：类型=布尔，默认=false
- Preset（中文：预设）：类型=枚举，默认="Mesugaki (Chinese
- Detect Kills（中文：检测击杀）：类型=枚举，默认="Death"
  可选：Death（死亡）；PVP（未收录）
- Source（中文：来源）：类型=枚举，默认="Preset"
  可选：Fixed（固定）；List Random Element（列表中随机的元素）；File Random Line（文件随机行）；Preset（预设）
- Detect Speak（中文：检测发言）：类型=枚举，默认="Pattern"
  可选：Pattern（样式）；AI（人工智能）；Mixed（混合）
- Includes Final Kills（中文：包括最终击杀）：类型=布尔，默认=true

历史更新
- 10. 【PRO】修改自动嘲讽和检测发言的调用顺序，可以规避一些特殊情况。
- 68. 【PRO】添加模块：Auto L，在 Minecraft 中自动嘲讽你的敌人。建议打开 ChatQueue 模块实时查看待发送消息队列。

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

