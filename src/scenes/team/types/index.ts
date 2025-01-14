import { GridAlignment, GridColDef } from "@mui/x-data-grid";

type TAccess = "admin" | "manager" | "user";

interface IRow {
  id: string | number;
  name: string;
  age: number;
  phone: string;
  email: string;
  access: TAccess | string;
}

export interface IColumn {
  field: string;
  headerName?: string;
  flex?: 1;
  overflow?: string;
  cellClassName?: string;
  type?: string;
  width?: number;
  minWidth?: number;
  headerAlign?: GridAlignment;
  align?: GridAlignment;
  renderCell?: (params: { row: IRow }) => JSX.Element;
}

export interface IColumns {
  columns: GridColDef<IRow>[];
}
