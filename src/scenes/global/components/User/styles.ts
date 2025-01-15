import { Box, styled } from "@mui/material";

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imageStyles = () => ({
  width: "100px",
  height: "100px",
  cursor: "pointer",
  borderRadius: "50%",
  objectFit: "cover",
});
