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
import {
  addDialog,
  closeDialog,
  type ButtonProps,
  type DialogOptions
} from "@/components/ReDialog";
import { message } from "@/utils/message";
import { deviceDetection } from "@pureadmin/utils";

function syncPrintFormValues(source: Element, target: Element) {
  const sourceControls = Array.from(
    source.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >("input, textarea, select")
  );
  const targetControls = Array.from(
    target.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >("input, textarea, select")
  );

  sourceControls.forEach((control, index) => {
    const clone = targetControls[index];
    if (!clone) return;

    if (control instanceof HTMLInputElement) {
      if (control.type === "checkbox" || control.type === "radio") {
        (clone as HTMLInputElement).checked = control.checked;
      } else {
        (clone as HTMLInputElement).value = control.value;
      }
    } else if (control instanceof HTMLTextAreaElement) {
      (clone as HTMLTextAreaElement).value = control.value;
    } else if (control instanceof HTMLSelectElement) {
      const sourceOptions = Array.from(control.options);
      Array.from((clone as HTMLSelectElement).options).forEach((option, i) => {
        option.selected = sourceOptions[i]?.selected ?? false;
      });
    }
  });
}

function printDialogContent(options?: DialogOptions, index?: number) {
  if (typeof index !== "number") return;

  const dialogEl = Array.from(
    document.querySelectorAll<HTMLElement>(".pure-dialog")
  )[index];

  if (!dialogEl) {
    message("未找到可打印的弹窗内容", { type: "warning" });
    return;
  }

  const bodyEl = dialogEl.querySelector<HTMLElement>(".el-dialog__body");
  if (!bodyEl) {
    message("弹窗内容为空", { type: "warning" });
    return;
  }

  const printArea = document.createElement("div");
  printArea.id = "re-dialog-print-area";
  printArea.style.cssText =
    "position:absolute;left:-9999px;top:0;width:100%;background:#fff;box-sizing:border-box;";

  if (options?.title) {
    const titleEl = document.createElement("div");
    titleEl.className = "re-dialog-print-title";
    titleEl.style.cssText =
      "font-size:18px;font-weight:600;line-height:1.5;margin-bottom:12px;";
    titleEl.textContent = options.title;
    printArea.appendChild(titleEl);
  }

  const clonedBody = bodyEl.cloneNode(true) as HTMLElement;
  clonedBody.style.maxHeight = "none";
  clonedBody.style.overflow = "visible";
  syncPrintFormValues(bodyEl, clonedBody);
  printArea.appendChild(clonedBody);

  const printStyle = document.createElement("style");
  printStyle.id = "re-dialog-print-style";
  printStyle.textContent = `
    @media print {
      html,
      body {
        overflow: visible !important;
        height: auto !important;
      }

      body > *:not(#re-dialog-print-area) {
        display: none !important;
      }

      #re-dialog-print-area {
        position: static !important;
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
        padding: 0 !important;
      }

      #re-dialog-print-area .re-dialog-print-title {
        padding: 16px 16px 0 !important;
      }

      #re-dialog-print-area .el-dialog__body {
        max-height: none !important;
        overflow: visible !important;
        padding: 16px !important;
      }

      #re-dialog-print-area .el-table,
      #re-dialog-print-area .el-table__body-wrapper,
      #re-dialog-print-area .el-table__inner-wrapper,
      #re-dialog-print-area .el-scrollbar,
      #re-dialog-print-area .el-scrollbar__wrap,
      #re-dialog-print-area .el-scrollbar__view {
        max-height: none !important;
        height: auto !important;
        overflow: visible !important;
      }
    }
  `;

  document.body.appendChild(printArea);
  document.head.appendChild(printStyle);

  const cleanup = () => {
    printArea.remove();
    printStyle.remove();
    window.removeEventListener("afterprint", cleanup);
  };

  window.addEventListener("afterprint", cleanup);
  window.setTimeout(() => window.print(), 50);
}

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
    const printButton: ButtonProps = {
      label: "打印",
      type: "primary",
      plain: true,
      btnClick: ({ dialog }) => printDialogContent(dialog.options, dialog.index)
    };
    const cancelButton: ButtonProps = {
      label: "取消",
      text: true,
      bg: true,
      btnClick: ({ dialog: { options, index } }) => {
        const done = () => closeDialog(options, index, { command: "cancel" });
        if (
          options?.beforeCancel &&
          typeof options.beforeCancel === "function"
        ) {
          options.beforeCancel(done, { options, index });
        } else {
          done();
        }
      }
    };
    const sureButton: ButtonProps = {
      label: "确定",
      type: "primary",
      text: true,
      bg: true,
      btnClick: ({ dialog: { options, index } }) => {
        const done = () => closeDialog(options, index, { command: "sure" });
        if (options?.beforeSure && typeof options.beforeSure === "function") {
          options.beforeSure(done, {
            options,
            index,
            closeLoading: () => {}
          });
        } else {
          done();
        }
      }
    };

    const beforeSure = (
      done: Function,
      { options }: { options: DialogOptions }
    ) => {
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
    };

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
      footerButtons:
        title === "详情"
          ? [printButton, cancelButton, sureButton]
          : [cancelButton, sureButton],
      beforeSure
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
