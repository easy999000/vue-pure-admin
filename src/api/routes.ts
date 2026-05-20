import { http } from "@/utils/http";

import type { ResultTable, Result, ResultModel } from "./Result";

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/api/System/GetAccountMenuTree");
};
export const getAsyncRoutesbak = () => {
  return http.request<Result>("get", "/get-async-routes");
};
