import { Box, styled } from "@mui/material";

export const Content = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 140px;
  flex-wrap: wrap;
  gap: 20px;
`;
