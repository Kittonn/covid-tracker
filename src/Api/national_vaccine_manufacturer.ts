import axios from "axios";
import { url_national_vaccine_manufacturer } from "./link";

export const national_vaccine_manufacturer = async () => {
  return axios.get(url_national_vaccine_manufacturer).then((res) => res.data);
};
