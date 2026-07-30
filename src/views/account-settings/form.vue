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

import MaterialSelection from "@/views/components/material-selection.vue";
import JobSelection from "@/views/components/job-selectiony.vue";
import { addDialog, closeDialog } from "@/components/ReDialog";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Delete from "~icons/ep/delete";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({ Status: 1 })
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

const loading = ref(true);

const loadData = async () => {
  if (newFormInline?.value?.AccountID) {
    loading.value = true;
    try {
      console.log(
        "Loading data for AccountID:",
        newFormInline?.value?.AccountID
      );
      // 假设 getTableData 是你的 API 请求函数 GetAccountModel
      const res = await api.api.get_Account1_GetAccountModel({
        AccountID: Number(newFormInline?.value?.AccountID)
      });
      console.log(
        "Loading data for AccountID 3333:",
        newFormInline?.value?.AccountID
      );
      Object.assign(newFormInline.value, res.Data);
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
const getDepOptions = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await api.api.get_System_GetDepartmentSelect();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.ID
  }));

  return res;
};
const columns: PlusColumn[] = [
  {
    label: "账号",
    prop: "AccountNumber",
    valueType: "input"
  },
  {
    label: "密码",
    prop: "Password",
    valueType: "input"
  },
  {
    label: "名字",
    prop: "Name",
    valueType: "input"
  },
  {
    label: "性别",
    prop: "Sex",
    valueType: "input"
  },
  {
    label: "联系电话",
    prop: "Telephone",
    valueType: "input"
  },
  {
    label: "出生日期",
    prop: "Birthday",
    valueType: "input"
  },
  {
    label: "备注",
    prop: "Notes",
    valueType: "input"
  },
  {
    label: "角色",
    prop: "AccountRoles",
    valueType: "checkbox",
    options: getRoleOptions()
  },
  {
    label: "部门",
    prop: "AccountDepartments",
    valueType: "checkbox",
    options: getDepOptions()
  },
  {
    label: "状态",
    prop: "Status",
    valueType: "select",
    options: [
      {
        label: "正常",
        value: 1
      },
      {
        label: "停用",
        value: 0
      }
    ]
  }
];

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
