import { toast } from "react-toastify";

class ToastTool {
  public success(message: string): void {
    toast.success(message);
  }

  public error(message: string): void {
    toast.error(message);
  }

  public warning(message: string): void {
    toast.warn(message);
  }
}

export const toastTool = new ToastTool();
