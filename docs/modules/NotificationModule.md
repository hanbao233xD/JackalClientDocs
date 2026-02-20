NotificationModule
通知
分类：Misc
描述：显示客户端的通知。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
NotificationModule（通知）用于显示客户端的通知。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Notify Metro Style、Notify Translator、Notify Vertical Margin。

配置项
- Notify Metro Style（中文：地铁型通知风格）：类型=枚举，默认="Vape"
  可选：Old（老版）；Vape（未收录）；SilenceFix（未收录）；Naven（未收录）；Nexus（未收录）；Acid（未收录）；Southside（南方）；LiquidBounce NextGen（水影 NextGen）
- hidden（中文：隐藏）：类型=布尔，默认=true
- Off（中文：关闭）：类型=文本，默认="Classic", "Keybind", "Always"
- Notify Translator（中文：通知翻译器）：类型=枚举，默认="Off"
  可选：Off（关闭）；Latency（延迟）；Ready（就绪）
- Notify Vertical Margin（中文：通知 纵向 Margin）：类型=数值，默认=150
- Enabled（中文：启用）：类型=布尔，默认=true
- Notify WinToast Attempt to Jump Queue（中文：系统风格通知是否尝试插队）：类型=布尔，默认=false
- Notify MessageBox Random Position（中文：通知对话框随机位置）：类型=布尔，默认=true
- Notify AntiSpam（中文：通知反刷屏）：类型=布尔，默认=true
- Notify Start Position（中文：通知源位置）：类型=枚举，默认="Bottom-Right"
  可选：Bottom-Right（右下角）；Top-Right（顶端-右侧）；Bottom-Left（左下角）；Top-Left（顶端-左侧）
- Log Notification（中文：日志记录通知）：类型=布尔，默认=true
- Override Notify When Hidden（中文：隐藏时用什么代替普通通知）：类型=枚举，默认="WinToast"
  可选：Off（关闭）；WinToast（系统通知）；MessageBox（消息框）
- Notify Texture Load（中文：通知贴图加载）：类型=布尔，默认=false
- Notify Max Length（中文：通知最大长度）：类型=数值，默认=120
- Notify AntiSpam Min Similarity (0~1)（中文：通知反刷屏最小相似度(0~1)）：类型=数值，默认=0.97f
- Notify MessageBox Set as Foreground（中文：通知对话框设为前台）：类型=布尔，默认=true
- Notify Font Size（中文：通知字号）：类型=数值，默认=35
- Notify Font Reload（中文：通知字体重载）：类型=布尔，默认=false
- Notify Horizontal Margin（中文：通知横向间隙）：类型=数值，默认=80
- Notify Style（中文：通知风格）：类型=枚举，默认="Metro"
  可选：WinToast（系统通知）；Metro（地铁）；Chatter（弹幕）；Fancy（优美）；MessageBox（消息框）
- Notify Opacity (0~1)（中文：通知不透明度 (0~1)）：类型=数值，默认=1.0f
- Notify Stay Time (0~1)（中文：通知停留时间 (0~1)）：类型=数值，默认=0.3
- Output Notification Debug String（中文：输出通知调试字符串）：类型=布尔，默认=false
- Notify Height（中文：通知高度）：类型=数值，默认=45
- Prefix Style（中文：前缀风格）：类型=枚举，默认="Classic"
  可选：Off（关闭）；Old（老版）；Classic（经典）；Standard（标准）；Simple（简易）；Rise（上升）；Mio（未收录）；LiquidBounce（水影）；Jackal (Pro)（未收录）
- Notify MessageBox Duration Coefficient（中文：通知对话框时长系数）：类型=数值，默认=0.2f
- Notify Module Toggle（中文：通知模块切换）：类型=枚举，默认="Always"
  可选：Off（关闭）；Classic（经典）；Keybind（未收录）；Always（总是）
- Notify Line Gap（中文：通知字距）：类型=数值，默认=10
- Notify Min Width（中文：通知最小宽度）：类型=数值，默认=200
- Prefix Timestamp（中文：前缀时间戳）：类型=布尔，默认=true
- Notify Device Changes（中文：通知设备切换）：类型=枚举，默认="Audio Device"
  可选：Off（关闭）；Audio Device（音频设备）；All（所有）
- Output Notification（中文：输出通知）：类型=布尔，默认=true

历史更新
- 47. 现在 Notification 的 Notify AntiSpam 已默认开启，作用是防止通知刷屏。
- 50. 为 Notification 添加配置项：
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无

