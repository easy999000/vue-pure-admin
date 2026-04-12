import { http } from "@/utils/http";

type Result = {
  code: number;
  message: string;
  data?: Array<any>;
};

type ResultTable = {
  code: number;
  message: string;
  data?: {
    /** 列表数据 */
    Data: Array<any>;
    /** 每页显示条目个数 */
    PageSize?: number;
    /** 当前页数 */
    PageNumber?: number;
    /** 总条目数 */
    Count: number;
  };
};

/** 获取系统管理-用户管理列表 */
export const getProjectItemPage = (params?: object) => {
  return http.request<ResultTable>("get", "/api/Project/GetProjectItemPage", {
    params
  });
};
/** 更新项目条目 */
export const updateProjectItem = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Project/UpdateProjectItem", {
    data
  });
};

/** 删除项目条目 */
export const delProjectItemByID = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Project/DelProjectItemByID", {
    data
  });
};
