import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

// svg 配置代码
import 'virtual:svg-icons-register'


// 引入自定义插件对象,注册整个项目的全局组件
import gloalComponent from '@/components'
// 安装自定义插件
app.use(gloalComponent)

// 引入模板的全局样式:
import '@/styles/index.scss'

app.mount('#app')
