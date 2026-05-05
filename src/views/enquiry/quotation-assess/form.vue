<script setup lang="ts">
import { ref } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import { getAccountProjectList } from "@/api/project";
import { getAccountSelectList } from "@/api/account";
import {
  getEnquiryGroupPage,
  updateEnquiryGroup,
  delEnquiryGroupByID,
  GetEnquiryGroupByID
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
      const res = await GetEnquiryGroupByID({ ID: newFormInline?.value?.ID });
      Object.assign(newFormInline.value, res.data);
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
    label: "名称",
    prop: "Name",
    valueType: "input"
  },
  {
    prop: "EnquiryGroupAccount",
    label: "分组人员",
    // 1. 指定组件类型
    valueType: "checkbox",
    // 2. 动态加载选项
    options: getAccountSelect(),
    fieldProps: {
      // 3. 可根据条件禁用整个复选框组 (e.g., { disabled: true })
    }
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
