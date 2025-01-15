import { FC } from "react";

import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

import { PieContainer, Wrapper } from "./styles";

export const Pie: FC = () => {
  return (
    <Wrapper>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <PieContainer>
        <PieChart />
      </PieContainer>
    </Wrapper>
  );
};
