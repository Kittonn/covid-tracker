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
