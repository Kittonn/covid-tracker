import axios from "axios";
import { url_timeline_cases } from "./link";

export const timeline_case = async () => {
  return axios.get(url_timeline_cases).then((res) => res.data);
};
