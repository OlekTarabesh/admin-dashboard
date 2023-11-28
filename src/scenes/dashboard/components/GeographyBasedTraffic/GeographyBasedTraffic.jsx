import { Box, Typography, useTheme } from "@mui/material";

import GeographyChart from "../../../../components/GeographyChart";

import { tokens } from "../../../../theme";
import { Wrapper } from "./styles";

export const GeographyBasedTraffic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Wrapper
      sx={{
        gridColumn: "span 4",
        gridRow: "span 2",
        backgroundColor: `${colors.primary[400]}`,
        p: "30px",
      }}
    >
      <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
        Geography Based Traffic
      </Typography>
      <Box height="200px">
        <GeographyChart isDashboard={true} />
      </Box>
    </Wrapper>
  );
};
