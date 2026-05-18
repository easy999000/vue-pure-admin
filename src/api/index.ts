// src/api/index.ts
import { Api } from "./processApi"; // 从生成的文件导入

const api = new Api({
  // baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5141",
  // 也可以直接传入 Axios 配置，例如超时时间
  timeout: 10000
});

export { api, Api };
export * from "./processApi"; // 重导出所有类型，方便业务使用
