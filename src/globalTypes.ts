import { PaletteMode } from "@mui/material";
import { GridAlignment } from "@mui/x-data-grid";

type TColorToken = Record<number, string>;

export interface IThemeColorTokens {
  grey: TColorToken;
  primary: TColorToken;
  greenAccent: TColorToken;
  redAccent: TColorToken;
  blueAccent: TColorToken;
}

export type TThemeSettings = (mode: PaletteMode) => Record<string, any>;

export interface IColorModeContextType {
  toggleColorMode: () => void;
}

export interface IRenderCellDataGrid {
  field: string;
  headerName?: string;
  flex?: 1;
  overflow?: string;
  cellClassName?: string;
  type?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  headerAlign?: GridAlignment;
  align?: GridAlignment;
}
