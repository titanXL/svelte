<script lang="ts">
  import { createStore, RemoveToast } from "./stores/toasts";
  import Toast from "./Toast.svelte";
  import type { ToastMessage } from "./types";

  const toasts = createStore();

  const onClick: RemoveToast = (id) => toasts.remove(id);
</script>

<main>
  {#each $toasts as toast (toast.id)}
    <Toast {toast} {onClick} />
  {/each}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
