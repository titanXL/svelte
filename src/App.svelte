<script lang="ts">
  import { toasts } from "./stores/toasts";
  import Toast from "./Toast.svelte";
</script>

<main>
  {#each $toasts as toast (toast.id)}
    <Toast {toast} />
  {/each}
</main>

<style>
</style>
