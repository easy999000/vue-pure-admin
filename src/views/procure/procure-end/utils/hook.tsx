import { reactive, ref, onMounted, h, toRaw } from "vue";
import type { PaginationProps } from "@pureadmin/table";

import {
  api,
  type EnquiryGroupPageParam,
  type GetProcureGetProcurePriceEndApiParams,
  type EnquiryInfoDTO
} from "@/api";
import type { FormItemProps } from "./types";
import editForm from "../form.vue";
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import { deviceDetection } from "@pureadmin/utils";
export function useHook() {
  const searchForm: GetProcureGetProcurePriceEndApiParams = reactive({});
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const loading = ref(true);
  const dataList = ref([]);
  const curRow = ref();
  const formRef = ref();
  const pageName = ref("完结采购审核");
  const columns: TableColumnList = [
    {
      label: "标题",
      prop: "Title"
    },
    {
      label: "项目",
      prop: "ProjectName"
    },
    {
      label: "创建时间",
      prop: "CreateTime"
    },
    {
      label: "状态",
      prop: "StatusName"
    },
    {
      label: "操作",
      width: 210,
      slot: "operation"
    }
  ];
  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };
  function handleDelete(row) {
    onDel(row).then(() => {
      onSearch();
    });
    /// message(`您删除了角色名称为${row.name}的这条数据`, { type: "success" });
  }
  async function onDel(row?: EnquiryGroupPageParam) {
    loading.value = true;
    function chores() {
      message(`您删除了${pageName.value}名称为${row.Name}的这条数据`, {
        type: "success"
      });
      ///   onSearch(); // 刷新表格数据
    }

    const res = await api.api.post_Enquiry_DelEnquiryGroupByID(toRaw(row));
    if (res.Code === 0) {
      chores();
    } else {
      message(`删除失败，${res.Message}`, { type: "error" });
    }
  }
  /** 高亮当前权限选中行 */
  function rowStyle({ row: { id } }) {
    return {
      cursor: "pointer",
      background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
    };
  }
  onMounted(async () => {
    onSearch();
  });
  async function onSearch() {
    loading.value = true;
    //GetProcurePriceEndApi
    const { Code, Data } = await api.api.get_Procure_GetProcurePriceEndApi({
      PageSize: pagination.pageSize,
      PageNumber: pagination.currentPage,
      Count: pagination.total,
      ...toRaw(searchForm)
    });
    if (Code === 0) {
      dataList.value = Data.Data;
      pagination.total = Data.Count;
      pagination.pageSize = Data.PageSize;
      pagination.currentPage = Data.PageNumber;
    }

    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
  function handleSizeChange(val: number) {
    pagination.pageSize = val;
    onSearch();
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    pagination.currentPage = val;
    onSearch();
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }

  function openDialog(title = "新增", row?: FormItemProps) {
    addDialog({
      title: `${title}${pageName.value}`,
      props: {
        formInline: {
          ...row,
          higherDeptOptions: []
        }
      },
      width: "80%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
      beforeSure: (done, { options }) => {
        const curData = options.props.formInline as EnquiryInfoDTO;
        function chores(res2: any) {
          console.log("res2", res2);
          if (res2.Code !== 0) {
            message(`操作失败，${res2.Message}`, { type: "error" });
            return;
          }
          message(`您${title}了任务名称为${curData.Title}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }

        // 表单规则校验通过
        api.api.post_Enquiry_UpdateEnquiryInfo(toRaw(curData)).then(res => {
          // 实际开发先调用修改接口，再进行下面操作
          chores(res);
        });
      }
    });
  }
  return {
    searchForm,
    onSearch,
    columns,
    dataList,
    curRow,
    pagination,
    resetForm,
    rowStyle,
    openDialog,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange,
    handleDelete,
    pageName,
    loading
  };
}
