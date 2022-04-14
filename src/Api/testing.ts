import { url_testing } from "./link";
import axios from "axios";

export const testing = async () => {
  return axios.get(url_testing).then((res) => res.data);
};
