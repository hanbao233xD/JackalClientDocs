MouseWatcher
鼠标监视
分类：Control
描述：监视鼠标移动和交互。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MouseWatcher（鼠标监视）用于监视鼠标移动和交互。
适合键鼠行为控制、输入增强和自动化操作场景。
初次使用可优先调整：HUD Line Gap、Hide HUD When Menu On、Movement Check Mode。

配置项
- Movement Check（中文：运动检查）：类型=枚举，默认="Ignore"
  可选：Ignore（忽略）；Warn（警告）；Warn & Restore（警告并拉回）；Restore（还原）
- HUD Line Gap（中文：HUD 行距）：类型=数值，默认=5
- Hide HUD When Menu On（中文：打开菜单时隐藏HUD）：类型=布尔，默认=true
- Movement Check Mode（中文：运动检查模式）：类型=枚举，默认="Simple"
  可选：Simple（简易）；Strict（严格）
- Sample Cooldown（中文：采样冷却）：类型=数值，默认=10U
- HUD（中文：是否显示HUD。）：类型=枚举，默认="Fancy"
  可选：Off（关闭）；Simple（简易）；Fancy（优美）
- HUD X Rate（中文：HUD 横坐标比例）：类型=数值，默认=0.01f
- HUD Font Size（中文：HUD 字号）：类型=数值，默认=20
- HUD Color（中文：HUD 颜色）：类型=枚举，默认="White"
  可选：Black（黑色）；Gray（灰色）；White（白色）；Red（红色）；Gold（金瓜子）；Yellow（黄色）；Green（绿色）；Dark Green（深绿色）；Aqua（淡蓝色）；Blue（蓝色）；Magenta（品红色）；Pink（粉色）；Purple（紫色）；Pink-Magenta（粉-紫组合）；Red-Orange（红-橙组合）；White-Gray（白-灰组合）；Aqua-Blue（浅蓝-蓝组合）；Aqua-Pink（淡蓝-浅粉组合）；Green-Red（红-绿组合）；Astrolfo（未收录）；Colorful（缤纷）；Rainbow（彩虹色）
- Strict Check Threshold（中文：严格检查阈值）：类型=数值，默认=10
- HUD Y Rate（中文：HUD 纵坐标比例）：类型=数值，默认=0.44f
- Acceleration Threshold（中文：加速度阈值）：类型=数值，默认=800.0f

历史更新
- 51. 为 Mouse Watcher 添加配置：
- 3. 为 Modules Color, WindowMaster HUD Color, MouseWatcher HUD Color 添加新颜色样式：Colorful。根据字符串决定一种随机颜色。
- 10. 添加模块 MouseWatcher，用于监视鼠标运动。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

相关资料
无

