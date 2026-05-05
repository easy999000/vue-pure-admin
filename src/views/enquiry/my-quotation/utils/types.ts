// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

interface FormItemProps {
  ID: string;
  AccountID: string;
  CreateTime: string;
  EndTime: string;
  ProjectID: string;
  Status: string;
  Title: string;
  Project: {
    ID: string;
    EndDate: string;
    ManageRate: number;
    Name: string;
    Notes: string;
    ProfitRate: number;
    StartDate: string;
  };
  ProjectName: string;
  StatusName: string;
  QuotationStatus: string;
  QuotationStatusName: string;
}
interface FormProps {
  formInline: Partial<FormItemProps>;
}

export type { FormItemProps, FormProps };
