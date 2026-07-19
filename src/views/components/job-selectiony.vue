<script setup lang="tsx">
import { ref, useAttrs, computed, reactive } from "vue";
import type { PaginationProps } from "@pureadmin/table";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { api } from "@/api";
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
  projectId?: number; // 项目ID，用于筛选
}

const props = withDefaults(defineProps<MyTableProps>(), {
  title: "",
  projectId: undefined,
  data: () => [],
  columns: () => []
});

// 组件自身的 Emits
const emit = defineEmits<{
  (e: "selection-change", value: any[]): void;
  (e: "row-click", row: any, column: any, event: Event): void;
  (e: "delete-row", row: any): void;
  (e: "add-row"): void;
  (e: "select", row: any): void;
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

const handleSelect = (row: any) => {
  emit("select", row);
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
    const { Code, Data } = await api.api.get_Project_GetProjectItemPage({
      ProjectID: props.projectId || undefined
    });

    if (Code === 0) {
      dataList.value = Data.Data;
      pagination.total = Data.Count;
      pagination.pageSize = Data.PageSize;
      pagination.currentPage = Data.PageNumber;
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
    label: "项目",
    prop: "ProjectName"
  },
  {
    label: "编码",
    prop: "Code"
  },
  {
    label: "名称",
    prop: "Name"
  },
  {
    label: "任务工程量",
    prop: "PreQuantity"
  },
  {
    label: "单位",
    prop: "Unit"
  },
  {
    label: "损耗率",
    prop: "Loss"
  },
  {
    label: "实际工程量",
    prop: "MaxQuantity"
  },
  {
    label: "描述",
    prop: "Describe"
  },
  {
    label: "操作",
    prop: "ID",
    slot: "operation"
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
        <template #operation="{ row }">
          <el-button
            class="reset-margin"
            link
            type="primary"
            @click.stop="handleSelect(row)"
          >
            选择</el-button
          >
        </template>
      </pure-table>
    </template>
  </PureTableBar>
</template>

<style lang="scss" scoped></style>
