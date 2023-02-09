import axios from "axios";
import qs from "qs";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'

interface IStatusMapping {
    [key: string]: string;
}

const showStatusMessage = (status: number | string) => {
    const code = typeof status === "string" ? status : status.toString();
    const statusMapping: IStatusMapping = {
        400: "请求错误",
        401: "未授权，请重新登录",
        403: "拒绝访问",
        404: "请求出错",
        408: "请求超时",
        500: "服务器错误",
        501: "服务未实现",
        502: "网络错误",
        503: "服务不可用",
        504: "网络超时",
        505: "HTTP版本不受支持",
    };
    const message = statusMapping[code] 
        ? statusMapping[code] 
        : "未知异常，请检查网络或联系管理员！";
    return message;
}

let httpCount = 0

const openHttp = () => {
    if (httpCount === 0) nProgress.start()
    httpCount++
}

const closeHttp = () => {
    httpCount--
    if (httpCount <= 0) nProgress.done()
}

const http = axios.create({
    baseURL: "appi",
    timeout: 10 * 1000,
});

http.defaults.withCredentials == true;
http.defaults.headers.post["Content-type"] = "application/json;charset='UTF-8'";

http.interceptors.request.use(
    (config) => {
        openHttp()
        const reqId = Date.now().toString()
        config.url = config.url?.includes("?") 
            ? `${config.url}&reqId=${reqId}` 
            : `${config.url}?reqId=${reqId}`

        if (config.method === "post") {
            config.data = qs.stringify({
                ...config.data,
            });
        }
        return config;
    },
    (err) => {
        return err;
    }
);

http.interceptors.response.use(
    (res) => {
        const { status } = res;
        if (status >= 300 || status < 200) {
            const msg = showStatusMessage(status);
            if (typeof res.data === "string") {
                res.data = { msg };
            } else {
                res.data.msg = msg;
            }
        }
        closeHttp()
        return res
    },
    (err) => {
        err.data = {
            msg: "请求超时或服务器异常，请检查网络或联系管理员！",
        };
        return err;
    }
);

export default http;
