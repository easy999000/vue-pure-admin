// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

interface FormItemProps {
  ID: string;
  ProjectID: string;
  Code: string;
  /** 任务名称 */
  Name: string;
  /** 任务编号 */
  Describe: string;
  Ext1: string;
  Notes: string;
  Unit: string;
  Loss: number;
  PreQuantity: number;
  MaxQuantity: number;
  PhaseID: string;
  /** 备注 */
  Updatetime: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
