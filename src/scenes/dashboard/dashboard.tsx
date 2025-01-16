import { FC } from "react";
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
import { row1 } from "./config";
import { Content } from "./styles";

const Dashboard: FC = () => {
  return (
    <Box m="20px">
      <DashboardHeader />
      <Content>
        {row1.map((bar) => (
          <RowOne
            key={bar.id}
            title={bar.title}
            subtitle={bar.subtitle}
            progress={bar.progress}
            increase={bar.increase}
          />
        ))}
        <RevenueGenerated />
        <Transactions mockTransactions={mockTransactions} />
        <Compaing />
        <SalesQuantity />
        <GeographyBasedTraffic />
      </Content>
    </Box>
  );
};

export default Dashboard;
