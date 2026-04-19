<script setup lang="ts">
import { ref } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import { getAccountProjectList } from "@/api/project";
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    Name: ""
  })
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
  const selectRes = await getAccountProjectList();
  var res = selectRes.data.map(item => ({
    label: item.Name,
    value: item.ID
  }));

  return res;
};

const columns: PlusColumn[] = [
  {
    label: "项目名称",
    prop: "Name",
    valueType: "input"
  },
  {
    label: "开始日期",
    prop: "StartDate",
    valueType: "date-picker"
  },
  {
    label: "结束日期",
    prop: "EndDate",
    valueType: "date-picker"
  },
  {
    label: "管理费率",
    prop: "ManageRate",
    valueType: "input-number"
  },
  {
    label: "利率率",
    prop: "ProfitRate",
    valueType: "input-number"
  },
  {
    label: "备注",
    prop: "Notes",
    valueType: "textarea"
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
