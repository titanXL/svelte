export type ToastMessageTypes = "error" | "success" | "warning";

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastMessageTypes;
}
