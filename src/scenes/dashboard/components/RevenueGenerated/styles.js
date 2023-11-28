import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  grid-column: span 8;
  grid-row: span 2;
  @media (max-width: 992px) {
    grid-column: span 12;
  }
`;
