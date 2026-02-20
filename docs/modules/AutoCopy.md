AutoCopy
自动复制
分类：Control
描述：自动复制指定的文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoCopy（自动复制）用于自动复制指定的文本。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：Update Cooldown (ms)、Source Mode、Change Cooldown (ms)。

配置项
- Fixed Text（中文：固定文本）：类型=文本，默认="/hub"
- Update Cooldown (ms)（中文：更新冷却（毫秒））：类型=数值，默认=1000
- Source Mode（中文：源模式）：类型=枚举，默认="Fixed"
  可选：Fixed（固定）；File Content（文件内容）；File Random Line（文件随机行）
- Only Update When Holding Ctrl（中文：仅当按住Ctrl时更新）：类型=布尔，默认=true
- Exclude Items With Keywords (Sep With Semicolon)（中文：排除带有关键词的项目 (用分号分隔)）：类型=文本，默认="{player}"
- Include Items With Keywords (Sep With Semicolon)（中文：包含带有关键词的项目 (用分号分隔)）：类型=文本，默认=""
- Change Cooldown (ms)（中文：变更冷却（毫秒））：类型=数值，默认=10000
- File Path（中文：文件路径）：类型=文本，默认=""
- Ignore Empty Item（中文：忽略空项目）：类型=布尔，默认=true

历史更新
- 59. 添加自动复制模块：Auto Copy

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

