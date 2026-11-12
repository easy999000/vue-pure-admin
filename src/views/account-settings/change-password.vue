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
      const res = await api.api.get_Account1_GetAccountModel({
        AccountID: Number(newFormInline?.value?.AccountID)
      });
      // 规范化数据类型，避免 ElSelect 接收到 Boolean
      const data = { ...res.Data };
      if (typeof data.Status === "boolean") {
        data.Status = data.Status ? 1 : 0;
      }
      if (
        data.AccountRoles !== undefined &&
        !Array.isArray(data.AccountRoles)
      ) {
        data.AccountRoles = [data.AccountRoles];
      }
      if (
        data.AccountDepartments !== undefined &&
        !Array.isArray(data.AccountDepartments)
      ) {
        data.AccountDepartments = [data.AccountDepartments];
      }
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
const columns: PlusColumn[] = [
  {
    label: "账号",
    prop: "AccountNumber",
    valueType: "text"
  },
  {
    label: "密码",
    prop: "Password",
    valueType: "input"
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
