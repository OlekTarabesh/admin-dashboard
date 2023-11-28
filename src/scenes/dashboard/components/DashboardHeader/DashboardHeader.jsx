import { Box, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Header from "../../../../components/Header";

import { tokens } from "../../../../theme";
import { ButtonStyled, Wrapper } from "./styles";

export const DashboardHeader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Wrapper>
      <Header title="DASHBOARD" subtitle="Wellcome to your dashboard" />
      <Box>
        <ButtonStyled
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reeports
        </ButtonStyled>
      </Box>
    </Wrapper>
  );
};
