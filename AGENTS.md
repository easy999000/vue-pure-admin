# AGENTS.md

## 项目简介

基于 `vue-pure-admin` 二次开发的中后台管理系统。技术栈：Vue 3、Vite、TypeScript、Element Plus、Pinia、Tailwind CSS，全部使用 ESM，组件写法以 `<script setup lang="tsx">` 为主。

## 环境与常用命令

- 包管理：仅使用 `pnpm`（`preinstall` 会强制校验）。
- Node 版本：`^20.19.0 || >=22.13.0`。

```bash
pnpm dev        # 本地开发，端口 8848（.env 中 VITE_PORT）
pnpm build      # 生产构建
pnpm typecheck  # tsc + vue-tsc 类型检查
pnpm lint       # eslint + prettier + stylelint
```

## 目录结构

```text
src/
  api/        接口层；processApi.ts 由 swagger 自动生成
  views/      业务页面（contract、enquiry、procure、labor、lease、project、office、credit、system 等）
  router/     静态路由自动导入 modules/，动态路由来自后端菜单接口
  store/      Pinia 状态（user、permission、app、settings 等）
  components/ 通用组件（Re* 系列、ReAuth、RePerms 等）
  layout/     整体布局
  config/     平台配置
  utils/      工具函数（http、auth 等）
  plugins/    Element Plus、i18n、echarts、vxeTable 等插件注册
  directives/ 自定义指令
```

## 关键约定

- 路径别名：`@` -> `src`，`@build` -> `build`。
- 接口调用：`import { api } from "@/api"`，然后 `api.api.<方法名>(参数)`。方法名形如 `get_XXX_GetXXX`，由 `swagger-typescript-api` 生成。
- 响应结构统一为 `{ Code, Message, Data }`，成功码为 `0`（见 `src/api/index.ts`）。
- 重新生成接口：`npx ts-node ./src/swaggerGen/swagger.config.ts`（后端 swagger 地址为 `http://localhost:5141/swagger/v1/swagger.json`）。
- 表单优先使用 `plus-pro-components` 的 `PlusForm`；表格优先使用 `@pureadmin/table` 的 `pure-table`；Element Plus 组件已全局注册。
- 权限按钮使用全局组件 `Auth` / `Perms`。
- 提交遵循 Conventional Commits（feat / fix / refactor / chore 等）。
