<template>
  <div>
    <pure-table
      :data="newFormInline.QuotationItemList"
      :columns="tabColumns"
      :row-class-name="rowClassName"
      stripe
      border
    />
  </div>
</template>
<script setup lang="tsx">
import { ref, watch } from "vue";
import { type PlusColumn, PlusForm } from "plus-pro-components";
import type { EnquiryItemsDTO } from "@/api";
import { ElCheckbox } from "element-plus";

const props = defineProps<{
  formData: Partial<EnquiryItemsDTO>;
  isCheck: boolean;
}>();

const newFormInline = ref({ ...props.formData });
const isCheck = ref(props.isCheck);

watch(
  () => props.formData,
  val => {
    if (val) newFormInline.value = { ...val };
  },
  { deep: true }
);

watch(
  () => props.isCheck,
  val => {
    isCheck.value = val;
  }
);

console.log({ title: "quotation-form", newFormInline, isCheck });

function rowClassName({ row }: { row: any }) {
  return row.Check ? "checked-row" : "";
}

const tabColumns: TableColumnList = [
  {
    label: "选择",
    prop: "ID",
    cellRenderer: ({ row }) => (
      <ElCheckbox
        modelValue={row.Check}
        disabled={isCheck.value}
        onChange={(val: boolean) => {
          const list = newFormInline.value.QuotationItemList || [];
          list.forEach((item: any) => {
            item.Check = false;
          });
          if (val) {
            row.Check = true;
          }
          newFormInline.value.QuotationItemList = [...list];
        }}
      />
    )
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
    prop: "AssessNotes",
    cellRenderer: ({ row }) => (
      <el-input v-model={row.AssessNotes} disabled={isCheck.value} />
    )
  }
];
</script>

<style lang="scss" scoped>
:deep(.checked-row > td) {
  background-color: var(--el-color-success-light-8) !important;
  font-weight: 700;
  color: var(--el-color-success-dark-2);
}
</style>
