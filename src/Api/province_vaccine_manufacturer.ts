import { url_province_vaccine_manufacturer } from "./link";
import axios from "axios";

export const province_vaccine_manufacturer = async () => {
  return axios.get(url_province_vaccine_manufacturer).then((res) => res.data);
};
