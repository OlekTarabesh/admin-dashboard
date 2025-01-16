import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  grid-column: span 4;
  grid-row: span 2;
  padding: 30px;

  @media (max-width: 992px) {
    grid-column: span 6;
  }
  @media (max-width: 600px) {
    grid-column: span 12;
  }
`;
