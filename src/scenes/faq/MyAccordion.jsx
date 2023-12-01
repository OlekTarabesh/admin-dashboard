import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const MyAccordion = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {data.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{data.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
