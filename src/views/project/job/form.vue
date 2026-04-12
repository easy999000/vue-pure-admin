<script setup lang="ts">
import { ref } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
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
const columns: PlusColumn[] = [
  {
    label: "任务编码",
    prop: "Code",
    valueType: "input"
  },
  {
    label: "任务名称",
    prop: "Name",
    valueType: "input"
  },
  {
    label: "任务单位",
    prop: "Unit",
    valueType: "input"
  },
  {
    label: "所属项目",
    prop: "ProjectID",
    valueType: "select"
  },
  {
    label: "任务损失率",
    prop: "Loss",
    valueType: "input-number"
  },
  {
    label: "合同工程量",
    prop: "PreQuantity",
    valueType: "input-number"
  },
  {
    label: "最大工程量",
    prop: "MaxQuantity",
    valueType: "input-number"
  },
  {
    label: "单位工程",
    prop: "PhaseID",
    valueType: "input"
  },
  {
    label: "任务描述",
    prop: "Describe",
    valueType: "input"
  },
  {
    label: "任务其他",
    prop: "Ext1",
    valueType: "input"
  },
  {
    label: "任务备注",
    prop: "Notes",
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
