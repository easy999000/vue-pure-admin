<script setup lang="ts">
import { ref, h } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import { getAccountProjectList } from "@/api/project";
import { getAccountSelectList } from "@/api/account";
import itemList from "@/views/components/item-list.vue";

import {
  getMyEnquiryInfoPage,
  getEnquiryInfoByID,
  updateEnquiryInfo
} from "@/api/enquiry";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({})
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

const loading = ref(true);

const loadData = async () => {
  if (newFormInline?.value?.ID) {
    loading.value = true;
    try {
      // 假设 getTableData 是你的 API 请求函数
      const res = await getEnquiryInfoByID({ ID: newFormInline?.value?.ID });
      Object.assign(newFormInline.value, res.data);

      console.log({
        title: "loadData",
        value: newFormInline.value,
        data: res.data
      });
    } catch (error) {
      console.error("数据加载失败:", error);
    } finally {
      loading.value = false;
    }
  }
};

// 在 setup 中直接调用，尽早触发数据请求
loadData();

const state = ref<FieldValues>({
  status: "1",
  name: "",
  rate: 4,
  progress: 100,
  switch: true,
  time: new Date().toString(),
  endTime: []
});
// 模拟一个从后端获取下拉数据的API
const getAccountSelect = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await getAccountSelectList();
  var res = selectRes.data.map(item => ({
    label: item.Name,
    value: item.AccountID
  }));

  return res;
};

const columns: PlusColumn[] = [
  {
    label: "标题",
    prop: "Title",
    valueType: "input"
  },
  {
    label: "项目",
    prop: "ProjectID",
    valueType: "input"
  },
  {
    label: "截止时间",
    prop: "EndTime",
    valueType: "input"
  },
  {
    label: "报价组",
    prop: "GroupList",
    valueType: "input"
  },
  {
    label: "关联数据",
    prop: "Items",
    // valueType 只需占位，实际渲染由 renderField 接管
    renderField: (value, onChange, row) => {
      const items = (value as any[]) || [];
      console.log({
        title: "关联数据",
        value,
        row,
        items,
        relatedItems: row?.relatedItems
      });
      return h(itemList, {
        title: "子表格",
        data: items, // 当前字段的值，比如从后端获取的数组
        columns: subTableColumns,
        "onSelection-change": rows => console.log("子表格选中行：", rows)
      });
    }
  }
];
const subTableColumns: TableColumnList = [
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
    label: "物料类型",
    prop: "TypeStr"
  },
  {
    label: "数量",
    prop: "Quantity"
  },
  {
    label: "备注",
    prop: "Notes"
  },
  {
    label: "操作",
    width: 210,
    slot: "operation"
  }
];

function getRef() {
  console.log({ title: "getRef", newFormInline });
  return ruleFormRef.value;
}
defineExpose({ getRef });
</script>

<template>
  <div>
    <PlusForm
      ref="ruleFormRef"
      v-model="newFormInline"
      class="w-112.5 m-auto"
      :columns="columns"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
