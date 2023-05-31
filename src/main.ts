import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
// 引入模板的全局样式:
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ingnore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg 配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象,注册整个项目的全局组件
import gloalComponent from '@/components'

import router from './router/index'
import pinia from './store/index'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

// 安装自定义插件
app.use(gloalComponent)

app.use(pinia)

app.use(router)

app.mount('#app')
