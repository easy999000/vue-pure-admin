// src/api/index.ts
import { Api } from "./processApi";
import { message } from "@/utils/message";

const SUCCESS_CODE = 0; // 按你的后端成功码改，比如 0 / 200 / 1

const api = new Api({
  // baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5141",
  timeout: 10000
});

api.instance.interceptors.response.use(
  response => {
    const data = response.data;

    // 非标准 JSON / 文件流 / void 接口直接放行
    if (
      !data ||
      typeof data !== "object" ||
      !("Code" in data || "code" in data)
    ) {
      return response;
    }

    const code = data.Code ?? data.code;
    const msg = data.Message ?? data.message ?? "请求失败";

    if (code !== SUCCESS_CODE) {
      message(msg, { type: "error" });
      return Promise.reject(msg);
    }

    return response;
  },
  error => {
    const msg =
      error?.response?.data?.Message ||
      error?.response?.data?.message ||
      error?.message ||
      "网络异常";

    message(msg, { type: "error" });
    return Promise.reject(error);
  }
);

export { api, Api };
export * from "./processApi";
