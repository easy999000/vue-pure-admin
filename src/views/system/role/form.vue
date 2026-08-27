<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { api } from "@/api";
const loading = ref(true);

const loadData = async () => {
  await loadMenuTree();
  if (newFormInline?.value?.RoleID) {
    loading.value = true;
    try {
      // 假设   GetRoleFull
      const res = await api.api.get_System_GetRoleFull({
        param: Number(newFormInline?.value?.RoleID)
      });
      Object.assign(newFormInline.value, res.Data);
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
  menusData.value = res.Data;
};

// 在 setup 中直接调用，尽早触发数据请求
loadData();
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    Name: "",
    Updatetime: ""
  })
});

const menusData = ref();
const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}
const dataProps = ref({
  value: "uniqueId",
  children: "children"
});
defineExpose({ getRef });
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
    >
      <template #default="{ data }">
        <span>{{ transformI18n(data.meta.title) }}</span>
      </template>
    </el-tree-v2>
  </el-form>
</template>
