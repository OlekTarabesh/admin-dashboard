import { PaletteMode } from "@mui/material";

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
