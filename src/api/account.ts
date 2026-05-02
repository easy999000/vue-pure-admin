import { http } from "@/utils/http";

import type { ResultTable, Result } from "./Result";

/** 获取系统管理-用户管理列表 */
export const getAccountSelectList = (params?: object) => {
  return http.request<Result>("get", "/api/Account1/GetAccountSelectList", {
    params
  });
};
/** 更新项目条目 */
export const updateEnquiryGroup = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Enquiry/UpdateEnquiryGroup", {
    data
  });
};
/** 更新项目条目 */
export const delEnquiryGroupByID = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Enquiry/DelEnquiryGroupByID", {
    data
  });
};
