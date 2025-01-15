import { FC } from "react";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

import { LineContainer, Wrapper } from "./styles";

export const Line: FC = () => {
  return (
    <Wrapper>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <LineContainer>
        <LineChart />
      </LineContainer>
    </Wrapper>
  );
};
