Messenger
消息通信
分类：Window
描述：接收到指定窗口消息时通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Messenger（消息通信）用于接收到指定窗口消息时通知。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Notify Mode。

配置项
- Blacklist (Sep With Semicolon)（中文：消息黑名单 (用分号分隔)）：类型=文本，默认="WM_NULL;WM_MOUSEFIRST;WM_NCHITTEST;WM_SETCURSOR;WM_GETTEXT;WM_WINDOWPOSCHANGING ...
- Notify Mode（中文：通知模式）：类型=枚举，默认="Console Output"
  可选：Console Output（控制台输出）；Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）；Title（标题）
- Show Parameter Details（中文：是否显示参数的详细信息。将会自动解析。）：类型=布尔，默认=true
- Whitelist Enabled（中文：白名单启用）：类型=布尔，默认=false
- Whitelist (Sep With Semicolon)（中文：消息白名单 (用分号分隔)）：类型=文本，默认=""
- Blacklist Enabled（中文：黑名单启用）：类型=布尔，默认=true

历史更新
- 24. 添加模块： Messenger，通知收到的特定窗口消息。

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

