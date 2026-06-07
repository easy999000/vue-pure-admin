<template>
  <div>
    <pure-table
      data="newFormInline.QuotationItemList"
      columns="tabColumns"
      stripe
      border
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

console.log({ title: "quotation-form", newFormInline });

const tabColumns: TableColumnList = [
  {
    label: "询价信息",
    prop: "Code"
  },
  {
    label: "对比报价",
    prop: "Name"
  }
];
</script>
