<script setup lang="tsx">
import { ref, useAttrs, computed, reactive } from "vue";
import type { PaginationProps } from "@pureadmin/table";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { api, GetSystemGetRolePageParams } from "@/api";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";

import AddFill from "~icons/ep/plus";
import Delete from "~icons/ep/delete";
import Search from "~icons/ep/search";
import Refresh from "~icons/ep/refresh";

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
  projectId?: number | string; // 项目ID，用于筛选
}

const props = withDefaults(defineProps<MyTableProps>(), {
  title: "数据表格",
  projectId: undefined
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

// ---- 搜索条件 ----
const searchForm = ref<GetSystemGetRolePageParams>({});
const searchFormRef = ref();

function handleSearch() {
  pagination.currentPage = 1;
  loadData();
}

function handleReset() {
  searchForm.value = {
    Name: ""
  };
  pagination.currentPage = 1;
  loadData();
}

// ---- 分页事件 ----
function onCurrentChange(page: number) {
  pagination.currentPage = page;
  loadData();
}

function onSizeChange(size: number) {
  pagination.pageSize = size;
  pagination.currentPage = 1;
  loadData();
}

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
    ///GetRolePage
    const { Code, Data } = await api.api.get_System_GetRolePage({
      Name: searchForm.value.Name || undefined,
      PageNumber: pagination.currentPage,
      PageSize: pagination.pageSize
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
    label: "名字",
    prop: "Name"
  },
  {
    label: "操作",
    prop: "ID",
    slot: "operation"
  }
];
</script>

<template>
  <!-- 搜索条件区域 -->
  <el-form ref="searchFormRef" :model="searchForm" inline class="search-form">
    <el-form-item label="名称">
      <el-input
        v-model="searchForm.Name"
        placeholder="请输入名称"
        clearable
        style="width: 180px"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        :icon="useRenderIcon(Search)"
        @click="handleSearch"
      >
        查询
      </el-button>
      <el-button :icon="useRenderIcon(Refresh)" @click="handleReset">
        重置
      </el-button>
    </el-form-item>
  </el-form>

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
        :loading="loading"
        adaptive
        :row-style="rowStyle"
        :adaptiveConfig="{ offsetBottom: 108 }"
        :data="dataList"
        :columns="dynamicColumns || columns"
        :pagination="pagination"
        v-bind="$attrs"
        :header-cell-style="{
          background: 'var(--el-fill-color-light)',
          color: 'var(--el-text-color-primary)'
        }"
        @page-current-change="onCurrentChange"
        @page-size-change="onSizeChange"
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

<style lang="scss" scoped>
.search-form {
  padding: 16px 16px 0;
  background: var(--el-bg-color);
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
