<script setup lang="tsx">
import { ref, h } from "vue";
import { FormProps } from "./utils/types";
import { ElInput, ElMessage, ElUpload, ElButton } from "element-plus";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import {
  api,
  type EnquiryGroupPageParam,
  type GetEnquiryGetEnquiryGroupPageParams,
  type EnquiryInfoDTO
} from "@/api";
import ItemList from "@/views/components/item-list.vue";
import { getKeyList, deviceDetection } from "@pureadmin/utils";

import roleSelection from "@/views/components/role-selection.vue";
import JobSelection from "@/views/components/job-selectiony.vue";
import { addDialog, closeDialog } from "@/components/ReDialog";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Delete from "~icons/ep/delete";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({})
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

const loading = ref(true);

const loadData = async () => {
  if (newFormInline?.value?.ID) {
    loading.value = true;
    try {
      ////GetWorkflowConfigById
      const res = await api.api.post_System_GetWorkflowConfigById({
        ID: Number(newFormInline?.value?.ID)
      });
      // 规范化数据类型，避免 ElSelect 接收到 Boolean
      const data = { ...res.Data };
      Object.assign(newFormInline.value, data);
    } catch (error) {
      console.error("数据加载失败:", error);
    } finally {
      loading.value = false;
    }
  }
};

// 在 setup 中直接调用，尽早触发数据请求
loadData();

const state = ref<FieldValues>({
  status: "1",
  name: "",
  rate: 4,
  progress: 100,
  switch: true,
  time: new Date().toString(),
  endTime: []
});
// 模拟一个从后端获取下拉数据的API
const getAccountSelect = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await api.api.get_Account1_GetAccountSelectList();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.AccountID
  }));

  return res;
};
// 模拟一个从后端获取下拉数据的API
const getRoleOptions = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await api.api.get_System_GetRoleSelect();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.RoleID
  }));

  return res;
};

// 模拟一个从后端获取下拉数据的API
const getWorkflowOptions = async (): Promise<any[]> => {
  // 这里替换为你的实际请求 GetWorkflowTypeList
  const selectRes = await api.api.get_System_GetWorkflowTypeList();
  var res = Object.entries(selectRes.Data ?? {}).map(([key, value]) => ({
    label: value,
    value: key
  }));

  return res;
};
const columns: PlusColumn[] = [
  {
    label: "审批流程",
    prop: "FlowType",
    valueType: "select",
    options: getWorkflowOptions()
  },
  {
    label: "采购清单",
    prop: "Workflow_steps",
    // valueType 只需占位，实际渲染由 renderField 接管
    renderField: (value, onChange, row) => {
      const items = (value as any[]) || [];
      return (
        <ItemList
          title=""
          data={items}
          columns={subTableColumns}
          //onSelection-change={rows => console.log("子表格选中行：", rows)}
          onAdd-row={handleAddRow}
        />
      );
    }
  }
];
const handleAddRow = () => {
  addDialog({
    title: "选择物料",
    width: "80%",
    draggable: true,
    fullscreen: deviceDetection(),
    fullscreenIcon: true,
    closeOnClickModal: false,
    hideFooter: true,
    contentRenderer: ({ options, index }) =>
      h(roleSelection, {
        title: "物料列表",
        onSelect: row => {
          handleMaterialSelect(row);
          closeDialog(options, index, { command: "sure" });
        }
      })
  });
};

function onDel(row: any, index: number) {
  if (!Array.isArray(newFormInline.value.Workflow_steps)) return;
  newFormInline.value.Workflow_steps.splice(index, 1);
}
const subTableColumns: TableColumnList = [
  {
    label: "操作",
    width: 210,
    slot: "operation",
    cellRenderer: ({ row, column, $index }) => (
      <div>
        <el-button
          class="reset-margin"
          link
          type="primary"
          icon={useRenderIcon(Delete)}
          onClick={() => onDel(row, $index)}
        >
          删除
        </el-button>
      </div>
    )
  },
  {
    label: "审批角色",
    prop: "RoleName"
  }
];
const handleMaterialSelect = row => {
  if (!Array.isArray(newFormInline.value.Workflow_steps)) {
    newFormInline.value.Workflow_steps = [];
  }
  const procureItem: any = {};
  //procureItem.FlowType = row.Code;
  procureItem.RoleId = row.RoleID;
  //procureItem.Sort = row.Name;
  procureItem.RoleName = row.Name;

  newFormInline.value.Workflow_steps.push({
    ...procureItem
  });
};

function getRef() {
  // console.log({ title: "getRef", newFormInline });
  return ruleFormRef.value;
}
defineExpose({ getRef });
</script>

<template>
  <div>
    <PlusForm
      ref="ruleFormRef"
      v-model="newFormInline"
      class="w-full m-auto"
      :columns="columns"
      label-width="120px"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
