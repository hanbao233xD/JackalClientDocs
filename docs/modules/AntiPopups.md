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
AntiPopups（反弹窗）通过窗口判定规则筛出疑似广告/骚扰窗口，再按措施链依次尝试处理。建议先启用白名单保护常用软件，再逐步提高判定与动作强度。
配置项
- Ad Process Policy（广告进程策略）
 类型：枚举；默认："Warn & AutoKill"
 说明：对命中黑名单进程的策略。`Warn & AutoKill` 会先提示再自动结束该进程。
 可选：Ignore（忽略）；Warn（警告）；AutoKill（自动击杀）；Warn & AutoKill（警告并自动击杀）
- BottomRight Judge Policy（右下角判定策略）
 类型：枚举；默认："Size or Blacklist"
 说明：右下角窗口判定主规则，适合处理托盘区弹窗。误杀时优先从这里收紧。
 可选：Size（大小）；Title（标题）；Size and Title（尺寸+标题）；Size or Blacklist（尺寸或黑名单）；Title or Blacklist（标题或黑名单）；Size and Title or Blacklist（尺寸+标题 或 在黑名单）
- Others Judge Policy（其他判定策略）
 类型：枚举；默认："Title or Blacklist"
 说明：非右下角窗口判定规则，通常与标题关键词/黑名单配合。
 可选：Title（标题）；Blacklist（黑名单）；Title or Blacklist（标题或黑名单）
- Measures（措施）
 类型：枚举；默认："Chain"
 说明：命中后的执行方式。`Chain` 会按序尝试多个动作，成功率高但更激进。
 可选：Chain（链式）；Close（关闭）；Destroy（发送销毁消息）；EndSession（发送结束会话消息）；KillProcess（击杀进程）
- Chain（链式）
 类型：文本；默认："Close", "Destroy", "EndSession", "KillProcess"
 说明：链式动作顺序。建议把 `Close` 放前、`KillProcess` 放后，降低误杀损失。
- Ad Window Title Keywords List（广告窗口标题关键词列表）
 类型：文本；默认："每日;开通会员;游戏中心;今日;新闻;优选;精选;推荐;热搜;软件管家;贴士;小助手;奖励;特惠;公测;一刀;贪玩;上线;News;Free Trial"
 说明：标题关键词库，命中后更可能判为广告弹窗。建议用分号分隔并逐步加词。
- Chain Allow LegitMouseClick（链允许合法鼠标点击）
 类型：布尔；默认：true
 说明：链式处理中启用模拟自然点击，提高对某些弹窗的命中率。
- Chain LegitMouseClick Internal Delay (ms)（链合法鼠标点击内部延迟 (毫秒)）
 类型：数值；默认：200
 说明：模拟点击间隔。过小可能无效，过大则处理变慢。
- Chain LegitMouseClick X Margin Min（链合法鼠标点击横向偏移最小值）
 类型：数值；默认：14
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain LegitMouseClick X Margin Max（链合法鼠标点击横向偏移最大值）
 类型：数值；默认：22
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain LegitMouseClick Y Margin Min（链合法鼠标点击纵向偏移最小值）
 类型：数值；默认：14
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain LegitMouseClick Y Margin Max（链合法鼠标点击纵向偏移最大值）
 类型：数值；默认：22
 说明：模拟点击偏移范围，避免总是点击完全相同坐标。
- Chain Allow Move Window Out（链允许把窗口挪出去）
 类型：布尔；默认：true
 说明：允许先把窗口挪出可视区域再执行后续动作，适合“先止损再处理”。
- Check Cooldown（检查冷却）
 类型：数值；默认：250U
 说明：窗口扫描周期。调小响应更快，但窗口枚举开销更高。
- Exclude Maximized（排除最大化）
 类型：布尔；默认：false
 说明：跳过最大化窗口，降低把主业务窗口误判为弹窗的概率。
- Exclude MessageBox（排除消息框）
 类型：布尔；默认：true
 说明：跳过标准消息框，避免误关系统或业务确认框。
- Exclude SystemProcess（排除系统进程）
 类型：布尔；默认：true
 说明：跳过系统进程窗口，降低系统级副作用风险。
- Exclude WinToast（排除系统通知）
 类型：布尔；默认：true
 说明：跳过系统通知 Toast，避免影响正常系统通知。
- Blacklist Processes (Sep With Semicolon)（黑名单进程（用分号分隔））
 类型：文本；默认："mini.lohaslady.exe;FlashHelperService.exe;MultiTip.exe;sesvcr.exe;360SpeedldHealth.exe;360SpeedIdHealth.exe;360SpeedIdHealthEx.exe;Tgmn.exe;Tnuser.exe;Svnpnd.exe;SGNews.exe;biz_helper.exe;SOGOUSmartAssistant.exe;DesktopAssistant.exe;LenovoAppStore.exe;aipiclaunch.exe;SoftMgr.exe;NewIdView.exe;SodaDownloader.exe ...
 说明：黑名单进程命中后会提高处理优先级，配合 `Ad Process Policy` 使用。
- Whitelist Processes Enabled（是否启用进程白名单。）
 类型：布尔；默认：true
 说明：启用后白名单进程将被优先保护，不参与弹窗处理。
- Whitelist Processes (Sep With Semicolon)（进程白名单，用分号分隔。）
 类型：文本；默认："哔哩哔哩.exe;explorer.exe;Snipaste.exe;steam.exe;steamwebhelper.exe;msedge.exe;iexplore.exe;firefox.exe ...
 说明：白名单进程名列表（分号分隔）。建议优先加入浏览器、资源管理器、输入法等核心程序。
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

