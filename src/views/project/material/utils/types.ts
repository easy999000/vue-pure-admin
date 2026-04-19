// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

interface FormItemProps {
  ID: string;
  Name: string;
  Code: string;
  Specifications: string;
  Unit: string;
  UpdateTime: string;
  Type: number;
  TypeStr: string;
  Freight: number;
  Price: number;
  Taxrate: number;
}
interface FormProps {
  formInline: Partial<FormItemProps>;
}

export type { FormItemProps, FormProps };
