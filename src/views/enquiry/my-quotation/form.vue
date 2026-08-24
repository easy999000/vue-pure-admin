<script setup lang="tsx">
import { h, ref } from "vue";
import { FormProps } from "./utils/types";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import ItemList from "@/views/components/item-list.vue";

import { fa } from "element-plus/es/locale/index.mjs";
import { api } from "@/api";
import { number } from "echarts";
import { ElInput, ElInputNumber } from "element-plus";
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
      const res = await api.api.get_Enquiry_GetQuotationByID({
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
    valueType: "text"
  },
  {
    label: "项目",
    prop: "ProjectName",
    valueType: "text"
  },
  {
    label: "截止时间",
    prop: "EndTime",
    valueType: "text"
  },
  {
    prop: "hint",
    hasLabel: false, // 彻底隐藏标签和冒号
    formItemProps: {
      // labelWidth: "0px" // 保险起见，同时设置宽度为0
    },
    renderField: () => {
      return h(
        "span",
        {
          style: "color: red; font-weight: bold; display: block; width: 100%;"
        },
        "报价单价包含运费和税金，当填写税率为0时，表示单价不含税，当运费单价为0时，表示不含运费；具体要求请看备注，备注为空时，表示询价要含税。未按照本说明和备注要求报价将被视为无效报价，按照未报价处理。"
      );
    }
  },
  {
    label: "关联数据",
    prop: "QuotationItems",
    // valueType 只需占位，实际渲染由 renderField 接管
    renderField: (value, onChange, row) => {
      const items = (value as any[]) || [];
      return (
        <ItemList
          title=""
          data={items}
          columns={subTableColumns}
          //onSelection-change={rows => console.log("子表格选中行：", rows)}
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
    prop: "MaterialName"
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
    label: "报价单价",
    prop: "UnitPrice",
    cellRenderer: ({ row, column }) => (
      <ElInputNumber
        modelValue={row.UnitPrice}
        onUpdate:modelValue={(val: number) => {
          row.UnitPrice = val;
        }}
        placeholder="报价单价"
        clearable
        size="small"
      />
    )
  },
  {
    label: "税率",
    prop: "Freight",
    cellRenderer: ({ row, column }) => (
      <ElInputNumber
        modelValue={row.Freight}
        onUpdate:modelValue={(val: number) => {
          row.Freight = val;
        }}
        placeholder="税率"
        clearable
        size="small"
      />
    )
  },
  {
    label: "运费单价",
    prop: "Taxrate",
    cellRenderer: ({ row, column }) => (
      <ElInputNumber
        modelValue={row.Taxrate}
        onUpdate:modelValue={(val: number) => {
          row.Taxrate = val;
        }}
        placeholder="运费单价"
        clearable
        size="small"
      />
    )
  },
  {
    label: "合计",
    prop: "TotalAmount"
  },
  {
    label: "备注",
    prop: "Notes"
  },
  {
    label: "联系人",
    prop: "Contact",
    cellRenderer: ({ row, column }) => (
      <ElInput
        modelValue={row.Contact}
        onUpdate:modelValue={(val: string) => {
          row.Contact = val;
        }}
        placeholder="联系人"
        clearable
        size="small"
      />
    )
  },
  {
    label: "联系人电话",
    prop: "Telephone",
    cellRenderer: ({ row, column }) => (
      <ElInput
        modelValue={row.Telephone}
        onUpdate:modelValue={(val: string) => {
          row.Telephone = val;
        }}
        placeholder="联系人电话"
        clearable
        size="small"
      />
    )
  }
];
const handleAddRow = () => {
  // addDialog({
  //   title: "选择物料",
  //   width: "80%",
  //   draggable: true,
  //   fullscreen: deviceDetection(),
  //   fullscreenIcon: true,
  //   closeOnClickModal: false,
  //   hideFooter: true,
  //   contentRenderer: ({ options, index }) =>
  //     h(MaterialSelection, {
  //       title: "物料列表",
  //       onSelect: row => {
  //         handleMaterialSelect(row);
  //         closeDialog(options, index, { command: "sure" });
  //       }
  //     })
  // });
};
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
      class="m-auto"
      :columns="columns"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
