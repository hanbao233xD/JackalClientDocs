﻿import { h } from 'vue'
import type { Theme } from 'vitepress'
import TeekTheme, { TkThemeEnhance } from 'vitepress-theme-teek'
import { TkVpContainer } from 'vitepress-theme-teek'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import 'virtual:group-icons.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import 'vitepress-theme-teek/theme-chalk/tk-catalogue-page.css'
import './style.css'

export default {
  extends: TeekTheme,
  Layout: () => h(TeekTheme.Layout, null, {
    'nav-bar-content-after': () => [h(TkThemeEnhance), h(NolebaseEnhancedReadabilitiesMenu)],
    'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu)
  }),
  async enhanceApp(ctx) {
    await TeekTheme.enhanceApp?.(ctx)
    // 注册 TkVpContainer 组件
    ctx.app.component('TkVpContainer', TkVpContainer)
  }
} satisfies Theme
