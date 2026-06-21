import rePolling from "./src/index.vue";
import { withInstall } from "@pureadmin/utils";

/** 轮询组件，用户登录后自动开始轮询，退出后自动停止 */
export const RePolling = withInstall(rePolling);

export default RePolling;
