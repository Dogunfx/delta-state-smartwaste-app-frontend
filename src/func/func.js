import { toast } from "react-toastify";

export function generateToastError(error) {
  toast.error(error.response.data.message);
  const errors = error.response.data.errors;
  let timing = 300;
  errors.forEach((err) => {
    setTimeout(() => {
      toast.error(err.msg);
    }, timing);
    timing += 300;
  });
}
