import { ref, watch, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useIntervalFn } from "@vueuse/core";
import { useUserStoreHook } from "@/store/modules/user";
import { getToken } from "@/utils/auth";

export interface UsePollingOptions<T> {
  interval?: number;
  immediate?: boolean;
  onData?: (data: T) => void;
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

  const router = useRouter();
  const userStore = useUserStoreHook();

  function isLoggedIn(): boolean {
    const token = getToken();
    const hasToken = !!(token && token.accessToken);
    const hasUsername = !!userStore.username;

    return hasToken || hasUsername;
  }

  async function execute() {
    if (!isLoggedIn()) {
      return;
    }
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

  function startPolling() {
    if (!isLoggedIn()) {
      return;
    }
    if (immediate) execute();
    resume();
  }

  function stopPolling() {
    pause();
    data.value = undefined;
    error.value = null;
  }

  // 监听 username（响应式）
  watch(
    () => userStore.username,
    username => {
      if (username) {
        startPolling();
      } else {
        stopPolling();
      }
    },
    { immediate: true }
  );

  // 路由变化时重新检测
  watch(
    () => router.currentRoute.value.path,
    (path, oldPath) => {
      if (!isActive.value) {
        // 路由变了且轮询未启动，重新检测
        if (isLoggedIn()) {
          startPolling();
        }
      }
    }
  );

  onBeforeUnmount(() => {
    pause();
  });

  return {
    data,
    loading,
    error,
    isActive,
    execute
  };
}
