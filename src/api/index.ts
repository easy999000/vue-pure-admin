// src/api/index.ts
import { Api } from "./processApi";

const api = new Api({
  // 建议取消注释 baseURL，或通过环境变量配置
  // baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5141",
  timeout: 10000
});

export { api, Api };
export * from "./processApi"; // 重导出所有类型，方便业务使用
