export const boxStyles = (colors) => {
  return {
    margin: "40px 0 0 0",
    height: "75vh",
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none !important",
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
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors.grey[100]} !important`,
    },
    "& .MuiDataGrid-menuIcon, .MuiButtonBase-root": {
      "@media (max-width: 1024px)": {
        display: "none !important",
      },
    },
  };
};
