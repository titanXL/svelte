import { writable } from "svelte/store";

import type { ToastMessage } from "../types";

const INITIAL_STATE: ToastMessage[] = [
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

export const createStore = (state = INITIAL_STATE) => {
  const { update, subscribe } = writable(state);

  return {
    subscribe,
    add: (toast: ToastMessage) => update((s) => [...s, toast]),
    remove: (id: ToastMessage["id"]) =>
      update((s) => s.filter((t) => t.id !== id)),
  };
};

export type RemoveToast = ReturnType<typeof createStore>["remove"];
