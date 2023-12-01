export const boxStyles = (colors) => {
  return {
    margin: "40px 0 0 0",
    height: "75vh",
    "& .MuiDataGrid-root": {
      border: "none",
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
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    "& .MuiDataGrid-menuIcon, .MuiDataGrid-iconButtonContainer": {
      "@media (max-width: 992px)": {
        display: "none !important",
      },
    },
  };
};
