import { FC } from "react";
import { Box } from "@mui/material";

import Header from "../../components/Header";
import { BarChart } from "../../components";

const Bar: FC = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="80vh">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;
