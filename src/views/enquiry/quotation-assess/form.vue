<script setup lang="tsx">
import { ref } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";

import { api, type GetEnquiryGetQuotationAssessPageParams } from "@/api";
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
      const res = await api.api.get_Enquiry_GetQuotationAssessByID({
        ID: Number(newFormInline?.value?.ID)
      });
      Object.assign(newFormInline.value, res.Data);
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
  const selectRes = await api.api.get_Account1_GetAccountSelectList();
  var res = selectRes.Data.map(item => ({
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
    prop: "ProjectName",
    valueType: "input"
  },
  {
    label: "状态",
    prop: "StatusName",
    valueType: "input"
  },
  {
    label: "截止时间",
    prop: "EndTime",
    valueType: "input"
  },
  {
    label: "提前截至",
    prop: "Status",
    renderField: (value, onChange, row) => {
      return <el-button color="#0055ff">停止报价</el-button>;
    }
  },
  {
    label: "审批列表",
    prop: "Items",
    renderField: (value, onChange, row) => {
      return <pure-table data={value} columns={columns2} />;
    }
  }
];

const columns2: TableColumnList = [
  {
    label: "询价信息",
    prop: "Code"
  },
  {
    label: "对比报价",
    prop: "Name"
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
      class="w-full m-auto"
      :columns="columns"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
