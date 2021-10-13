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

  const className =
    toast.type === "success"
      ? "border-l-8 rounded-sm border-green-300 shadow-md p-2"
      : "border-l-8 rounded-sm border-red-300 shadow-md p-2";

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
