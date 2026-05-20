export type Result = {
  Code: number;
  Message: string;
  Data?: Array<any>;
};

export type ResultModel = {
  Code: number;
  Message: string;
  Data?: any;
};

export type ResultTable = {
  Code: number;
  Message: string;
  Data?: {
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
