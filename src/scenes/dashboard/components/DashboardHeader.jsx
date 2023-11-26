import { useTheme } from "@emotion/react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { Box, Button } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";

export const DashboardHeader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      mb="25px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Header title="DASHBOARD" subtitle="Wellcome to your dashboard" />
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reeports
        </Button>
      </Box>
    </Box>
  );
};
