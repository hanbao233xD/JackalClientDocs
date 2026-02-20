DialogPhysics
物理弹窗
分类：Window
描述：给对话框添加物理效果。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DialogPhysics（物理弹窗）用于给对话框添加物理效果。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Constant Mode。

配置项
- Initial Custom Degree（中文：初始自定义速率）：类型=数值，默认=1.57f
- Pause When Menu On（中文：打开菜单时暂停）：类型=布尔，默认=true
- Dialog Bounce Damping（中文：对话框弹跳阻尼）：类型=数值，默认=0.6f
- Initial Random Degree（中文：初始随机速率）：类型=布尔，默认=true
- Basic Friction（中文：基础摩擦力）：类型=数值，默认=0.03f
- Initial Max Velocity（中文：初始最大速率）：类型=数值，默认=8.0f
- Drag Damping（中文：拖拽阻尼）：类型=数值，默认=3.0f
- Constant Mode（中文：恒定模式）：类型=枚举，默认="Float"
  可选：Off（关闭）；Fall（下落）；Bounce（弹跳）；Float（飘浮）
- Initial Velocity（中文：初始速率）：类型=布尔，默认=false
- Step（中文：步长）：类型=数值，默认=0.1f
- Collision（中文：碰撞）：类型=枚举，默认="Omnidirectional"
  可选：Off（关闭）；Orthogonal（正交）；Omnidirectional（全方向）
- Gravity（中文：重力）：类型=数值，默认=9.8f
- Drag Spring K（中文：拖拽弹性系数）：类型=数值，默认=20.0f
- Initial Min Velocity（中文：初始最小速率）：类型=数值，默认=4.0f
- Drag Inertia（中文：拖拽惯性）：类型=数值，默认=20.0f

历史更新
- 34. 添加模块：Dialog Physics，对话框物理。给登记过的对话框施加物理效果。

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

