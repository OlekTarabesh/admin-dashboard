import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";

import { OneTransaction } from "./OneTransaction";
import { Title, Wrapper } from "./styles";

export const Transactions = ({ mockTransactions }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Wrapper sx={{ backgroundColor: colors.primary[400] }}>
      <Title
        sx={{
          borderBottom: `4px solid ${colors.primary[500]}`,
          colors: colors.grey[100],
        }}
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Recent Transactions
        </Typography>
      </Title>

      {mockTransactions.map((transaction, i) => (
        <OneTransaction key={i} transaction={transaction} />
      ))}
    </Wrapper>
  );
};
