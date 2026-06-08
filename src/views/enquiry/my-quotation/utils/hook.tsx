import { reactive, ref, onMounted, h, toRaw } from "vue";
import type { PaginationProps } from "@pureadmin/table";
import { api, type EnquiryGroupPageParam, type EnquiryInfoDTO } from "@/api";

import editForm from "../form.vue";
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import { deviceDetection } from "@pureadmin/utils";
export function useHook() {
  const searchForm = reactive({
    Name: "",
    Code: ""
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
  const pageName = ref("我的报价");
  const columns: TableColumnList = [
    {
      label: "标题",
      prop: "Title"
    },
    {
      label: "项目",
      prop: "ProjectName2"
    },
    {
      label: "创建时间",
      prop: "CreateTime"
    },
    {
      label: "报价截至时间",
      prop: "EndTime"
    },
    {
      label: "询价状态",
      prop: "StatusName"
    },
    {
      label: "报价状态",
      prop: "QuotationStatusName"
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
    onDel(row).then(_res => {
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

    await api.api
      .post_Enquiry_DelEnquiryGroupByID(toRaw(row))
      .then(res => {
        chores();
        return res;
      })
      .finally(() => {
        loading.value = false;
      });
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
  //GetMyQuotationPage
  async function onSearch() {
    loading.value = true;
    const { Code, Data } = await api.api.get_Enquiry_GetMyQuotationPage({
      PageSize: pagination.pageSize,
      PageNumber: pagination.currentPage,
      Count: pagination.total,
      ...toRaw(searchForm)
    });
    console.log("search data ", { Data, Code });
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

  function openDialog(title = "新增", row?: EnquiryInfoDTO) {
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
        const _FormRef = formRef.value.getRef();
        const curData = options.props.formInline as EnquiryInfoDTO;
        function chores() {
          message(`您${title}了任务名称为${curData.Title}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }

        console.log("curData", curData);
        // 表单规则校验通过
        if (title === "新增") {
          api.api.post_Enquiry_QuotationUpdate(toRaw(curData)).then(() => {
            // 实际开发先调用修改接口，再进行下面操作
            chores();
          });
        } else {
          api.api.post_Enquiry_QuotationUpdate(toRaw(curData)).then(() => {
            // 实际开发先调用修改接口，再进行下面操作
            chores();
          });
        }
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
