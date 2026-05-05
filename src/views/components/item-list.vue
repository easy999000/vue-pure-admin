<script setup lang="ts">
import { ref, useAttrs, computed } from "vue";
import { PureTableBar } from "@/components/RePureTableBar";
// 获取透传属性并显式声明 tableBarAttrs 的类型
const attrs = useAttrs();
const tableBarAttrs = computed(
  () => (attrs.tableBarAttrs as Record<string, any>) ?? {}
);
// 定义 MyTable 组件自身需要的 Props
interface MyTableProps {
  title?: string; // 表格标题
  data?: any[]; // 表格数据
  columns?: any[]; // 表格列配置
  requestApi?: (...args: any) => Promise<any>; // 请求数据的 API
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
}>();

// 表格引用
const tableRef = ref();

// 内部事件处理（根据需要进行二次处理后，再通过 emit 转发给父组件）
const handleSelectionChange = (selection: any[]) => {
  console.log("选中的数据:", selection);
  emit("selection-change", selection);
};

const handleRowClick = (row: any, column: any, event: Event) => {
  console.log("点击的行:", row);
  emit("row-click", row, column, event);
};

// 暴露方法，使父组件可以直接通过 ref 调用
defineExpose({
  /**
   * 获取 pure-table 的底层实例，可调用其完整方法
   */
  getTableRef: () => tableRef.value,
  /**
   * 获取表格选中的数据行
   */
  getSelectionRows: () => {
    return tableRef.value?.getSelectionRows?.() || [];
  },
  /**
   * 刷新表格数据
   */
  refresh: () => {
    console.log("表格刷新");
    // 若需结合 requestApi 实现自动刷新，请在此处调用请求逻辑
  }
});
const curRow = ref();
function rowStyle({ row: { id } }) {
  return {
    cursor: "pointer",
    background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
  };
}
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
        :data="data"
        :columns="dynamicColumns || columns"
        v-bind="$attrs"
        :header-cell-style="{
          background: 'var(--el-fill-color-light)',
          color: 'var(--el-text-color-primary)'
        }"
      />
    </template>
  </PureTableBar>
</template>

<style lang="scss" scoped></style>
