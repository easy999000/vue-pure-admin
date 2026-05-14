<script setup lang="tsx">
import { ref, h } from "vue";
import { FormProps } from "./utils/types";
import { ElInput } from "element-plus";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import { getAccountProjectList } from "@/api/project";
import { getAccountSelectList } from "@/api/account";
import ItemList from "@/views/components/item-list.vue";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import {
  getMyEnquiryInfoPage,
  getEnquiryInfoByID,
  updateEnquiryInfo
} from "@/api/enquiry";
import MaterialSelection from "@/views/components/material-selection.vue";

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
      return (
        <ItemList
          title="子表格"
          data={items}
          columns={subTableColumns}
          onSelection-change={rows => console.log("子表格选中行：", rows)}
          onAdd-row={handleAddRow}
        />
      );
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
    prop: "Quantity",
    cellRenderer: ({ row, column }) => (
      <ElInput
        modelValue={row.Quantity}
        onUpdate:modelValue={(val: string) => {
          row.Quantity = val;
        }}
        placeholder="数量"
        clearable
        size="small"
      />
    )
  },
  {
    label: "备注",
    prop: "Notes",
    cellRenderer: ({ row, column }) => (
      <ElInput
        modelValue={row.Notes}
        onUpdate:modelValue={(val: string) => {
          row.Notes = val;
        }}
        placeholder="备注"
        clearable
        size="small"
      />
    )
  },
  {
    label: "操作",
    width: 210,
    slot: "operation"
  }
];

function getRef() {
  // console.log({ title: "getRef", newFormInline });
  return ruleFormRef.value;
}
defineExpose({ getRef });
const handleAddRow = () => {
  console.log({ title: "handleAddRow", data: newFormInline.value.Items });
  newFormInline.value.Items.push({
    ID: "",
    Code: "",
    Name: "",
    Specifications: "",
    Unit: "",
    TypeStr: "",
    Quantity: 0,
    Notes: ""
  });
};
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
