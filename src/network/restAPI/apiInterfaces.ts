export interface CustomerData {
  id: string;
  salutation: string;
  initials: string;
  firstname: string;
  firstname_ascii: string;
  gender: string;
  firstname_country_rank: string;
  firstname_country_frequency: string;
  lastname: string;
  lastname_ascii: string;
  lastname_country_rank: string;
  lastname_country_frequency: string;
  email: string;
  password: string;
  country_code: string;
  country_code_alpha: string;
  country_name: string;
  primary_language_code: string;
  primary_language: string;
  phone_Number: string;
  currency: string;
  partitionKey: string;
  rowKey: string;
  timestamp: string;
  balance: number;
  eTag: object;
}
