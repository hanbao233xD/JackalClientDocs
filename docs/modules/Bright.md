Bright
亮度修改
分类：未分类
描述：调节屏幕亮度。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：WIP / 维护中
- 版本属性：普通可用

介绍
Bright（亮度修改）用于调节屏幕亮度。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：HUD Giant 2 Bar Color、Keeping Cooldown (ms)、Mode。
该模块处于 WIP 阶段，行为可能不稳定，建议先小范围测试。

配置项
- HUD Giant 2 Bar Color（中文：HUD 巨型2矩形颜色）：类型=文本，默认="gold"
- Keeping Cooldown (ms)（中文：保持模式冷却 (毫秒)）：类型=数值，默认=1000L
- Hotkey Brightness-（中文：降低亮度快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_OEM_COMMA}}}
- Mode（中文：模式）：类型=枚举，默认="Lazy"
  可选：Once（未收录）；Hotkey（快捷键）；Lazy（懒散）；Keep（保持）
- HUD（中文：是否显示HUD。）：类型=枚举，默认="Bottom"
  可选：Off（关闭）；Bottom（底部）；Bottom Big（底部，大号）；Giant（巨型）；Giant 2（巨型 2）
- Hotkey Brightness+（中文：提高亮度快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_OEM_PERIOD}}}
- Hotkey Step (%%)（中文：快捷键调节差值 (%%)）：类型=数值，默认=5
- HUD Duration (ms)（中文：HUD 持续时间 (毫秒)）：类型=数值，默认=3000L
- Percentage (0~100)（中文：百分比 (0~100)）：类型=数值，默认=20

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

