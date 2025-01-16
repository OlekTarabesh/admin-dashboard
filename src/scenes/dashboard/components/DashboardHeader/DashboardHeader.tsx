import { FC } from "react";
import { Box, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Header from "../../../../components/Header";

import { tokens } from "../../../../theme";
import { ButtonStyled, Wrapper } from "./styles";

const DashboardHeader: FC = () => {
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

export default DashboardHeader;
