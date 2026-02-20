AntiPopups
反弹窗
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
AntiPopups（反弹窗）用于暂无描述。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Ad Process Policy、Check Cooldown、Others Judge Policy。

配置项
- Chain LegitMouseClick Y Margin Max（中文：链合法鼠标点击纵向偏移最大值）：类型=数值，默认=22
- Ad Process Policy（中文：广告进程策略）：类型=枚举，默认="Warn & AutoKill"
  可选：Ignore（忽略）；Warn（警告）；AutoKill（自动击杀）；Warn & AutoKill（警告并自动击杀）
- Check Cooldown（中文：检查冷却）：类型=数值，默认=250U
- Ad Window Title Keywords List（中文：广告窗口标题关键词列表）：类型=文本，默认="每日;开通会员;游戏中心;今日;新闻;优选;精选;推荐;热搜;软件管家;贴士;小助手;奖励;特惠;公测;一刀;贪玩;上线;News;Free Trial"
- Chain LegitMouseClick X Margin Min（中文：链合法鼠标点击横向偏移最小值）：类型=数值，默认=14
- Others Judge Policy（中文：其他判定策略）：类型=枚举，默认="Title or Blacklist"
  可选：Title（标题）；Blacklist（黑名单）；Title or Blacklist（标题或黑名单）
- Chain LegitMouseClick Internal Delay (ms)（中文：链合法鼠标点击内部延迟 (毫秒)）：类型=数值，默认=200
- Measures（中文：措施）：类型=枚举，默认="Chain"
  可选：Chain（链式）；Close（关闭）；Destroy（发送销毁消息）；EndSession（发送结束会话消息）；KillProcess（击杀进程）
- Chain Allow LegitMouseClick（中文：链允许合法鼠标点击）：类型=布尔，默认=true
- Blacklist Processes (Sep With Semicolon)（中文：黑名单进程（用分号分隔））：类型=文本，默认="mini.lohaslady.exe;FlashHelperService.exe;MultiTip.exe;sesvcr.exe;360SpeedldHea ...
- Chain（中文：链式）：类型=文本，默认="Close", "Destroy", "EndSession", "KillProcess"
- Chain LegitMouseClick X Margin Max（中文：链合法鼠标点击横向偏移最大值）：类型=数值，默认=22
- Exclude Maximized（中文：排除最大化）：类型=布尔，默认=false
- Whitelist Processes Enabled（中文：是否启用进程白名单。）：类型=布尔，默认=true
- Exclude SystemProcess（中文：排除系统进程）：类型=布尔，默认=true
- Chain Allow Move Window Out（中文：链允许把窗口挪出去）：类型=布尔，默认=true
- Whitelist Processes (Sep With Semicolon)（中文：进程白名单，用分号分隔。）：类型=文本，默认="哔哩哔哩.exe;explorer.exe;Snipaste.exe;steam.exe;steamwebhelper.exe;msedge.exe;iexp ...
- Chain LegitMouseClick Y Margin Min（中文：链合法鼠标点击纵向偏移最小值）：类型=数值，默认=14
- Exclude MessageBox（中文：排除消息框）：类型=布尔，默认=true
- Exclude WinToast（中文：排除系统通知）：类型=布尔，默认=true
- BottomRight Judge Policy（中文：右下角判定策略）：类型=枚举，默认="Size or Blacklist"
  可选：Size（大小）；Title（标题）；Size and Title（尺寸+标题）；Size or Blacklist（尺寸或黑名单）；Title or Blacklist（标题或黑名单）；Size and Title or Blacklist（尺寸+标题 或 在黑名单）

历史更新
- 29. Anti Popups 模块的 Ad Process Policy 广告进程政策的默认值改为 Warn & AutoKill（警告并自动击杀）
- 1. 为 Anti Popups 设置进程白名单，防止信任窗口被关或进程被杀。
- 5. 添加新模块 Anti Popups: 可以根据规则自动关闭符合条件的弹窗。

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

