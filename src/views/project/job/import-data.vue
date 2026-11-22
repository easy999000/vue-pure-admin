<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { UploadFile } from "element-plus";
import { api } from "@/api";
import { message } from "@/utils/message";

const fileList = ref<UploadFile[]>([]);
const selectedFile = ref<File | null>(null);
const uploading = ref(false);
const projectId = ref<number>();
const projectOptions = ref<{ label: string; value: number }[]>([]);

const loadProjects = async () => {
  const selectRes = await api.api.get_Project_GetAccountProjectList();
  projectOptions.value =
    selectRes.Data?.map(item => ({
      label: item.Name ?? "",
      value: item.ID
    })) ?? [];
};

const handleChange = (uploadFile: UploadFile) => {
  selectedFile.value = (uploadFile.raw as File) ?? null;
};

const handleRemove = () => {
  selectedFile.value = null;
};

const submit = () => {
  const file = selectedFile.value;

  if (!file) {
    message("请先选择要导入的 Excel 文件", { type: "warning" });
    return Promise.reject(new Error("未选择文件"));
  }

  const ext = file.name.split(".").pop()?.toLowerCase();

  if (!ext || !["xlsx", "xls"].includes(ext)) {
    message("请选择 Excel 文件（.xlsx 或 .xls）", { type: "error" });
    return Promise.reject(new Error("文件格式不正确"));
  }

  if (!projectId.value) {
    message("请先选择项目", { type: "warning" });
    return Promise.reject(new Error("未选择项目"));
  }
  //UploadProjectItem
  uploading.value = true;
  return api.api
    .post_Project_UploadProjectItem({
      ProjectID: projectId.value,
      file
    })
    .then(res => {
      if (res.Code === 0) {
        message("导入成功", { type: "success" });
        return res;
      } else {
        message(res.Message || "导入失败", { type: "error" });
        return Promise.reject(new Error(res.Message || "导入失败"));
      }
    })
    .finally(() => {
      uploading.value = false;
    });
};

onMounted(loadProjects);

defineExpose({ submit });
</script>

<template>
  <div class="import-data">
    <div class="project-select">
      <span class="project-select__label">所属项目：</span>
      <el-select
        v-model="projectId"
        placeholder="请选择项目"
        clearable
        filterable
      >
        <el-option
          v-for="item in projectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-upload
      v-model:file-list="fileList"
      drag
      accept=".xlsx,.xls"
      :auto-upload="false"
      :limit="1"
      :show-file-list="true"
      :disabled="uploading"
      :on-change="handleChange"
      :on-remove="handleRemove"
    >
      <div class="el-upload__text">
        {{ uploading ? "正在导入..." : "将 Excel 文件拖到此处，或" }}
        <em v-if="!uploading">点击选择文件</em>
      </div>
    </el-upload>
    <p class="import-tip">仅支持 .xlsx / .xls 格式的 Excel 文件</p>
    <div>
      <div>excel导入模板</div>
      <div>
        <a href="/files/template/任务主材.xlsx" download="任务主材.xlsx">
          [任务主材导入模板]</a
        >
      </div>
      <div>
        <a href="/files/template/材料导入.xlsx" download="材料导入.xlsx">
          [材料导入模板]</a
        >
      </div>
      <div>
        <a href="/files/template/任务导入.xlsx" download="任务导入.xlsx">
          [任务导入模板]</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.import-data {
  .project-select {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &__label {
      flex-shrink: 0;
      margin-right: 8px;
      font-size: 14px;
    }

    .el-select {
      width: 100%;
    }
  }

  .import-tip {
    margin-top: 12px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
    text-align: center;
  }
}
</style>
