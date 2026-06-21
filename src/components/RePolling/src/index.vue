<script setup lang="ts">
import { usePolling } from "@/utils/usePolling";

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
  }>(),
  {
    interval: 10000,
    immediate: true
  }
);

const emit = defineEmits<{
  (e: "data", data: any): void;
  (e: "error", error: unknown): void;
}>();

const { data, loading, error, isActive, execute } = usePolling(props.fetcher, {
  interval: props.interval,
  immediate: props.immediate,
  onData: d => emit("data", d),
  onError: err => emit("error", err)
});

defineExpose({ data, loading, error, execute });
</script>

<template>
  <slot
    :data="data"
    :loading="loading"
    :error="error"
    :isActive="isActive"
    :execute="execute"
  />
</template>
