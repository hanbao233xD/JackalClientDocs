PrivateWindow
隐私窗口
分类：Window
描述：防止一些私人窗口被截屏或者录屏。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
PrivateWindow（隐私窗口）用于防止一些私人窗口被截屏或者录屏。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Policy、Keep Checking Cooldown (ms)、Mode。

配置项
- Policy（中文：策略）：类型=枚举，默认="Simple Check"
  可选：Set Once（单次设置时间点）；Simple Check（简单检查）；Complete Check（完整检查）；Blatant Apply（暴力应用）
- Async（中文：异步）：类型=布尔，默认=true
- Clear Overlay Windows When Disabling（中文：关闭时清空覆盖层窗口）：类型=布尔，默认=false
- Keep Checking Cooldown (ms)（中文：持续检查冷却（毫秒））：类型=数值，默认=1000U
- Edge（中文：未收录）：类型=布尔，默认=true
- Mode（中文：模式）：类型=枚举，默认="Invisible (>= Win10
- Bilibili Desktop（中文：B站桌面客户端）：类型=布尔，默认=true
- WeChat New（中文：新版微信）：类型=布尔，默认=true
- Steam（中文：Steam 游戏平台的窗口。）：类型=布尔，默认=true
- Notify Each Window Affinity Result（中文：逐窗口通知设置亲和结果）：类型=布尔，默认=true
- Record Window When Failed（中文：失败时也记载窗口）：类型=布尔，默认=true
- QQ NT（中文：未收录）：类型=布尔，默认=true
- Edge Overlay Mode（中文：Edge 浏览器覆盖层模式）：类型=布尔，默认=false
- WeChat（中文：微信）：类型=布尔，默认=true

历史更新
- 45. 为 PrivateWindow 添加配置：
- 8. 添加模块：PrivateWindow，可以将一些隐私窗口从捕获中去除。将会进行注入，所以如果失败，可以考虑提权。
- 21. 修复 PrivateWindow 关闭时的迭代器崩溃问题。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

