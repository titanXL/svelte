export type ToastMessageTypes = "error" | "success" | "warning";

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: ToastMessageTypes;
}
