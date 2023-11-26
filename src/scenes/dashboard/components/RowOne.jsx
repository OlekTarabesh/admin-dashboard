import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import StatBox from "../../../components/StatBox";

import { tokens } from "../../../theme";

export const RowOne = ({ title, subtitle, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        icon={
          <EmailIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
  );
};
