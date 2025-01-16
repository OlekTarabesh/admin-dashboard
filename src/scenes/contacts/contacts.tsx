import { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Header from "../../components/Header";

import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";
import { boxStyles } from "./styles";
import { IRenderCellDataGrid } from "../../globalTypes";

const Contacts: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: IRenderCellDataGrid[] = [
    {
      field: "registrarId",
      headerName: "Registrar ID",
      minWidth: 70,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      maxWidth: 180,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 20,
      flex: 1,

      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 90,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      width: 28,
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      width: 39,
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      width: 19,
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      width: 42,
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
      />
      <Box sx={boxStyles(colors)}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          //'components' prop is deprecated. Using slots👇🏻 instead
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
