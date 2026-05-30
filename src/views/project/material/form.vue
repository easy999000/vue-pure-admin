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
    label: "编码",
    prop: "Code",
    valueType: "input"
  },
  {
    label: "名称",
    prop: "Name",
    valueType: "input"
  },
  {
    label: "规格",
    prop: "Specifications",
    valueType: "input"
  },
  {
    label: "单位",
    prop: "Unit",
    valueType: "input"
  },
  {
    label: "材料类型",
    prop: "Type",
    valueType: "select",
    options: [
      {
        label: "主材",
        value: 0
      },
      {
        label: "辅材",
        value: 1
      },
      {
        label: "劳务",
        value: 2
      },
      {
        label: "零星材料",
        value: 3
      },
      {
        label: "机械",
        value: 4
      },
      {
        label: "其他费用",
        value: 5
      },
      {
        label: "办公用品",
        value: 6
      }
    ]
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
