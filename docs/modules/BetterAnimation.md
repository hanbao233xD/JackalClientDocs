BetterAnimation
更好的动画
分类：未分类
描述：自定义窗口动画效果。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BetterAnimation（更好的动画）用于自定义窗口动画效果。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify Mode、Custom Style、Check Cooldown (ms)。

配置项
- Toggle NoAnimation Module（中文：切换禁用动画模块）：类型=布尔，默认=true
- Color Transition（中文：颜色过渡）：类型=文本，默认="1;1;1"
- Notify Mode（中文：通知模式）：类型=枚举，默认="Off"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）
- Custom Style（中文：自定义风格）：类型=枚举，默认="Fade"
  可选：Fade（淡入淡出）；Color Transition（颜色过渡）
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=10L
- Animation Duration (ms)（中文：动画持续时间 (毫秒)）：类型=数值，默认=300L

历史更新
- 47. 修复 Better Animation 的 Color Transition 模式矩形绘制不全的问题。
- 29. 添加新模块： BetterAnimation，可自定义系统窗口切换动画。有很多bug

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
无

相关资料
无

