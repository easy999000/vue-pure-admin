import { http } from "@/utils/http";

type Result = {
  code: number;
  message: string;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/api/System/GetAccountMenuTree");
};
export const getAsyncRoutesbak = () => {
  return http.request<Result>("get", "/get-async-routes");
};
