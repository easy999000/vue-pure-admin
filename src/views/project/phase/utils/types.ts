// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

interface FormItemProps {
  ID: string;
  Name: string;
  ProjectID: string;
  ProjectName: string;
  UpdateTime: string;
}
interface FormProps {
  formInline: Partial<FormItemProps>;
}

export type { FormItemProps, FormProps };
