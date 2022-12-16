import { toast } from "react-toastify";

export function generateToastError(error) {
  if (error.response !== undefined) {
    toast.error(error.response.data.message);
    const errors =
      error.response.data.errors !== undefined
        ? error.response.data.errors
        : [];
    let timing = 300;
    errors.forEach((err) => {
      setTimeout(() => {
        toast.error(err.msg);
      }, timing);
      timing += 300;
    });
  }
}

export function showSuccessToast(response) {
  toast.success(response.message);
}
