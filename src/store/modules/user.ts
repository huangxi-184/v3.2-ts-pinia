import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes';


const useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
            menuRoutes: constantRoute // 菜单路由数组
        }
    },
    actions: {
        async userLogin(data: loginForm) {
            let result: loginResponseData = await reqLogin(data)
            if (result.code == 200) {
                this.token = (result.data.token) as string; //将令牌存储到本地存储中。 这个令牌可以是任意值或
                SET_TOKEN(result.data.token as string)
                return 'ok'
            }
            else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {

    }
})

// 对外保留小仓库.

export default useUserStore