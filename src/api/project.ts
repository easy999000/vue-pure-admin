import { http } from "@/utils/http";

import type { ResultTable, Result } from "./Result";

/** 获取系统管理-用户管理列表 */
export const getProjectPage = (params?: object) => {
  return http.request<ResultTable>("get", "/api/Project/GetProjectPage", {
    params
  });
};
/** 获取系统管理-用户管理列表 */
export const getProjectItemPage = (params?: object) => {
  return http.request<ResultTable>("get", "/api/Project/GetProjectItemPage", {
    params
  });
};
/** 更新项目条目 */
export const updateProject = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Project/ProjectUpdate", {
    data
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

/** 删除项目条目 */
export const getAccountProjectList = () => {
  return http.request<Result>("get", "/api/Project/GetAccountProjectList", {});
};

//////材料

/** 获取系统管理-用户管理列表 */
export const getMaterialPage = (params?: object) => {
  return http.request<ResultTable>("get", "/api/Material/GetMaterialInfoPage", {
    params
  });
};
/** 更新项目条目 */
export const updateMaterial = (data?: object) => {
  return http.request<ResultTable>("post", "/api/Material/UpdateMaterialInfo", {
    data
  });
};
/** 更新项目条目 */
export const delMaterial = (data?: object) => {
  return http.request<ResultTable>(
    "post",
    "/api/Material/DelMaterialInfoByID",
    {
      data
    }
  );
};
