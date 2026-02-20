BridgeAssist
搭路辅助
分类：未分类
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BridgeAssist（搭路辅助）用于暂无描述。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Mode。

配置项
- Right Internal Gap（中文：右键内部间隔）：类型=数值，默认=10U
- Trigger Condition（中文：触发条件）：类型=枚举，默认="S & D"
  可选：S（未收录）；S & A（未收录）；S & D（未收录）
- Place Sound（中文：放置音效）：类型=布尔，默认=true
- Mode（中文：模式）：类型=枚举，默认="Sneak"
  可选：Simple（简易）；Sneak（潜行）
- BPS（中文：每秒方块数。这个控制操作的频率）：类型=数值，默认=2.10f
- Check Window（中文：检查窗口）：类型=布尔，默认=true
- Sneak Reshift Gap（中文：潜行后重新按Shift间隔）：类型=数值，默认=50U
- Sneak Key（中文：潜行键）：类型=按键/复合，默认={{"Keybind", {VK_LSHIFT}}}
- Shift Internal Gap（中文：Shift键内部间隔）：类型=数值，默认=100U
- Place Key（中文：放置键）：类型=按键/复合，默认={{"Keybind", {VK_RBUTTON}}}

历史更新
- 16. 为 BridgeAssist 添加自定义按键 Sneak Key, Place Key.
- 7. 对 BridgeAssist 做出调整：
- 3. 添加 BridgeAssist 模块，可用于辅助搭路。参数如果不满意就自己调一下吧，本人也是调了一个小时。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

