CloseEnhance
关闭增强
分类：Window
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
CloseEnhance（关闭增强）用于暂无描述。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Method。

配置项
- Exclude Self（中文：排除自身）：类型=布尔，默认=true
- Method（中文：方法）：类型=枚举，默认="EndSession"
  可选：EndSession（发送结束会话消息）；KillProcess（击杀进程）；EndTask（暴力结束任务）

历史更新
- 13. 为 CloseEnhance 模块的 Method 添加一种方式： EndTask。
- 2. 为 Close Enhance 添加配置：
- 2. 为 Close Enhance 添加配置项：

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

