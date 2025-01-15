import { GridColDef } from "@mui/x-data-grid";
import { IRenderCellDataGrid } from "../../../globalTypes";

type TAccess = "admin" | "manager" | "user";

interface IRow {
  id: string | number;
  name: string;
  age: number;
  phone: string;
  email: string;
  access: TAccess | string;
}

export interface IColumn extends IRenderCellDataGrid {
  renderCell?: (params: { row: IRow }) => JSX.Element;
}

export interface IColumns {
  columns: GridColDef<IRow>[];
}
