import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../../../theme";

export const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src={"../../assets/user.jpeg"}
          alt="profile-user"
          width="100px"
          height="100px"
          style={{
            cursor: "pointer",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
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
