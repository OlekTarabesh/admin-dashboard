export interface IMockDataInvoices {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}

export interface IMockTransactions {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export interface IMockDataTeam {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export interface IMockDataContracts {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface IMockPieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface IMockLineXYData {
  x: string;
  y: number;
}

export interface IMockLineData {
  id: string;
  color: string;
  data: IMockLineXYData[];
}

export interface IMockGeographyData {
  id: string;
  value: number;
}
