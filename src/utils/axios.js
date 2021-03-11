import axios from "axios"

// 环境的切换
if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = 'http://localhost:8080';
} else if (process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = "http://127.0.0.1:8080";
} else if (process.env.NODE_ENV === "mock") {
    // 启用mock模拟数据
    console.warn('⚠️ 注意： 目前为mock模拟数据')
}

// 项目地址加端口
export const base = axios.defaults.baseURL;

// 创建实例
const service = axios.create({
    timeout: 10000
});

// request拦截器
service.interceptors.request.use(
    config => {
        //config.headers["Grpc-Metadata-Authorization"] = "Bearer " + "token";
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
// response 拦截器
service.interceptors.response.use(
    response => {
        let res = {};
        res = response;
        return res;
    },
    error => {
        console.log("收到的错误");
        console.log(error.response);
        if (error.response && error.response.status === 403) {
            alert("登录失效，请重新登录！");
            // router.push({ path: "/user/login" });
        } else if (error.response && error.response.status === 401) {
            alert("登录失效，请重新登录！");
            // router.push({ path: "/user/login" });
        } else if (error.response && error.response.status === 500) {
            alert("登录失效，请重新登录！");
            // router.push({ path: "/user/login" });
        }
        // return Promise.reject(error.response);
        return Promise.resolve(error.response);
    }
);

//login
export function login(url, data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: "post",
        headers: {},
        data: data
    };
    return service(sendObject).catch(() => {});
}

//get方法
export function get(url, data = {}) {
    data.IERealTime = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
        url: url,
        method: "get",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        params: data
    });
}

//封装post请求
export function post(url, data = {}) {
    //默认配置
    let sendObject = {
        url: url,
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: data
    };
    return service(sendObject).catch(() => {});
}

//封装put方法
export function put(url, data = {}) {
    return service({
        url: url,
        method: "put",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: JSON.stringify(data)
    });
}

//删除方法(resfulAPI常用)
export function deletes(url, data = {}) {
    let sendObject = {
        url: url,
        method: "delete",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: JSON.stringify(data)
    };
    return service(sendObject).catch(() => {});
}

export function upload(url, data = {}) {
    let sendObject = {
        url: url,
        method: "post",
        headers: {
            "Content-Type": "multipart/form-data",
            Accept: "text/plain",
        },
        data: data
    };

    return service(sendObject).catch(() => {});
}