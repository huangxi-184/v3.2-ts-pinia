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

app.mount('#app')
