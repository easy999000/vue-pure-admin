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

function rowClassName({ row }: { row: any }) {
  return row.Check ? "checked-row" : "";
}

const tabColumns: TableColumnList = [
  {
    label: "选择",
    prop: "Code",
    cellRenderer: ({ row }) => (
      <ElCheckbox
        modelValue={row.Check}
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
    cellRenderer: ({ row }) => <el-input v-model={row.AssessNotes} />
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
