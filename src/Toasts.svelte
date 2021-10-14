<script lang="ts">
  import Toast from "./Toast.svelte";
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";

  import { createStore, RemoveToast } from "./stores/toasts";

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

<div class="w-4/12 fixed top-2 right-2 flex flex-col space-y-2">
  {#each $toasts as toast (toast.id)}
    <div animate:flip={{ delay: 400 }}>
      <Toast {toast} {onClick} />
    </div>
  {/each}
</div>
