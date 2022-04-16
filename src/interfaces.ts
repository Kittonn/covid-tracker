export interface CaseAllListI {
  txn_date: string;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  new_recovered: number;
  total_recovered: number;
  update_date: string;
}

export interface todayCaseAllI {
  list: CaseAllListI[];
  status: null | "loading" | "success" | "failed";
}

export interface dataCase {
  date: string;
  cases: number;
}

export interface timelineCaseI {
  list: CaseAllListI[];
  status: null | "loading" | "success" | "failed";
  data: dataCase[];
}

export interface ProvinceCaseListI {
  name: string;
  cases: { [key: string]: number };
  id: number;
  caseCount: number;
  "cases-per-100k": number;
  deaths: { [key: string]: number };
  deathsCount: number;
  "deaths-per-100k": number;
}

export interface ProvinceCaseI {
  list: ProvinceCaseListI[];
  status: null | "loading" | "success" | "failed";
  data: {
    province: string;
    case: { [key: string]: number };
  }[];
}

export interface TestingListI {
  date: string;
  positive: number;
  tests: number;
}

export interface TestingI {
  list: TestingListI[];
  status: null | "loading" | "success" | "failed";
}

export interface NationalVaccineListI {
  date: string;
  daily_vaccinations: number;
  data_anomaly: null | string;
  first_dose: number;
  second_dose: number;
  third_dose: number;
  total_doses: number;
}

export interface NationalVaccineI {
  list: NationalVaccineListI[];
  status: null | "loading" | "success" | "failed";
}

export interface NationalVaccineManufacturerListI {
  date: string;
  AstraZeneca: number;
  AstraZeneca_rate: number;
  "Johnson & Johnson": number;
  JnJ_rate: number;
  Sinopharm: number;
  Sinopharm_rate: number;
  Sinovac: number;
  Sinovac_rate: number;
  Pfizer: number;
  Pfizer_rate: number;
}

export interface NationalVaccineManufacturerI {
  list: NationalVaccineManufacturerListI[];
  status: null | "loading" | "success" | "failed";
}

interface ProvinceVaccineObj {
  province: string;
  over_60_1st_dose: number;
  total_1st_dose: number;
  total_2nd_dose: number;
  total_3rd_dose: number;
}

export interface ProvinceVaccineListI {
  [key: string]: string | any;
}

export interface ProvinceVaccineI {
  list: ProvinceVaccineListI;
  status: null | "loading" | "success" | "failed";
  data: ProvinceVaccineObj[];
}

export interface ProvincceVaccineManufacturerObj {
  total_doses: number;
  province: string;
  AstraZeneca: number;
  Pfizer: number;
  Sinovac: number;
  Sinopharm: number;
  Moderna: "number";
  "Johnson & Johnson": number;
}

export interface ProvinceVaccineManufacturerListI {
  [key: string]: string | any;
}

export interface ProvinceVaccineManufacturerI {
  list: ProvinceVaccineManufacturerListI;
  status: null | "loading" | "success" | "failed";
  data: ProvincceVaccineManufacturerObj[];
}
