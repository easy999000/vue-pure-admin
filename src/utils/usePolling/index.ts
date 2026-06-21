import { ref, watch, onBeforeUnmount } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { useUserStoreHook } from "@/store/modules/user";

export interface UsePollingOptions<T> {
  /** 轮询间隔，默认 10000ms */
  interval?: number;
  /** 是否在登录后立即执行一次，默认 true */
  immediate?: boolean;
  /** 数据返回时的回调 */
  onData?: (data: T) => void;
  /** 请求失败时的回调 */
  onError?: (error: unknown) => void;
}

export function usePolling<T = unknown>(
  fetcher: () => Promise<T>,
  options: UsePollingOptions<T> = {}
) {
  const { interval = 10000, immediate = true, onData, onError } = options;

  const data = ref<T>();
  const loading = ref(false);
  const error = ref<unknown>(null);

  const userStore = useUserStoreHook();
  const isLoggedIn = () => !!userStore.username;

  async function execute() {
    if (!isLoggedIn()) return;
    loading.value = true;
    error.value = null;
    try {
      const result = await fetcher();
      data.value = result;
      onData?.(result);
    } catch (err) {
      error.value = err;
      onError?.(err);
    } finally {
      loading.value = false;
    }
  }

  const { pause, resume, isActive } = useIntervalFn(execute, interval, {
    immediate: false
  });

  // 根据登录状态控制轮询启停
  watch(
    () => userStore.username,
    (username, _old) => {
      if (username) {
        if (immediate) execute();
        resume();
      } else {
        pause();
        data.value = undefined;
        error.value = null;
      }
    },
    { immediate: true }
  );

  // 组件卸载时停止轮询
  onBeforeUnmount(() => {
    pause();
  });

  return {
    data,
    loading,
    error,
    isActive,
    /** 手动执行一次请求 */
    execute
  };
}
