<script lang="ts">
  import type { RemoveToast } from "./stores/toasts";

  import type { ToastMessage } from "./types";

  export let toast: ToastMessage;
  export let onClick: RemoveToast;
</script>

<div on:click={() => onClick(toast.id)}>
  <p>{toast.message}</p>
</div>
