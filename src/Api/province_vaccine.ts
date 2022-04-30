import { url_province_vaccine } from "./link";
import axios from "axios";

export const province_vaccine = async () => {
  return axios.get(url_province_vaccine).then((res) => res.data);
};
