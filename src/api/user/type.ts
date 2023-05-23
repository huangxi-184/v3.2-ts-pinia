export interface loginForm {
    username: string,
    password: string
}

interface dataType {
    token: string
}

export interface loginResponseData {
    code: number,
    data: dataType
}

// 定义服务器相应用户信息的数据类型.

export interface userResponseData {
    code: number,
    data: user
}

interface user {
    checkUser: userInfo
}

interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}