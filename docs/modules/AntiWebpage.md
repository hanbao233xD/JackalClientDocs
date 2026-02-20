AntiWebpage
反网页
分类：Web
描述：自动关闭不好的网页。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AntiWebpage（反网页）用于自动关闭不好的网页。
适合联网信息获取、账号联动和在线交互场景。
初次使用可优先调整：Target Window、Check Cooldown、Notify Mode。

配置项
- Target Window（中文：目标窗口）：类型=枚举，默认="Foreground"
  可选：Foreground（前端）；PointAt（指向）
- Async（中文：异步）：类型=布尔，默认=true
- Title Keywords 2 Enabled（中文：标题关键词 2 启用）：类型=布尔，默认=true
- Title Keywords Custom（中文：标题关键词自定义）：类型=文本，默认=""
- Ctrl+W Internal Delay (ms)（中文：Ctrl+W 内部延迟 (毫秒)）：类型=数值，默认=100
- Title Keywords 1（中文：标题关键词 1）：类型=文本，默认="传奇;一刀;贪玩;霸主;鬼服;福利;0氪;免费送;打金服;上线即领"
- Title Keywords 2（中文：标题关键词 2）：类型=文本，默认="博彩;新澳;荷官;超高赔率"
- Check Cooldown（中文：检查冷却）：类型=数值，默认=500U
- Only On Browser（中文：只判定浏览器）：类型=布尔，默认=true
- Chatter Color（中文：弹幕颜色）：类型=文本，默认="255;203;0;230"
- Notify Mode（中文：通知模式）：类型=枚举，默认="Notify"
  可选：Off（关闭）；Notify（通知）；Chatter（弹幕）
- Title Keywords Custom Enabled（中文：标题关键词自定义启用）：类型=布尔，默认=false
- Title Keywords 3 Enabled（中文：标题关键词 3 启用）：类型=布尔，默认=true
- Operation（中文：操作）：类型=枚举，默认="Close Page"
  可选：Off（关闭）；Close Page（关闭页面）；Close Window（关闭窗口）
- Title Keywords 1 Enabled（中文：标题关键词 1 启用）：类型=布尔，默认=true
- Title Keywords 3（中文：标题关键词 3）：类型=文本，默认="page not found;404 not found;502 bad gateway"

历史更新
- 12. 添加模块：Anti Webpage，发现浏览器网页标题中有奇怪的关键词后，进行操作。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)
- [Streamer (主播模式)](./Streamer.md)

相关资料
无

