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
import type { EnquiryItemsDTO } from "@/api";

const props = defineProps<{ formData: Partial<EnquiryItemsDTO> }>();

const newFormInline = ref({ ...props.formData });

watch(
  () => props.formData,
  val => {
    if (val) newFormInline.value = { ...val };
  },
  { deep: true }
);

const columns: PlusColumn[] = [
  {
    label: "编码",
    prop: "Code",
    valueType: "text"
  },
  {
    label: "名称",
    prop: "Name",
    valueType: "text"
  },
  {
    label: "规格",
    prop: "Specifications",
    valueType: "text"
  },
  {
    label: "单位",
    prop: "Unit",
    valueType: "text"
  },
  {
    label: "物料类型",
    prop: "TypeStr",
    valueType: "text"
  },
  {
    label: "数量",
    prop: "Quantity",
    valueType: "text"
  },
  {
    label: "备注",
    prop: "Notes",
    valueType: "text"
  }
];
</script>
