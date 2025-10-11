import axios from "axios";
const URL = "http://localhost:5001/auth/sign-in";
import { toast } from "react-toastify";

export function loginUser(credentials, login) {
  axios
    .post(URL, credentials)
    .then((res) => {
      if (res.data.ok) {
        toast.success(res.data.result);
        login();
      } else {
        throw Error(res.data.error);
      }
    })
    .catch((error) => {
      toast.error(error.message);
    });
}
