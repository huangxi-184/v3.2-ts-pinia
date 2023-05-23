import SvgIcon from '@/components/SvgIcon/index.vue'

// 全局组件对象.
const allGlobalComponents = { SvgIcon }// 允许使用任何公共组件库，如XAML、C#等

// 对外暴露插件对象
export default {
    install(app) {
        // 注册项目全部的全局组件:
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })
    }
}