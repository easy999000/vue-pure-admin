export type Result = {
  code: number;
  message: string;
  data?: Array<any>;
};

export type ResultModel = {
  code: number;
  message: string;
  data?: any;
};

export type ResultTable = {
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
