import { Box } from "@mui/material";

import Header from "../../components/Header";

import { faqDB } from "./faq.db";
import MyAccordion from "./MyAccordion";

export const FAQ = () => {
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
