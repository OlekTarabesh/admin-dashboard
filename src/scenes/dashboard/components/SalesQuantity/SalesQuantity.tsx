import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../../../theme";
import BarChart from "../../../../components/BarChart";
import { Wrapper } from "./styles";

const SalesQuantity: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Wrapper
      sx={{
        gridColumn: "span 4",
        gridRow: "span 2",
        backgroundColor: `${colors.primary[400]}`,
      }}
    >
      <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>
        Sales Quantity
      </Typography>
      <Box height="250px" mt="-20px">
        <BarChart isDashboard={true} />
      </Box>
    </Wrapper>
  );
};

export default SalesQuantity;
