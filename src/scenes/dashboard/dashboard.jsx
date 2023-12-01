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

import { Content } from "./styles";
import { mockTransactions } from "../../data/mockData";
import { row1 } from "./db";

export const Dashboard = () => {
  return (
    <Box m="20px">
      <DashboardHeader />
      <Content>
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
      </Content>
    </Box>
  );
};
