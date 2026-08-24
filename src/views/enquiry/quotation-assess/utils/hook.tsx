import { reactive, ref, onMounted, h, toRaw } from "vue";
import type { PaginationProps } from "@pureadmin/table";

import {
  api,
  type GetEnquiryGetQuotationAssessPageParams,
  type Enquiryinfo,
  type QuotationAssessDTO,
  type QuotationAssessUpdateParam,
  type EnquiryItemsDTO,
  type Quotationitem
} from "@/api";
import editForm from "../form.vue";
import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import { deviceDetection } from "@pureadmin/utils";
export function useHook() {
  const searchForm: GetEnquiryGetQuotationAssessPageParams = reactive({});
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
  const pageName = ref("询价组");
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
      label: "审批角色",
      prop: "ApprovalRoleName"
    },
    {
      label: "报价截止时间",
      prop: "EndTime"
    },
    {
      label: "状态",
      prop: "StatusName"
    },
    {
      label: "创建时间",
      prop: "CreateTime"
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
    const { Code, Data } = await api.api.get_Enquiry_GetQuotationAssessPage({
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

  function openDialog(title = "新增", row?: Enquiryinfo) {
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
        const curData = options.props.formInline as QuotationAssessDTO;
        // const updateParam: QuotationAssessUpdateParam = {
        //   ID: curData.ID
        // };
        function chores() {
          message(`您${title}了任务名称为${curData.Title}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }
        const updateParam: QuotationAssessUpdateParam =
          MakeRequestParam(curData);

        console.log({ title: "curData", updateParam, curData });
        // 表单规则校验通过
        if (updateParam) {
          api.api
            .post_Enquiry_QuotationAssessUpdate(toRaw(updateParam))
            .then(({}) => {
              // 实际开发先调用修改接口，再进行下面操作
              chores();
            });
        }
      }
    });
  }
  function MakeRequestParam(curData: QuotationAssessDTO) {
    const updateParam: QuotationAssessUpdateParam = {
      ID: curData.ID,
      items: []
    };
    for (const n of curData.Items) {
      const selectQuotationAssessDTO = MakeSelectQuotationAssessDTO(n);
      console.log({
        title: "selectQuotationAssessDTO",
        selectQuotationAssessDTO
      });
      if (!selectQuotationAssessDTO) {
        console.log({
          title: "selectQuotationAssessDTO3333",
          selectQuotationAssessDTO
        });
        message(`部分询价没有选择有效的报价结果`, {
          customClass: "el",
          type: "error"
        });
        return undefined;
      } else {
        updateParam.items.push(selectQuotationAssessDTO);
      }
    }

    return updateParam;
  }
  function MakeSelectQuotationAssessDTO(EnquiryInfo: EnquiryItemsDTO) {
    // ✅ 正确方式
    for (const n of EnquiryInfo.QuotationItemList) {
      if (n.Check == true) {
        const item: Quotationitem = {
          ID: n.ID,
          AssessNotes: n.AssessNotes
        };
        return item; // 直接返回满足条件的对象
      } // 如果没有满足条件的对象，返回 null 或其他适当的值
    }
    return null;
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
    pageName,
    loading
  };
}
