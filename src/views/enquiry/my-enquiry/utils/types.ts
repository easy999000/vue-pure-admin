// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

interface FormItemProps {
  ID: string;
  AccountID: string;
  CreateTime: string;
  EndTime: string;
  ProjectID: string;
  Status: number;
  Title: string;

  ProjectName: string;
  StatusName: string;
  QuotationStatus: string;
  QuotationStatusName: string;
  Items: DataItem[];
  GroupList: number[];
  QuotationAccount: string[];
  QuotationItems: string[];
}
interface FormProps {
  formInline: Partial<FormItemProps>;
}
interface DataItem {
  ID: string;
  EnquiryInfoID: string;
  MaterialID: string;
  Notes: string;
  Quantity: number;
  Material: {
    ID: string;
    Code: string;
    Name: string;
    Specifications: string;
    Type: number;
    Unit: string;
    UpdateTime: string;
    TypeStr: string;
    JobMaterialPreQuantity: number;
    JobMaterialActualQuantity: number;
    ProjectItemMaterialID: number;
  };
  Code: string;
  Name: string;
  Specifications: string;
  Unit: string;
  Type: number;
  TypeStr: string;
}

export type { FormItemProps, FormProps };
