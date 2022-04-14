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
