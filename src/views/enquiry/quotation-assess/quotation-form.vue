<template>
  <div>
    <pure-table
      :data="newFormInline.QuotationItemList"
      :columns="tabColumns"
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
    label: "选择",
    prop: "Code"
  },
  {
    label: "报价单价",
    prop: "UnitPrice"
  },
  {
    label: "税率",
    prop: "Taxrate"
  },
  {
    label: "运费单价",
    prop: "Freight"
  },
  {
    label: "合计",
    prop: "TotalAmount"
  },
  {
    label: "报价人",
    prop: "AccountName"
  },
  {
    label: "联系人",
    prop: "Contact"
  },
  {
    label: "联系人电话",
    prop: "Telephone"
  },
  {
    label: "审批备注",
    prop: "AssessNotes"
  }
];
</script>
