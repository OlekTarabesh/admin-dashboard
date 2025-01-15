import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Header from "../../components/Header";

import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { IInvoiceColumns } from "./types";

import { boxStyles, Wrapper } from "./styles";

export const Invoices: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: IInvoiceColumns[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Wrapper>
      <Header title="Invoice" subtitle="List of Invoice Balances" />
      <Box sx={boxStyles(colors)}>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Wrapper>
  );
};
