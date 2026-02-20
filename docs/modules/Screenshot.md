Screenshot
截图工具
分类：Misc
描述：你可以用PrtScr键打开截图工具。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Screenshot（截图工具）用于你可以用PrtScr键打开截图工具。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：HUD Font Size、Notify Close、Mode。

配置项
- Exclude Client（中文：排除客户端）：类型=枚举，默认="Shift Key"
  可选：Off（关闭）；Shift Key（Shift 按下时）；Always（总是）
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=35
- Notify Close（中文：通知关闭）：类型=布尔，默认=true
- Save Image Custom Path（中文：保存图片自定义路径）：类型=文本，默认="D:\\"
- Extract Text (PRO)（中文：提取文本（专业版））：类型=枚举，默认="Off"
  可选：Off（关闭）；Silent Copy（静默复制）；Console Output（控制台输出）
- Copy Image（中文：复制图片）：类型=枚举，默认="DIB"
  可选：Off（关闭）；DIB（未收录）；PNG+DIB（未收录）
- Extract Text Language (PRO)（中文：提取文本所使用的语言（专业版））：类型=文本，默认="chi_sim"
- Mode（中文：模式）：类型=枚举，默认="Tool"
  可选：Instant（瞬间）；Tool（工具）
- Preview Brightness (0~1)（中文：预览亮度 (0~1)）：类型=数值，默认=0.6f
- bind（中文：绑定）：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_SNAPSHOT}}}
- Save Image（中文：保存图片）：类型=枚举，默认="Default"
  可选：Off（关闭）；Default（默认）；Desktop（未收录）；Custom（自定义）；Dialog（对话框）
- Countdown（中文：倒计时）：类型=布尔，默认=false
- Close Vanilla Snipping Tool（中文：关闭原版截图工具）：类型=布尔，默认=true
- Countdown Duration (ms)（中文：倒计时时长（毫秒））：类型=数值，默认=3000L

历史更新
- 27. 为 Screenshot 模块添加配置：
- 28. 为 Screenshot 添加按 Shift 截方形图的功能。
- 7. 现在启用 Screenshot 截图后，GUIBlur 会自动关闭。

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

