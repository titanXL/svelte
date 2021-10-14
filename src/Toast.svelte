<script lang="ts">
  import { onMount } from "svelte";

  import { fly, fade } from "svelte/transition";

  import type { RemoveToast } from "./stores/toasts";

  import type { ToastMessage, ToastMessageTypes } from "./types";

  export let toast: ToastMessage;
  export let onClick: RemoveToast;

  let width;

  const colorsMap: Record<ToastMessageTypes, string> = {
    success: "green",
    error: "red",
    warning: "yellow",
  };

  const borderColor = `border-${colorsMap[toast.type]}-300`;

  const makeClassName = (type: ToastMessageTypes) => {
    switch (type) {
      case "success": {
        return "toast toast--success";
      }
      case "error": {
        return "toast toast--error";
      }
      case "warning": {
        return "toast toast--warning";
      }
      default:
        throw new Error("Unsupported toast type");
    }
  };

  const className = makeClassName(toast.type);

  onMount(() => {
    console.log(width);
  });
</script>

<div
  bind:clientWidth={width}
  in:fly={{ duration: 800, x: width }}
  out:fade
  on:click={() => onClick(toast.id)}
  class={className}
>
  <div class="flex flex-col font-roboto ml-2">
    <h4 class="font-semibold text-gray-600 tracking-wider">{toast.title}</h4>
    <p class="font-normal text-sm text-gray-400">{toast.message}</p>
  </div>
</div>

<style lang="postcss">
  .toast {
    @apply border-l-8 rounded-sm shadow-md p-2;
  }
  .toast--success {
    @apply border-green-300;
  }
  .toast--warning {
    @apply border-yellow-300;
  }
  .toast--error {
    @apply border-red-300;
  }
</style>
