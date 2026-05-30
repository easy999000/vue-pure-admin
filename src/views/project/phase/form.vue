<script setup lang="ts">
import { ref } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import { api } from "@/api";
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({})
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

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
const getProjectOptions = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await api.api.get_Project_GetAccountProjectList();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.ID
  }));

  return res;
};

const columns: PlusColumn[] = [
  {
    label: "名称",
    prop: "Name",
    valueType: "input"
  },
  {
    label: "所属项目",
    prop: "ProjectID",
    valueType: "select",
    options: getProjectOptions()
  }
];
function getRef() {
  return ruleFormRef.value;
}
defineExpose({ getRef });
</script>

<template>
  <div>
    <PlusForm
      ref="ruleFormRef"
      v-model="newFormInline"
      class="w-112.5 m-auto"
      :columns="columns"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
