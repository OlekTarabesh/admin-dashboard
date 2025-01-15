import { CSSProperties, FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../../../../theme";
import { ImageContainer, imageStyles } from "./styles";

const User: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <ImageContainer>
        <img
          src={"../../assets/user.jpeg"}
          alt="profile-user"
          style={imageStyles() as CSSProperties}
        />
      </ImageContainer>
      <Box textAlign="center">
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{
            m: "10px 0 0 0",
          }}
        >
          Oleksandr Tarabesh
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default User;
