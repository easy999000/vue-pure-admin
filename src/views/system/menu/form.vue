<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { transformI18n } from "@/plugins/i18n";
import { IconSelect } from "@/components/ReIcon";
import Segmented from "@/components/ReSegmented";
import ReAnimateSelector from "@/components/ReAnimateSelector";
import {
  menuTypeOptions,
  showLinkOptions,
  fixedTagOptions,
  keepAliveOptions,
  hiddenTagOptions,
  showParentOptions,
  frameLoadingOptions
} from "./utils/enums";
import { fa } from "element-plus/es/locale/index.mjs";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    ID: undefined,
    Action: "",
    Area: "",
    Controller: "",
    IsMenu: false,
    Name: "",
    Notes: "",
    ParentID: 0,
    Path: "",
    Sort: 0,
    Type: 0,
    UpdateTime: "",
    TypeName: "",
    higherMenuOptions: []
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
    <el-row :gutter="30">
      <re-col>
        <el-form-item label="菜单类型">
          <el-select
            v-model="newFormInline.Type"
            :options="menuTypeOptions"
            placeholder="请选择菜单类型"
            class="w-full"
          />
        </el-form-item>
      </re-col>

      <re-col>
        <el-form-item label="上级菜单">
          <el-cascader
            v-model="newFormInline.ParentID"
            class="w-full"
            :options="newFormInline.higherMenuOptions"
            :props="{
              value: 'ID',
              label: 'Name',
              emitPath: false,
              checkStrictly: true
            }"
            clearable
            filterable
            placeholder="请选择上级菜单"
          >
            <template #default="{ node, data }">
              <span>{{ transformI18n(data.Name) }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
        </el-form-item>
      </re-col>

      <re-col :value="24" :xs="24" :sm="24">
        <el-form-item label="路由路径" prop="Path">
          <el-input
            v-model="newFormInline.Path"
            clearable
            placeholder="请输入路由路径"
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="菜单名称" prop="Name">
          <el-input
            v-model="newFormInline.Name"
            clearable
            placeholder="请输入菜单名称"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="菜单排序">
          <el-input-number
            v-model="newFormInline.Sort"
            class="w-full!"
            :min="1"
            :max="9999"
            controls-position="right"
          />
        </el-form-item>
      </re-col>

      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="是否菜单">
          <Segmented
            :modelValue="newFormInline.IsMenu ? 0 : 1"
            :options="showLinkOptions"
            @change="
              ({ option: { value } }) => {
                newFormInline.IsMenu = value;
              }
            "
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="备注" prop="Notes">
          <el-input
            v-model="newFormInline.Notes"
            clearable
            placeholder="请输入备注"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
