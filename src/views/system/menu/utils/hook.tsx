import editForm from "../form.vue";
import { handleTree } from "@/utils/tree";
import { message } from "@/utils/message";
import { transformI18n } from "@/plugins/i18n";
import { addDialog } from "@/components/ReDialog";
import { reactive, ref, onMounted, h } from "vue";
import type { FormItemProps } from "../utils/types";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { cloneDeep, isAllEmpty, deviceDetection } from "@pureadmin/utils";
import { api } from "@/api";

export function useMenu() {
  const form = reactive({
    Name: ""
  });

  const formRef = ref();
  const dataList = ref([]);
  const loading = ref(true);

  const getMenuType = (type, text = false) => {
    switch (type) {
      case 0:
        return text ? "菜单" : "primary";
      case 1:
        return text ? "iframe" : "warning";
      case 2:
        return text ? "外链" : "danger";
      case 3:
        return text ? "按钮" : "info";
    }
  };

  const columns: TableColumnList = [
    {
      label: "ID",
      prop: "ID"
    },
    {
      label: "菜单名称",
      prop: "Name",
      align: "left",
      cellRenderer: ({ row }) => (
        <>
          <span class="inline-block mr-1">
            {h(useRenderIcon(row.icon), {
              style: { paddingTop: "1px" }
            })}
          </span>
          <span>{transformI18n(row.Name)}</span>
        </>
      )
    },
    {
      label: "菜单类型",
      prop: "menuType",
      width: 100,
      cellRenderer: ({ row, props }) => (
        <el-tag
          size={props.size}
          type={getMenuType(row.Type ?? 0)}
          effect="plain"
        >
          {row.TypeName}
        </el-tag>
      )
    },
    {
      label: "路由路径",
      prop: "Path",
      minWidth: 200
    },
    {
      label: "组件路径",
      prop: "component",
      formatter: ({ path, component }) =>
        isAllEmpty(component) ? path : component
    },
    {
      label: "排序",
      prop: "Sort",
      width: 100
    },
    {
      label: "是否菜单",
      prop: "IsMenu",
      formatter: ({ IsMenu }) => (IsMenu ? "是" : "否"),
      width: 100
    },
    {
      label: "备注",
      prop: "Notes"
    },
    {
      label: "更新时间",
      prop: "UpdateTime"
    },
    {
      label: "父ID",
      prop: "ParentID"
    },
    {
      label: "操作",
      width: 210,
      slot: "operation"
    }
  ];

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }

  function resetForm(formEl) {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  }

  async function onSearch() {
    loading.value = true;
    const { Code, Data } = await api.api.get_System_GetApiInfoPage({
      PageNumber: 1,
      PageSize: 1000
    }); // 这里是返回一维数组结构，前端自行处理成树结构，返回格式要求：唯一id加父节点parentId，parentId取父节点id
    if (Code === 0) {
      let newData = Data.Data;
      if (!isAllEmpty(form.Name)) {
        // 前端搜索菜单名称
        newData = newData.filter(item =>
          transformI18n(item.Name).includes(form.Name)
        );
      }
      dataList.value = handleTree(newData); // 处理成树结构
    }

    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  function formatHigherMenuOptions(treeList) {
    if (!treeList || !treeList.length) return;
    const newTreeList = [];
    for (let i = 0; i < treeList.length; i++) {
      treeList[i].title = transformI18n(treeList[i].title);
      formatHigherMenuOptions(treeList[i].children);
      newTreeList.push(treeList[i]);
    }
    return newTreeList;
  }

  function openDialog(title = "新增", row?: FormItemProps) {
    addDialog({
      title: `${title}菜单`,
      props: {
        formInline: {
          higherMenuOptions: formatHigherMenuOptions(cloneDeep(dataList.value)),
          ID: row?.ID ?? "",
          Action: row?.Action ?? "",
          Area: row?.Area ?? "",
          Controller: row?.Controller ?? "",
          IsMenu: row?.IsMenu ?? false,
          Name: row?.Name ?? "",
          Notes: row?.Notes ?? "",
          ParentID: row?.ParentID ?? 0,
          Path: row?.Path ?? "",
          Sort: row?.Sort ?? 0,
          Type: row?.Type ?? 0,
          UpdateTime: row?.UpdateTime ?? "",
          TypeName: row?.TypeName ?? ""
        }
      },
      width: "45%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as FormItemProps;
        function chores() {
          message(
            `您${title}了菜单名称为${transformI18n(curData.Name)}的这条数据`,
            {
              type: "success"
            }
          );
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }
        FormRef.validate(valid => {
          if (valid) {
            console.log("curData", curData);
            // 表单规则校验通过
            if (title === "新增") {
              api.api.post_System_UpdateApiInfo(curData).then(_ => {
                // 实际开发先调用修改接口，再进行下面操作
                chores();
              });
            } else {
              api.api.post_System_UpdateApiInfo(curData).then(_ => {
                // 实际开发先调用修改接口，再进行下面操作
                chores();
              });
            }
          }
        });
      }
    });
  }

  function handleDelete(row) {
    api.api.post_System_DelApiInfo({ ID: row.ID }).then(() => {
      message(`您删除了菜单名称为${transformI18n(row.Name)}的这条数据`, {
        type: "success"
      });
      onSearch();
    });
  }

  onMounted(() => {
    onSearch();
  });

  return {
    form,
    loading,
    columns,
    dataList,
    /** 搜索 */
    onSearch,
    /** 重置 */
    resetForm,
    /** 新增、修改菜单 */
    openDialog,
    /** 删除菜单 */
    handleDelete,
    handleSelectionChange
  };
}
