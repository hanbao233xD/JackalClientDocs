TcpMonitor
TCP监视
分类：Web
描述：监视指定进程的TCP连接的变化。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TcpMonitor（TCP监视）用于监视指定进程的TCP连接的变化。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Notify Mode、Filter Processes、Filter Ports。

配置项
- Chatter Color (Closed Connection)（中文：弹幕颜色 (关闭的连接)）：类型=枚举，默认="Purple"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- IP Type（中文：IP 类型）：类型=枚举，默认="Remote"
  可选：Remote（远程）；Local（本地）
- Notify Mode（中文：通知模式）：类型=枚举，默认="Chatter"
  可选：Notify（通知）；Chatter（弹幕）；Actionbar（行为栏）
- Process Id Whitelist (Zero For Any)（中文：进程ID白名单 (用0指代任何)）：类型=文本，默认="0"
- Exclude LAN IP（中文：排除局域网IP）：类型=布尔，默认=true
- Process Name Whitelist (Empty For Any)（中文：进程名白名单 (用空指代任何)）：类型=文本，默认=""
- Filter Processes（中文：过滤进程）：类型=布尔，默认=true
- Port Type（中文：端口类型）：类型=枚举，默认="Remote"
  可选：Remote（远程）；Local（本地）
- Filter Ports（中文：过滤端口号）：类型=布尔，默认=false
- Process Id Blacklist (Zero For Disabled)（中文：进程ID黑名单 (用0指代禁用)）：类型=文本，默认="0"
- Filter IPs（中文：过滤 IP）：类型=布尔，默认=false
- Process Name Blacklist (Empty For Disabled)（中文：进程名黑名单 (用空指代禁用)）：类型=文本，默认="JackalClient.exe"
- Chatter Color (New Connection)（中文：弹幕颜色 (新连接)）：类型=枚举，默认="Gold"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Ports Blacklist (e.g. 4-10,80)（中文：端口黑名单（例：4-10,80））：类型=文本，默认=""
- Ports Whitelist (e.g. 4-10,80)（中文：端口白名单（例：4-10,80））：类型=文本，默认="80,443"
- IP Whitelist (Sep With Semicolon)（中文：IP 白名单（用分号分隔多个））：类型=文本，默认=""
- IP Blacklist (Sep With Semicolon)（中文：IP 黑名单（用分号分隔多个））：类型=文本，默认=""
- Check Cooldown (ms)（中文：检查冷却 (毫秒)）：类型=数值，默认=1000L
- Chatter Type（中文：弹幕类型）：类型=枚举，默认="Random"
  可选：Scroll（滚动）；Top（顶端）；Bottom（底部）；Reverse（颠倒）；Horizontal（横向）；Vertical（纵向）；Random（随机）
- Query External IP Position（中文：查询外网 IP 地理位置）：类型=布尔，默认=false
- Show IP Addresses（中文：是否显示两个IP地址。）：类型=布尔，默认=true

历史更新
- 69. 新增模块：Tcp Monitor

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
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

