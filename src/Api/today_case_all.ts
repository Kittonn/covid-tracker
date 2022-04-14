import axios from "axios";
import { url_today_cases_all } from "./link";

export const todayCaseAllApi = async () => {
  return axios.get(url_today_cases_all).then((res) => res.data);
};
