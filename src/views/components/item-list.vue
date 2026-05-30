<script setup lang="ts">
import { ref, useAttrs, computed } from "vue";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import AddFill from "~icons/ep/plus";
import Delete from "~icons/ep/delete";
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
    //  console.log("表格刷新");
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
function onAdd() {
  emit("add-row");
  // // 根据 columns 的 prop 生成一个全字段为空的初始对象
  // const newRow: Record<string, any> = {};
  // props.columns?.forEach((col: any) => {
  //   if (col.prop) {
  //     newRow[col.prop] = ""; // 默认空字符串，也可按类型设 null
  //   }
  // });

  // // 如果有 id 列，建议生成临时 id（避免删除时找不到行）
  // newRow.id = Date.now(); // 或 UUID

  // (props.data as any[]).push(newRow);
}

function onDel(row: any, index: number) {
  console.log("删除行：", row, "索引：", index);

  (props.data as any[]).splice(index, 1);
}
</script>

<template>
  <PureTableBar
    :class="['w-full']"
    style="transition: width 220ms cubic-bezier(0.4, 0, 0.2, 1)"
    :title="title"
    :columns="columns"
    :tableRef="tableRef"
    v-bind="$attrs"
    v-bind:tableBarAttrs="tableBarAttrs"
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
        :row-style="rowStyle"
        :data="data"
        :columns="dynamicColumns || columns"
        v-bind="$attrs"
        :header-cell-style="{
          background: 'var(--el-fill-color-light)',
          color: 'var(--el-text-color-primary)'
        }"
      >
        <template #append>
          <el-button
            plain
            class="w-full my-2!"
            :icon="useRenderIcon(AddFill)"
            @click="onAdd"
          >
            添加一行数据
          </el-button>
        </template>
        <template #operation="{ row, $index }">
          <el-button
            class="reset-margin"
            link
            type="primary"
            :icon="useRenderIcon(Delete)"
            @click="onDel(row, $index)"
          />
        </template>
      </pure-table>
    </template>
  </PureTableBar>
</template>

<style lang="scss" scoped></style>
