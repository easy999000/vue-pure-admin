interface FormItemProps {
  ID: number;
  Name: string;
  UpdateTime: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
