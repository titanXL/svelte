<script lang="ts">
  import { onMount } from "svelte";

  import { createStore, RemoveToast } from "./stores/toasts";
  import Toast from "./Toast.svelte";

  const toasts = createStore();

  const onClick: RemoveToast = (id) => toasts.remove(id);

  onMount(() => {
    setTimeout(() => {
      toasts.add({
        id: "5",
        title: "Test",
        message: "Testing stuff",
        type: "success",
      });
    }, 2000);
  });
</script>

<main>
  <div class="w-4/12 fixed top-2 right-2 flex flex-col space-y-2">
    {#each $toasts as toast (toast.id)}
      <Toast {toast} {onClick} />
    {/each}
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
