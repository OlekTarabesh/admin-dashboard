import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { OneWrapper } from "./styles";

export const OneTransaction = ({ transaction }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <OneWrapper
      key={transaction.txId}
      sx={{
        borderBottom: `4px solid ${colors.primary[500]}`,
      }}
    >
      <Box>
        <Typography
          color={colors.greenAccent[500]}
          variant="h5"
          fontWeight="600"
        >
          {transaction.txId}
        </Typography>

        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          {transaction.user}
        </Typography>
      </Box>
      <Box color={colors.grey[100]}>{transaction.date}</Box>
      <Box
        backgroundColor={colors.greenAccent[500]}
        p="5px 10px"
        borderRadius="4px"
      >
        ${transaction.cost}
      </Box>
    </OneWrapper>
  );
};
