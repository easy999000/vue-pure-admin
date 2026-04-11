// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

interface FormItemProps {
  /** 角色名称 */
  Name: string;
  /** 角色编号 */
  RoleID: string;
  /** 备注 */
  Updatetime: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
