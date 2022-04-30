import axios from "axios";
import { url_national_vaccine } from "./link";

export const national_vaccine = async () => {
  return axios.get(url_national_vaccine).then((res) => res.data);
};
