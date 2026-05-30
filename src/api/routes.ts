import { http } from "@/utils/http";
import { api } from "@/api";

import type { Result } from "./Result";

export const getAsyncRoutes = () => {
  return api.api.get_System_GetAccountMenuTree();
};
export const getAsyncRoutesbak = () => {
  return http.request<Result>("get", "/get-async-routes");
};
