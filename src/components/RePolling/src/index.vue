<script setup lang="ts">
import { ref, watch } from "vue";
import { ElNotification } from "element-plus";
import { usePolling } from "@/utils/usePolling";
import { useUserStoreHook } from "@/store/modules/user";

defineOptions({
  name: "RePolling"
});

const props = withDefaults(
  defineProps<{
    /** 轮询调用的接口函数 */
    fetcher: () => Promise<any>;
    /** 轮询间隔（ms），默认 10000 */
    interval?: number;
    /** 登录后是否立即执行一次，默认 true */
    immediate?: boolean;
    /** 从接口响应中提取消息 ID 的函数，提供后自动追踪最新消息并弹窗提醒 */
    msgIdExtractor?: (data: any) => number | undefined;
  }>(),
  {
    interval: 10000,
    immediate: true
  }
);

const emit = defineEmits<{
  (e: "data", data: any): void;
  (e: "error", error: unknown): void;
  (e: "newMsg", msgId: number): void;
}>();

const userStore = useUserStoreHook();

const SESSION_KEY = "RE_POLLING_MAX_MSG_ID";

function loadMaxMsgId(): number {
  const stored = sessionStorage.getItem(SESSION_KEY);
  return stored ? Number(stored) : 0;
}

function saveMaxMsgId(id: number) {
  sessionStorage.setItem(SESSION_KEY, String(id));
}

function clearMaxMsgId() {
  sessionStorage.removeItem(SESSION_KEY);
}

const maxMsgId = ref(loadMaxMsgId());

watch(
  () => userStore.username,
  username => {
    if (username) {
      maxMsgId.value = loadMaxMsgId();
    } else {
      maxMsgId.value = 0;
      clearMaxMsgId();
    }
  },
  { immediate: true }
);

function handleData(data: any) {
  emit("data", data);

  if (!props.msgIdExtractor) return;

  const msgId = props.msgIdExtractor(data);
  if (msgId == null) return;

  if (msgId > maxMsgId.value) {
    maxMsgId.value = msgId;
    saveMaxMsgId(msgId);

    ElNotification({
      title: "🔔 新消息提醒",
      message: "您有新的消息，请及时查看",
      type: "warning",
      position: "bottom-right",
      duration: 20000,
      dangerouslyUseHTMLString: true,
      customClass: "re-polling-notify",
      offset: 60
    });

    emit("newMsg", msgId);
  }
}

const { data, loading, error, isActive, execute } = usePolling(props.fetcher, {
  interval: props.interval,
  immediate: props.immediate,
  onData: handleData,
  onError: err => emit("error", err)
});

defineExpose({ data, loading, error, execute, maxMsgId });
</script>

<template>
  <slot
    :data="data"
    :loading="loading"
    :error="error"
    :isActive="isActive"
    :execute="execute"
    :maxMsgId="maxMsgId"
  />
</template>


<style lang="scss">
/* RePolling 消息通知 — 放大加粗更醒目 */
.re-polling-notify {
  width: 380px !important;
  padding: 20px 24px !important;

  .el-notification__title {
    font-size: 18px !important;
    font-weight: 700 !important;
  }

  .el-notification__content {
    margin-top: 8px;
    font-size: 15px !important;
    font-weight: 600 !important;
    color: var(--el-color-warning-dark-2) !important;
  }

  .el-notification__icon {
    font-size: 28px !important;
  }

  .el-notification__closeBtn {
    font-size: 18px !important;
  }
}
</style>