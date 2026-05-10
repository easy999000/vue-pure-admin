<script setup lang="tsx">
import { ref, useAttrs, computed, reactive } from "vue";
import type { PaginationProps } from "@pureadmin/table";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getMaterialInfoPage } from "@/api/material";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";

import AddFill from "~icons/ep/plus";
import Delete from "~icons/ep/delete";

// 获取透传属性并显式声明 tableBarAttrs 的类型
const attrs = useAttrs();
const tableBarAttrs = computed(
  () => (attrs.tableBarAttrs as Record<string, any>) ?? {}
);
const pagination = reactive<PaginationProps>({
  total: 0,
  pageSize: 10,
  currentPage: 1,
  background: true
});
const dataList = ref([]);

const loading = ref(true);
// 定义 MyTable 组件自身需要的 Props
interface MyTableProps {
  title?: string; // 表格标题
}

const props = withDefaults(defineProps<MyTableProps>(), {
  title: "数据表格",
  data: () => [],
  columns: () => []
});

// 组件自身的 Emits
const emit = defineEmits<{
  (e: "selection-change", value: any[]): void;
  (e: "row-click", row: any, column: any, event: Event): void;
  (e: "delete-row", row: any): void;
  (e: "add-row"): void;
}>();

// 表格引用
const tableRef = ref();

// 内部事件处理（根据需要进行二次处理后，再通过 emit 转发给父组件）
const handleSelectionChange = (selection: any[]) => {
  emit("selection-change", selection);
};

const handleRowClick = (row: any, column: any, event: Event) => {
  emit("row-click", row, column, event);
};

const curRow = ref();
function rowStyle({ row: { id } }) {
  return {
    cursor: "pointer",
    background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
  };
}
const loadData = async () => {
  loading.value = true;
  try {
    // 假设 getTableData 是你的 API 请求函数
    const { code, data } = await getMaterialInfoPage({});

    if (code === 0) {
      dataList.value = data.Data;
      pagination.total = data.Count;
      pagination.pageSize = data.PageSize;
      pagination.currentPage = data.PageNumber;
    }
  } catch (error) {
    console.error("数据加载失败:", error);
  } finally {
    loading.value = false;
  }
};

// 在 setup 中直接调用，尽早触发数据请求
loadData();

const columns: TableColumnList = [
  {
    label: "编码",
    prop: "Code"
  },
  {
    label: "名称",
    prop: "Name"
  },
  {
    label: "规格",
    prop: "Specifications"
  },
  {
    label: "单位",
    prop: "Unit"
  },
  {
    label: "类别",
    prop: "TypeStr"
  },
  {
    label: "操作",
    prop: "ID"
  }
];
</script>

<template>
  <PureTableBar
    :class="['w-full']"
    style="transition: width 220ms cubic-bezier(0.4, 0, 0.2, 1)"
    :title="title"
    :columns="columns"
    :tableRef="tableRef"
    v-bind="tableBarAttrs"
  >
    <template #buttons />
    <template v-slot="{ size, dynamicColumns }">
      <pure-table
        ref="tableRef"
        stripe
        border
        align-whole="center"
        showOverflowTooltip
        table-layout="auto"
        :size="size"
        adaptive
        :row-style="rowStyle"
        :adaptiveConfig="{ offsetBottom: 108 }"
        :data="dataList"
        :columns="dynamicColumns || columns"
        v-bind="$attrs"
        :header-cell-style="{
          background: 'var(--el-fill-color-light)',
          color: 'var(--el-text-color-primary)'
        }"
      >
        <template #operation="{ row, $index }">
          <el-button
            class="reset-margin"
            link
            type="primary"
            @click="handleSelectionChange(row)"
          >
            选择</el-button
          >
        </template>
      </pure-table>
    </template>
  </PureTableBar>
</template>

<style lang="scss" scoped></style>
