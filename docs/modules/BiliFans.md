BiliFans
B站粉丝
分类：Web
描述：监控B站粉丝并发送通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：是
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BiliFans（B站粉丝）用于监控B站粉丝并发送通知。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：HUD User Index (Sep With Semicolon)、Notify Mode、HUD Color。
使用前请确认网络可用及相关 API/平台账号配置完整。

配置项
- HUD User Index (Sep With Semicolon)（中文：HUD 用户索引 (用分号分隔)）：类型=文本，默认=""
- Fans Change Event（中文：粉丝数变化事件）：类型=枚举，默认="Sound"
  可选：Off（关闭）；Sound（音效）；Command（命令）
- Async（中文：异步）：类型=布尔，默认=true
- Notify Mode（中文：通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Console Output（控制台输出）；Actionbar（行为栏）；Chatter（弹幕）；Title（标题）；WinToast（系统通知）；Speak（讲述）
- HUD Color（中文：HUD 颜色）：类型=枚举，默认="Colorful"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- HUD（中文：是否显示HUD。）：类型=布尔，默认=false
- Pause Duration (s)（中文：暂停时长（秒））：类型=数值，默认=30L
- Custom Fans Decrease Command（中文：自定义掉粉命令）：类型=文本，默认=""
- HUD Format（中文：HUD 格式）：类型=枚举，默认="Fans: Number"
  可选：Number（号码）；Fans: Number（粉丝: 数字）；Number Fans（数字 粉丝）；Name Fans: Number（名字 粉丝: 数字）；Name: Number（名字: 数字）；Name: Number Fans（名字: 数字 粉丝）
- Update Cooldown (s)（中文：更新冷却（秒））：类型=数值，默认=60L
- HUD Opacity (0~1)（中文：HUD 不透明度）：类型=数值，默认=0.8f
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=30
- HUD Line Gap（中文：HUD 行距）：类型=数值，默认=5
- User IDs (Sep With Semicolon)（中文：用户 ID (用分号分隔)）：类型=通用，默认=WORMWAKER_MID
- Show Fans Nickname (PRO)（中文：显示粉丝昵称（专业版））：类型=枚举，默认="Off"
  可选：Off（关闭）；Only Self（仅自己）
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=true
- Custom Fans Increase Sound（中文：自定义涨粉音效）：类型=文本，默认="levelup.wav"
- Notify Fans Decrease（中文：通知掉粉）：类型=布尔，默认=true
- Notify Fans Increase（中文：通知涨粉）：类型=布尔，默认=true
- HUD Y Rate（中文：HUD 纵坐标比例）：类型=数值，默认=0.75f
- Threshold Max（中文：阈值最大值）：类型=数值，默认=16U
- Custom Fans Increase Command（中文：自定义涨粉命令）：类型=文本，默认=""
- Custom Fans Decrease Sound（中文：自定义掉粉音效）：类型=文本，默认="pling_low.wav"
- Action On Failure（中文：失败时的行为）：类型=枚举，默认="Pause Temporarily"
  可选：Ignore（忽略）；Pause Temporarily（暂时暂停）；Disable Module（关闭模块）
- Connect Timeout (s)（中文：连接超时时间 (秒)）：类型=数值，默认=5L
- HUD X Rate（中文：HUD 横坐标比例）：类型=数值，默认=0.8f

历史更新
- 18. 修改 Bili Fans 使之可以通知客户端退出期间的粉丝变化。
- 15. 为 Bili Fans 添加新配置：
- 8. 添加模块： Bili Fans，监控B站粉丝数量，如果有变化会触发通知。

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

