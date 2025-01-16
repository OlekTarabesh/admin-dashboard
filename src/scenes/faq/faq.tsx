import { FC } from "react";
import { Box } from "@mui/material";

import Header from "../../components/Header";
import MyAccordion from "./MyAccordion";

import { faqDB } from "./config";

const FAQ: FC = () => {
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box sx={{ mt: "20px" }}>
        {faqDB.map((item, i) => {
          return <MyAccordion key={i} data={item} />;
        })}
      </Box>
    </Box>
  );
};

export default FAQ;
