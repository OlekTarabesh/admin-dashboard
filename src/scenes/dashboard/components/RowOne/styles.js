import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    grid-column: span 6;
  }
  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;
