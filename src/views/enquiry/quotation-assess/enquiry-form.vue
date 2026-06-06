<template>
  <div>
    <PlusForm
      ref="ruleFormRef"
      v-model="newFormInline"
      :columns="columns"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
<script setup lang="tsx">
import { PlusColumn } from "plus-pro-components";
import { Enquiryinfo, FormProps } from "./utils/types";
import { ref } from "vue";
const props = withDefaults(defineProps<Enquiryinfo>(), {});
const newFormInline = ref(props);

const columns: PlusColumn[] = [
  {
    label: "标题",
    prop: "Title",
    valueType: "input"
  },
  {
    label: "项目",
    prop: "ProjectName",
    valueType: "input"
  },
  {
    label: "状态",
    prop: "StatusName",
    valueType: "input"
  },
  {
    label: "截止时间",
    prop: "EndTime",
    valueType: "input"
  }
];
</script>
