import { Box } from "@mui/material";

import {
  Compaing,
  DashboardHeader,
  GeographyBasedTraffic,
  RevenueGenerated,
  RowOne,
  SalesQuantity,
  Transactions,
} from "./components";

import { mockTransactions } from "../../data/mockData";
import { row1 } from "./db";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <DashboardHeader />
      {/* GRID AND CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {row1.map((bar, i) => (
          <RowOne
            key={i}
            title={bar.title}
            subtitle={bar.subtitle}
            progress={bar.progress}
            increase={bar.increase}
          />
        ))}
        {/* ROW 2 */}
        <RevenueGenerated />
        <Transactions mockTransactions={mockTransactions} />
        {/* ROW 3 */}
        <Compaing />
        <SalesQuantity />
        <GeographyBasedTraffic />
      </Box>
    </Box>
  );
};

export default Dashboard;
