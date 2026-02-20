AntiTopmost
反置顶
分类：Window
描述：抵御其他置顶窗口。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiTopmost（反置顶）用于抵御其他置顶窗口。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Notify Kill、Violence Policy。

配置项
- Auto Bottom（中文：自动置底）：类型=布尔，默认=true
- Auto Untopmost（中文：自动取消置顶）：类型=布尔，默认=true
- Notify Kill（中文：通知击杀）：类型=布尔，默认=true
- Off（中文：关闭）：类型=文本，默认="Close Window", "Kill Process"
- Only Check Foreground（中文：只检查前端）：类型=布尔，默认=false
- Violence Policy（中文：武力策略）：类型=枚举，默认="Off"
  可选：Off（关闭）；Close Window（关闭窗口）；Kill Process（结束进程）

历史更新
无（HISTORY 中暂无明确记录）

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
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无

