import { writable } from "svelte/store";

import type { ToastMessage } from "../types";

let toastsState: ToastMessage[] = [
  {
    id: "1",
    message: "Success",
    type: "success",
  },
  {
    id: "2",
    message: "Warning",
    type: "warning",
  },
  {
    id: "3",
    message: "Error",
    type: "error",
  },
];

export const toasts = writable(toastsState);
