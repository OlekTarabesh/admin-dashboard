import { Box, Typography } from "@mui/material";
import React from "react";
import ProgressCircle from "../../../components/ProgressCircle";

import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";

export const Compaing = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
    >
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
    </Box>
  );
};
