WindowMaster
窗口大师
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
WindowMaster（窗口大师）用于暂无描述。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：HUD Paging、HUD Item Count Per Page、Target。

配置项
- HUD Paging（中文：HUD 分页）：类型=枚举，默认="Off"
  可选：Off（关闭）；Multiple Pages（多页）；Only Show Page 1（只显示第一页）
- Kill Process Keybind（中文：结束进程快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F3}} }
- HUD Item Count Per Page（中文：HUD 每页显示的项数量）：类型=数值，默认=11U
- EndTask Keybind（中文：暴力结束任务快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F9}}}
- Target（中文：目标）：类型=枚举，默认="Foreground"
  可选：Foreground（前端）；PointAt（指向）
- Privacy/U Keybind（中文：设为/取消隐私窗口快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F1}}}
- Hide/Show Keybind（中文：隐藏/显示快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F5}}}
- Sink Keybind（中文：沉没窗口快捷键）：类型=按键/复合，默认={{"Keybind", {0}}}
- Privacy Overlay/U Keybind（中文：设为/取消隐私窗口(覆盖模式)快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F2}}}
- Topmost/U Keybind（中文：置顶/取消置顶快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F8}}}
- Privacy Mode（中文：隐私模式）：类型=枚举，默认="Invisible (>= Win10
- HUD Background（中文：HUD背景）：类型=枚举，默认="Fancy"
  可选：Off（关闭）；Simple（简易）；Fancy（优美）
- HUD Prev Page（中文：HUD 上一页）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_LEFT}}}
- Phantom Window Opacity (0~1)（中文：Phantom 窗口 Opacity (0~1)）：类型=数值，默认=0.1f
- HUD Next Page（中文：HUD 下一页）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_RIGHT}}}
- Toggle Phantom Window Keybind（中文：切换幻影窗口按键绑定）：类型=按键/复合，默认={{"Keybind", {0}} }
- EndSession Keybind（中文：发送结束会话消息快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F12}}}
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=20
- HUD Color（中文：HUD 颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Freeze/U Keybind（中文：冻结/解冻窗口快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F6}}}
- Easing Speed (0~1)（中文：缓动速率 (0~1)）：类型=数值，默认=0.1
- HUD（中文：是否显示HUD。）：类型=枚举，默认="Follow"
  可选：Off（关闭）；Follow（追随）；BottomRight（未收录）；BottomLeft（未收录）
- Destroy Keybind（中文：发送销毁消息快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F11}}}
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=true
- Easing（中文：缓动）：类型=布尔，默认=true
- Lock Update Keybind（中文：锁定更新快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F10}}}
- HUD Line Gap（中文：HUD 行距）：类型=数值，默认=5
- Process Freeze/U Keybind（中文：冻结/解冻进程快捷键）：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F7}}}
- Update Keybind（中文：更新窗口快捷键）：类型=按键/复合，默认={{"Keybind", {0}}}

历史更新
- 9. WindowMaster 模块的HUD不再会超出左侧和顶部屏幕边缘。
- 9. 为 WindowMaster 也添加了注入式调节窗口隐私性的功能。只需要按下 Alt+F1 即可切换。同时也提供了模式：
- 21. Window Master: 添加配置项 Target，用于指定对哪个窗口的锁定：

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
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

