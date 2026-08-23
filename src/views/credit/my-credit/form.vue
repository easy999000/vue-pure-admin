<script setup lang="tsx">
import { ref, h } from "vue";
import { FormProps } from "./utils/types";
import { ElInput, ElMessage, ElUpload, ElButton } from "element-plus";
import {
  type PlusColumn,
  type FieldValues,
  PlusForm
} from "plus-pro-components";
import {
  api,
  type EnquiryGroupPageParam,
  type GetEnquiryGetEnquiryGroupPageParams,
  type EnquiryInfoDTO
} from "@/api";
import ItemList from "@/views/components/item-list.vue";
import { getKeyList, deviceDetection } from "@pureadmin/utils";

import CreditSelection from "@/views/components/credit-selection.vue";
import JobSelection from "@/views/components/job-selectiony.vue";
import { addDialog, closeDialog } from "@/components/ReDialog";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Delete from "~icons/ep/delete";

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
      // 假设   GetCreditPayInfoFull
      const res = await api.api.get_Credit_GetCreditPayInfoFull({
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
// 模拟一个从后端获取下拉数据的API
const getProjectOptions = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await api.api.get_Project_GetAccountProjectList();
  var res = selectRes.Data.map(item => ({
    label: item.Name,
    value: item.ID
  }));

  return res;
};
// 模拟一个从后端获取下拉数据的API
const getEnquiryGroupSelect = async (): Promise<any[]> => {
  // 这里替换为你的实际请求
  const selectRes = await api.api.get_Enquiry_GetEnquiryGroupPage({
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
    label: "付款方式",
    prop: "PayMode",
    valueType: "select",
    options: [
      {
        label: "付款",
        value: 0
      },
      {
        label: "报销",
        value: 1
      },
      {
        label: "挂账",
        value: 2
      }
    ]
  },
  {
    label: "供应商名称",
    prop: "PartBName",
    valueType: "input"
  },
  {
    label: "开户行信息",
    prop: "PartBBank",
    valueType: "input"
  },
  {
    label: "账户名称",
    prop: "PartBBankUser",
    valueType: "input"
  },
  {
    label: "银行账号",
    prop: "PartBBankAccount",
    valueType: "input"
  },
  {
    label: "采购清单",
    prop: "Items",
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
function onDel(row: any, index: number) {
  if (!Array.isArray(newFormInline.value.Items)) return;
  newFormInline.value.Items.splice(index, 1);
}

const subTableColumns: TableColumnList = [
  {
    label: "操作",
    width: 210,
    slot: "operation",
    cellRenderer: ({ row, column, $index }) => (
      <div>
        <el-button
          class="reset-margin"
          link
          type="primary"
          icon={useRenderIcon(Delete)}
          onClick={() => onDel(row, $index)}
        >
          删除
        </el-button>
      </div>
    )
  },
  {
    label: "标题",
    prop: "Title"
  },
  {
    label: "项目",
    prop: "ProjectName"
  },
  {
    label: "账单类型",
    prop: "CreditTypeName"
  },
  {
    label: "供应商名称",
    prop: "PartBName"
  },
  {
    label: "开户行",
    prop: "PartBBank"
  },
  {
    label: "账户名称",
    prop: "PartBBankAccount"
  },
  {
    label: "总金额",
    prop: "TotalAmount"
  },
  {
    label: "已付款金额",
    prop: "AlreadyAmount"
  },
  {
    label: "本次付款金额",
    prop: "PaidAmount",
    cellRenderer: ({ row, column, $index }) => (
      <ElInput
        modelValue={row.PaidAmount}
        onUpdate:modelValue={(val: string) => {
          row.PaidAmount = val;
        }}
        placeholder="数量"
        clearable
        size="small"
      />
    )
  }
];

function getRef() {
  // console.log({ title: "getRef", newFormInline });
  return ruleFormRef.value;
}
defineExpose({ getRef });
const handleAddRow = () => {
  addDialog({
    title: "关联账单",
    width: "80%",
    draggable: true,
    fullscreen: deviceDetection(),
    fullscreenIcon: true,
    closeOnClickModal: false,
    hideFooter: true,
    contentRenderer: ({ options, index }) =>
      h(CreditSelection, {
        title: "物料列表",
        onSelect: row => {
          handleCreditSelect(row);
          closeDialog(options, index, { command: "sure" });
        }
      })
  });
};

const handleCreditSelect = row => {
  if (!Array.isArray(newFormInline.value.Items)) {
    newFormInline.value.Items = [];
  }
  console.log("Selected credit:", row);

  const procureItem: any = { ...row };

  ///$(currentEditMaterialRow).find("input[name='OrderID']").val(material.ID);
  procureItem.ID = undefined;
  procureItem.OrderID = row.ID;

  newFormInline.value.Items.push({
    ...procureItem,
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
      label-width="120px"
      label-position="right"
      :has-footer="false"
    />
  </div>
</template>
