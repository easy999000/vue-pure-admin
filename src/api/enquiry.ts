import { http } from "@/utils/http";

import type { ResultTable, Result, ResultModel } from "./Result";

/** 获取系统管理-用户管理列表 */
export const getEnquiryGroupPage = (params?: object) => {
  return http.request<ResultTable>("get", "/api/Enquiry/GetEnquiryGroupPage", {
    params
  });
};
/** 获取系统管理-用户管理列表 */
export const GetEnquiryGroupByID = (params?: object) => {
  return http.request<ResultModel>("get", "/api/Enquiry/GetEnquiryGroupByID", {
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
///我的询价

/** 获取系统管理-用户管理列表 */
export const getMyEnquiryInfoPage = (params?: object) => {
  return http.request<ResultTable>("get", "/api/Enquiry/GetMyEnquiryInfoPage", {
    params
  });
};
/** 获取系统管理-用户管理列表 */
export const getEnquiryInfoByID = (params?: object) => {
  return http.request<ResultModel>("get", "/api/Enquiry/GetEnquiryInfoByID", {
    params
  });
};
/** 更新项目条目 */
export const updateEnquiryInfo = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Enquiry/UpdateEnquiryInfo", {
    data
  });
};
