/// <reference types="node" />

import { generateApi } from "swagger-typescript-api";
import path from "path";

generateApi({
  url: "http://localhost:5141/swagger/v1/swagger.json",
  output: path.resolve(process.cwd(), "./src/api/"),
  fileName: "processApi.ts",
  httpClientType: "axios",
  modular: false,
  extractRequestParams: true,
  hooks: {
    onFormatRouteName: (routeName, rawRouteInfo) => {
      const { route, method } = routeName;

      // 路径转驼峰（和之前一样）
      const pathPart = route
        .split("/")
        .filter(Boolean)
        .map((part, index) => {
          const cleanPart = part.replace(/[{}]/g, "");
          return index === 0
            ? ""
            : cleanPart.charAt(0).toUpperCase() + cleanPart.slice(1);
        })
        .join("_");

      // ✅ 下划线连接方法名（全小写）
      return method.toLowerCase() + pathPart;
    }
  }
});
