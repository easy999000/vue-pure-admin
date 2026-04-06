<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    Name: "",
    RoleID: "",
    Updatetime: ""
  })
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

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
  </el-form>
</template>
