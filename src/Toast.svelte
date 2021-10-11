<script lang="ts">
  import type { ToastMessage } from "./types";

  export let toast: ToastMessage;
</script>

<div>
  <div>
    <p>{toast.message}</p>
  </div>
</div>
