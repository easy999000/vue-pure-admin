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
import { getEnquiryGroupPage } from "@/api/enquiry";
import ItemList from "@/views/components/item-list.vue";
import { getKeyList, deviceDetection } from "@pureadmin/utils";
import {
  getMyEnquiryInfoPage,
  getEnquiryInfoByID,
  updateEnquiryInfo
} from "@/api/enquiry";
import MaterialSelection from "@/views/components/material-selection.vue";
import { addDialog, closeDialog } from "@/components/ReDialog";

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
  const selectRes = await getAccountSelectList();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.AccountID
  }));

  return res;
};
// 模拟一个从后端获取下拉数据的API
const getProjectOptions = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await getAccountProjectList();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.ID
  }));

  return res;
};
// 模拟一个从后端获取下拉数据的API
const getEnquiryGroupSelect = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await getEnquiryGroupPage({
    PageNumber: 1,
    PageSize: 9999
  });
  var res = selectRes.Data.Data.map(item => ({
    label: item.Name,
    value: item.ID
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
    label: "所属项目",
    prop: "ProjectID",
    valueType: "select",
    options: getProjectOptions()
  },
  {
    label: "截止时间",
    prop: "EndTime",
    valueType: "date-picker"
  },
  {
    label: "报价组",
    prop: "GroupList",
    valueType: "checkbox",
    options: getEnquiryGroupSelect()
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
  addDialog({
    title: "选择物料",
    width: "80%",
    draggable: true,
    fullscreen: deviceDetection(),
    fullscreenIcon: true,
    closeOnClickModal: false,
    hideFooter: true,
    contentRenderer: ({ options, index }) =>
      h(MaterialSelection, {
        title: "物料列表",
        onSelect: row => {
          handleMaterialSelect(row);
          closeDialog(options, index, { command: "sure" });
        }
      })
  });
};

const handleMaterialSelect = row => {
  if (!Array.isArray(newFormInline.value.Items)) {
    newFormInline.value.Items = [];
  }

  newFormInline.value.Items.push({
    ...row,
    MaterialID: row.ID,
    Quantity: row?.Quantity ?? 0,
    Notes: row?.Notes ?? "",
    ID: null
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
