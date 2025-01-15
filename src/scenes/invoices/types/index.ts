import { IRenderCellDataGrid } from "../../../globalTypes";

export interface IInvoiceRow {
  id: number;
  cost: string;
  date: string;
  email: string;
  name: string;
  phone: string;
}

export interface IInvoiceColumns extends IRenderCellDataGrid {
  renderCell?: (params: { row: IInvoiceRow }) => JSX.Element;
}
