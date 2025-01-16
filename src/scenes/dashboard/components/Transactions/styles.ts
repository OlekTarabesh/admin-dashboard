import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  grid-column: span 4;
  grid-row: span 2;
  overflow: auto;
  @media (max-width: 992px) {
    grid-column: span 12;
  }
`;

export const Title = styled(Box)`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OneWrapper = styled(Box)`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
