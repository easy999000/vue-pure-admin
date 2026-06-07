<template>
  <div>
    <PlusForm
      v-model="newFormInline"
      :columns="columns"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
<script setup lang="tsx">
import { ref, watch } from "vue";
import { type PlusColumn, PlusForm } from "plus-pro-components";
import type { Enquiryinfo } from "@/api";

const props = defineProps<{ formData: Partial<Enquiryinfo> }>();

const newFormInline = ref({ ...props.formData });

watch(
  () => props.formData,
  val => {
    if (val) newFormInline.value = { ...val };
  },
  { deep: true }
);

console.log({ title: "enquiry-form", newFormInline });

const columns: PlusColumn[] = [
  {
    label: "标题",
    prop: "Title",
    valueType: "text"
  },
  {
    label: "项目",
    prop: "ProjectName",
    valueType: "text"
  },
  {
    label: "状态",
    prop: "StatusName",
    valueType: "text"
  },
  {
    label: "截止时间",
    prop: "EndTime",
    valueType: "text"
  }
];
</script>
