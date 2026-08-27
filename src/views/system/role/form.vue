<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { api } from "@/api";
import { transformI18n } from "@/plugins/i18n";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    Name: "",
    Updatetime: ""
  })
});

const loading = ref(true);
const menusData = ref<any[]>([]);
const ruleFormRef = ref();
const treeRef = ref();
const newFormInline = ref(props.formInline);
const checkedPermissionIds = ref<Array<number | string>>([]);

const loadData = async () => {
  await loadMenuTree();
  await nextTick();
  if (newFormInline?.value?.RoleID) {
    loading.value = true;
    try {
      // 假设   GetRoleFull
      const res = await api.api.get_System_GetRoleFull({
        param: Number(newFormInline?.value?.RoleID)
      });
      Object.assign(newFormInline.value, res.Data);
      const checkedKeys = (res.Data?.RoleAPIRelation1 ?? [])
        .map(item => item.APIID)
        .filter((id): id is number => id !== undefined && id !== null);
      checkedPermissionIds.value = checkedKeys;
      await nextTick();
      treeRef.value?.setCheckedKeys(checkedKeys);
    } catch (error) {
      console.error("数据加载失败:", error);
    } finally {
      loading.value = false;
    }
  }
};
const loadMenuTree = async () => {
  ////GetFullMenuTree
  const res = await api.api.get_System_GetFullMenuTree();
  menusData.value = res.Data ?? [];
};

function getRef() {
  return ruleFormRef.value;
}

function getCheckedPermissionIds() {
  return checkedPermissionIds.value;
}

function handleCheck(_data: any, info: any) {
  checkedPermissionIds.value = info.checkedKeys ?? [];
}

const dataProps = {
  value: "id",
  children: "children"
};

const expandedKeys = computed(() => {
  const keys: Array<number | string> = [];
  const collectKeys = (nodes: any[]) => {
    for (const node of nodes ?? []) {
      if (node.id !== undefined && node.id !== null) {
        keys.push(node.id);
      }
      collectKeys(node.children ?? []);
    }
  };
  collectKeys(menusData.value);
  return keys;
});

const filterMethod = (query: string, node: any) => {
  return String(transformI18n(node.meta?.title ?? ""))
    .toLowerCase()
    .includes(query.toLowerCase());
};

// 在 setup 中直接调用，尽早触发数据请求
loadData();

defineExpose({ getRef, getCheckedPermissionIds });
</script>

<template>
  <el-form ref="ruleFormRef" :model="newFormInline" label-width="82px">
    <el-form-item label="角色名称" prop="Name">
      <el-input
        v-model="newFormInline.Name"
        clearable
        placeholder="请输入角色名称"
      />
      <el-input v-model="newFormInline.RoleID" hidden />
    </el-form-item>
    <el-tree-v2
      ref="treeRef"
      :data="menusData"
      :props="dataProps"
      show-checkbox
      :height="500"
      :filter-method="filterMethod"
      :default-expanded-keys="expandedKeys"
      @check="handleCheck"
    >
      <template #default="{ data }">
        <span>{{ transformI18n(data.meta.title) }}</span>
      </template>
    </el-tree-v2>
  </el-form>
</template>
