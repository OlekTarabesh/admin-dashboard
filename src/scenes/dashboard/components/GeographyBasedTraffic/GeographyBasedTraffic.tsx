import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import GeographyChart from "../../../../components/GeographyChart";

import { tokens } from "../../../../theme";
import { Wrapper } from "./styles";

const GeographyBasedTraffic: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Wrapper sx={{ backgroundColor: `${colors.primary[400]}` }}>
      <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
        Geography Based Traffic
      </Typography>
      <Box height="200px">
        <GeographyChart isDashboard={true} />
      </Box>
    </Wrapper>
  );
};

export default GeographyBasedTraffic;
