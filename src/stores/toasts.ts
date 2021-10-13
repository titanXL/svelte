import { writable } from "svelte/store";

import type { ToastMessage } from "../types";

const INITIAL_STATE: ToastMessage[] = [
  {
    id: "1",
    message: "Anyone with access can view you invited visitors",
    type: "success",
    title: "Success",
  },
  {
    id: "2",
    title: "Warning",
    type: "warning",
    message: "Anyone with access can view you invited visitors",
  },
  {
    id: "3",
    title: "Error",
    type: "error",
    message: "Anyone with access can view you invited visitors",
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
