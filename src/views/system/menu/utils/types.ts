interface FormItemProps {
  ID: number;
  Action: string;
  Area: string;
  Controller: string;
  IsMenu: boolean;
  Name: string;
  Notes: string;
  ParentID: number;
  Path: string;
  Sort: number;
  Type: number;
  UpdateTime: string;
  TypeName: string;
  higherMenuOptions: Record<string, unknown>[];
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
