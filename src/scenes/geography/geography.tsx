import { FC } from "react";
import { Box, useTheme } from "@mui/material";

import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

import { tokens } from "../../theme";

const Geography: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ margin: "20px" }}>
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        sx={{
          height: "75vh",
          border: `1px solid ${colors.grey[100]}`,
          borderRadius: "4px",
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
