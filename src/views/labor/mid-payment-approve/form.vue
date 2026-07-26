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

import MaterialSelection from "@/views/components/material-selection.vue";
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
  if (newFormInline?.value?.Id) {
    loading.value = true;
    try {
      // 假设 getTableData 是你的 API 请求函数 GetLaborPay
      const res = await api.api.get_Labor_GetLaborPay({
        ID: Number(newFormInline?.value?.Id)
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
    valueType: "text"
  },
  {
    label: "所属项目",
    prop: "ProjectID",
    valueType: "select",
    options: getProjectOptions()
  },
  {
    label: "总金额",
    prop: "TotalAmount",
    valueType: "text"
  },
  {
    label: "本期产值",
    prop: "TotalReviewQuantity",
    valueType: "text"
  },
  {
    label: "支付比例",
    prop: "TotalReviewAmountPercent",
    valueType: "text"
  },
  {
    label: "本期应付工程款",
    prop: "TotalReviewAmount",
    valueType: "text"
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
    label: "序号",
    prop: "JobCode"
  },
  {
    label: "名称",
    prop: "JobName"
  },
  {
    label: "单位",
    prop: "MaterialUnit"
  },
  {
    label: "工程量",
    prop: "PreQuantity"
  },
  {
    label: "单价",
    prop: "UnitPrice"
  },
  {
    label: "合价",
    prop: "TotalAmount"
  },
  {
    label: "上期累计工程量",
    prop: "PreviousQuantity"
  },
  {
    label: "合价",
    prop: "PreviousQuantityAmount"
  },
  {
    label: "本期上报",
    prop: "ApplicationQuantity",
    cellRenderer: ({ row, column, $index }) => (
      <ElInput
        modelValue={row.ApplicationQuantity}
        onUpdate:modelValue={(val: string) => {
          row.ApplicationQuantity = val;
        }}
        placeholder="数量"
        clearable
        size="small"
      />
    )
  },
  {
    label: "合价",
    prop: ""
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

var ShowJobChoose = (procureRow: any, index: number) => {
  if (!newFormInline.value.ProjectID) {
    ElMessage.warning("请先选择所属项目");
    return;
  }
  addDialog({
    title: "选择任务",
    width: "80%",
    draggable: true,
    fullscreen: deviceDetection(),
    fullscreenIcon: true,
    closeOnClickModal: false,
    hideFooter: true,
    contentRenderer: ({ options, index }) =>
      h(JobSelection, {
        title: "任务列表",
        projectId: newFormInline.value.ProjectID,
        onSelect: row => {
          handleJobSelect(row, procureRow);
          closeDialog(options, index, { command: "sure" });
        }
      })
  });
};

const handleJobSelect = (row, procureItem) => {
  if (!Array.isArray(newFormInline.value.Items)) {
    newFormInline.value.Items = [];
  }
  console.log("Selected material:", row);
  procureItem.ProjectItemID = row.ID;
  procureItem.JobCode = row.Code;
  procureItem.JobName = row.Name;
  procureItem.PreQuantity = row.PreQuantity;
  procureItem.Quantity = row.PreQuantity;
};
const handleMaterialSelect = row => {
  if (!Array.isArray(newFormInline.value.Items)) {
    newFormInline.value.Items = [];
  }
  console.log("Selected material:", row);
  const procureItem: any = {};
  procureItem.MaterialID = row.ID;
  procureItem.MaterialCode = row.Code;
  procureItem.MaterialName = row.Name;
  procureItem.MaterialSpecifications = row.Specifications;
  procureItem.MaterialType = row.Type;
  procureItem.MaterialTypeStr = row.TypeStr;
  procureItem.MaterialUnit = row.Unit;
  procureItem.UnitPrice = row.Price;

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
