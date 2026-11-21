<script setup lang="ts">
import { ref } from "vue";
import { FormProps } from "../job/utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import { api } from "@/api";
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    ID: "",
    Code: "",
    Name: "",
    Describe: "",
    Ext1: "",
    Notes: "",
    Unit: "",
    Updatetime: "",
    ProjectID: "",
    Loss: 0,
    PreQuantity: 0,
    MaxQuantity: 0,
    PhaseID: ""
  })
});

const loading = ref(true);
const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

const loadData = async () => {
  if (newFormInline?.value?.ID) {
    loading.value = true;
    try {
      // 假设 getTableData 是你的 API 请求函数 GetLaborFullByID
      const res = await api.api.get_Labor_GetLaborFullByID({
        ID: Number(newFormInline?.value?.ID)
      });
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
    label: "项目名称",
    prop: "Code",
    valueType: "input"
  },
  {
    label: "关联人员",
    prop: "Name",
    valueType: "input"
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
