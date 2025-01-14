import { Box, styled } from "@mui/material";
import { IThemeColorTokens } from "../../global-types";

export const Wrapper = styled(Box)`
  width: 60%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

export const boxStyles = (colors: IThemeColorTokens) => {
  return {
    margin: "40px 0 0 0",
    height: "75vh",
    "@media (max-width: 1110px)": {
      "& .MuiTypography-root": {
        display: "none !important",
      },
    },
    "& .MuiDataGrid-menuIcon": {
      "@media (max-width: 768px)": {
        display: "none !important",
      },
      border: "none !important",
    },
    "& .MuiDataGrid-root": {
      border: "none !important",
    },
    "& .MuiDataGrid-iconButtonContainer": {
      display: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-colomn--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
      borderBottom: "none",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: colors.blueAccent[700],
      borderTop: "none",
    },
  };
};
