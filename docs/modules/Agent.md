Agent
AI代理
分类：Web
描述：使用一个简单的人工智能代理完成你的任务。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Agent（AI代理）用于使用一个简单的人工智能代理完成你的任务。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Allow Tool Preparation Missing、Output Real Ask、Command Confirmation。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- Allow Tool Preparation Missing（中文：允许工具缺少准备）：类型=布尔，默认=false
- Output Real Ask（中文：输出真实问题）：类型=布尔，默认=true
- Command Confirmation（中文：命令确认）：类型=枚举，默认="MessageBox"
  可选：Always Allow（始终允许）；AI Basic Check（用人工智能自己检查）；MessageBox（消息框）；Console（控制台）
- Max Allowed Commands（中文：最大允许执行的命令次数）：类型=数值，默认=50
- Max Allowed Asks（中文：最大允许对话次数）：类型=数值，默认=100
- Max Allowed Repeated Commands（中文：最大允许执行的重复命令次数）：类型=数值，默认=3
- Max Allowed File Operations（中文：最大允许文件操作次数）：类型=数值，默认=100
- MessageBox Confirm Timeout Enabled（中文：启用消息框超时自动操作）：类型=布尔，默认=true
- File Confirmation（中文：文件确认）：类型=枚举，默认="AI Basic Check"
  可选：Always Allow（始终允许）；AI Basic Check（用人工智能自己检查）；MessageBox（消息框）；Console（控制台）
- Pause Task Hotkey（中文：暂停任务快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, VK_NUMPAD0}}}
- MessageBox Confirm Timeout (ms)（中文：消息框超时时间（毫秒））：类型=数值，默认=60000L
- Correct JSON Format（中文：纠正JSON格式）：类型=布尔，默认=true
- MessageBox Confirm Timeout Operation（中文：消息框确认超时操作）：类型=枚举，默认="Cancel"
  可选：Accept（接受）；Decline（拒绝）；Cancel（取消）
- Current Instruction（中文：当前指令）：类型=枚举，默认="Run"
  可选：Run（未收录）；Pause（未收录）；Stop（停止）

历史更新
无（HISTORY 中暂无明确记录）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无

