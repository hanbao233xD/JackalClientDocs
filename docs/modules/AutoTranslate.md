AutoTranslate
自动翻译
分类：Window
描述：自动翻译并展示目标窗口的文本。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoTranslate（自动翻译）用于自动翻译并展示目标窗口的文本。
适合窗口管理、可视化监控与交互增强场景。
初次使用可优先调整：Screen Mode Exclude Client、Target、Trigger Mode。

配置项
- Merge Texts Into Groups（中文：合并文本为组）：类型=布尔，默认=true
- Text Background Color（中文：文本背景颜色）：类型=枚举，默认="Red"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Show Texts（中文：显示文本）：类型=布尔，默认=true
- Translation Max Thread Count（中文：翻译最大线程数）：类型=数值，默认=20
- Screen Mode Exclude Client（中文：屏幕模式排除客户端）：类型=布尔，默认=true
- Target（中文：目标）：类型=枚举，默认="Foreground"
  可选：Screen（屏幕）；Foreground（前端）；PointAt（指向）
- Translation Result Min Size（中文：翻译结果最小字号）：类型=数值，默认=30
- Merge Texts Horizontal Gap Threshold（中文：合并文本横向空隙阈值）：类型=数值，默认=3.0f
- Merge Texts Vertical Gap Threshold（中文：Merge Texts 纵向 Gap Threshold）：类型=数值，默认=0.5f
- Text Background（中文：文本背景）：类型=布尔，默认=true
- Trigger Hotkey（中文：触发快捷键）：类型=按键/复合，默认={{"Keybind", {0}}}
- Text Color（中文：文本颜色）：类型=枚举，默认="Rainbow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Text Min Size（中文：文本最小字号）：类型=数值，默认=20
- Text Max Size（中文：文本最大字号）：类型=数值，默认=80
- Text Background Color (Pointed At)（中文：文本背景颜色 (指向)）：类型=枚举，默认="Dark Green"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Trigger Mode（中文：触发模式）：类型=枚举，默认="Periodic"
  可选：Periodic（周期性）；On Window Change（开启 窗口 Change）；Manual（手动）
- Text Opacity (0~1)（中文：文本不透明度 (0~1)）：类型=数值，默认=0.8f
- Text Background Opacity (0~1)（中文：文本背景不透明度 (0~1)）：类型=数值，默认=0.5f
- Text Background Opacity (Mouse Pointed At) (0~1)（中文：文本背景不透明度 (鼠标指向) (0~1)）：类型=数值，默认=0.5f
- Source Language（中文：源语言）：类型=枚举，默认="English"
  可选：English（英语）；Chinese（中文）
- Action（中文：行为）：类型=枚举，默认="Translate"
  可选：Translate（未收录）；Recognize（未收录）
- Async（中文：异步）：类型=布尔，默认=true
- Re-merge Texts Hotkey（中文：重新合并文本快捷键）：类型=按键/复合，默认={{"Keybind", {0}}}
- Recognize Cooldown (ms)（中文：识别冷却（毫秒））：类型=数值，默认=3000L
- Text Color (Pointed At)（中文：文本颜色 (指向)）：类型=枚举，默认="Green"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Clear Hotkey（中文：清除快捷键）：类型=按键/复合，默认={{"Keybind", {VK_CAPITAL}}}
- Texts Pointed At（中文：未收录）：类型=枚举，默认="Raw"
  可选：Hidden（隐藏）；Raw（原始）；Result（结果）
- Translation Result Max Size（中文：翻译结果最大字号）：类型=数值，默认=100
- Toggle Texts Hotkey（中文：切换文本快捷键）：类型=按键/复合，默认={{"Keybind", {0}}}
- Recognize Min Confidence (0~100)（中文：识别最小置信度 (0~100)）：类型=数值，默认=80.0f
- Translation Result Background Color（中文：翻译结果背景颜色）：类型=枚举，默认="Black"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Translation Result Color（中文：翻译结果颜色）：类型=枚举，默认="Yellow"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）

历史更新
- 49. 添加模块：AutoTranslate，自动识别文本并翻译展示。

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

