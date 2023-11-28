import { Box, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import LineChart from "../../../../components/LineChart";
import { tokens } from "../../../../theme";
import { Wrapper } from "./styles";

export const RevenueGenerated = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Wrapper backgroundColor={colors.primary[400]}>
      <Box
        mt="25px"
        p="0 30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Revenue Generated
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            $54,098,21
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlinedIcon
              sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="250px" mt="-20px">
        <LineChart isDashboard={true} />
      </Box>
    </Wrapper>
  );
};
