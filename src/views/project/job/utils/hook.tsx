import { type Ref, reactive, ref, onMounted, h, toRaw, watch } from "vue";
import type { PaginationProps } from "@pureadmin/table";
import {
  getProjectItemPage,
  updateProjectItem,
  delProjectItemByID
} from "@/api/project";
import type { FormItemProps } from "../utils/types";
import editForm from "../form.vue";
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
export function useHook() {
  const form = reactive({
    Name: "",
    ID: "",
    Code: "",
    PhaseID: "",
    ProjectID: ""
  });
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
  const columns: TableColumnList = [
    {
      label: "项目名称",
      prop: "ProjectName"
    },
    {
      label: "单位工程",
      prop: "PhaseName"
    },
    {
      label: "编码",
      prop: "Code"
    },
    {
      label: "名称",
      prop: "Name"
    },
    {
      label: "项目特征",
      prop: "Describe"
    },
    {
      label: "单位",
      prop: "Unit"
    },
    {
      label: "工程量",
      prop: "PreQuantity"
    },
    {
      label: "损耗率",
      prop: "Loss"
    },
    {
      label: "实际用量",
      prop: "MaxQuantity"
    },
    {
      label: "其他",
      prop: "Ext1"
    },
    {
      label: "备注",
      prop: "Notes"
    },
    {
      label: "操作",
      fixed: "right",
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
    onDel(row).then(res => {
      onSearch();
    });
    /// message(`您删除了角色名称为${row.name}的这条数据`, { type: "success" });
  }
  async function onDel(row?: FormItemProps) {
    loading.value = true;
    function chores() {
      message(`您删除了角色名称为${row.Name}的这条数据`, {
        type: "success"
      });
      ///   onSearch(); // 刷新表格数据
    }

    const res = await delProjectItemByID(toRaw(row));
    if (res.code === 0) {
      chores();
    } else {
      message(`删除失败，${res.message}`, { type: "error" });
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
    const { code, data } = await getProjectItemPage({
      PageSize: pagination.pageSize,
      PageNumber: pagination.currentPage,
      Count: pagination.total,
      ...toRaw(form)
    });
    if (code === 0) {
      dataList.value = data.Data;
      pagination.total = data.Count;
      pagination.pageSize = data.PageSize;
      pagination.currentPage = data.PageNumber;
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
      title: `${title}角色`,
      props: {
        formInline: {
          ...row,
          higherDeptOptions: []
        }
      },
      width: "40%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as FormItemProps;
        function chores() {
          message(`您${title}了任务名称为${curData.Name}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }

        console.log("curData", curData);
        // 表单规则校验通过
        if (title === "新增") {
          updateProjectItem(toRaw(curData)).then(({ res2 }) => {
            // 实际开发先调用修改接口，再进行下面操作
            chores();
          });
        } else {
          updateProjectItem(toRaw(curData)).then(({ res2 }) => {
            // 实际开发先调用修改接口，再进行下面操作
            chores();
          });
        }
      }
    });
  }
  return {
    form,
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
    loading
  };
}
