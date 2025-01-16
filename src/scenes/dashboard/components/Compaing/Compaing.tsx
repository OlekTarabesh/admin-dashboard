import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import ProgressCircle from "../../../../components/ProgressCircle";

import { tokens } from "../../../../theme";
import { Wrapper } from "./styles";

const Compaing: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Wrapper sx={{ backgroundColor: `${colors.primary[400]}` }}>
      <Typography variant="h5" fontWeight="600">
        Compaign
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
        <ProgressCircle size="125" />
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
          sx={{ mt: "15px" }}
        >
          $49,463 revenue generated
        </Typography>
        <Typography>Includes extra misc expenditures and costs</Typography>
      </Box>
    </Wrapper>
  );
};

export default Compaing;
