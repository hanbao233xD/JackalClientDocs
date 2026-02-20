BandSetter
Z序段设置
[PRO]
分类：Window
描述：动态设置指定窗口的Z序段。（专业版）

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
BandSetter（Z序段设置）用于动态设置指定窗口的Z序段。（专业版）。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Target。

配置项
- Sync Topmost Status（中文：同步置顶状态）：类型=布尔，默认=true
- Target（中文：目标）：类型=枚举，默认="Foreground"
  可选：Foreground（前端）；PointAt（指向）
- Operation（中文：操作）：类型=枚举，默认="Auto"
  可选：Auto（自动）；Set（未收录）；Reset（重置）
- Z-Order Band（中文：Z序段）：类型=枚举，默认="UIAccess"
  可选：Desktop（未收录）；UIAccess（未收录）；Immersive IHM（未收录）；Immersive Notification（Immersive 通知）；Immersive AppChrome（未收录）；Immersive MoGo（未收录）；Immersive Edgy（未收录）；Immersive InactiveMoBody（未收录）；Immersive InactiveDock（未收录）；Immersive ActiveMoBody（未收录）；Immersive ActiveDock（未收录）；Immersive Background（Immersive 背景）；Immersive Search（Immersive 查找）；Genuine Windows（Genuine 窗口）；Immersive Restricted（未收录）；System Tools（系统 工具）；Lock Screen（Lock 屏幕）；Above Lock UX（未收录）

历史更新
- 21. 【PRO】添加模块：BandSetter，动态设置窗口Z序段。

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

