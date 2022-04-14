import axios from "axios";
import { url_province_cases } from "./link";

export const province_case = async () => {
  return axios.get(url_province_cases).then((res) => res.data);
};
