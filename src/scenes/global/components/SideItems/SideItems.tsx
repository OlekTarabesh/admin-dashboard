import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import Item from "../../../../components/item/item";

import { tokens } from "../../../../theme";
import { ISideItemsProps } from "./sideItems.types";

const SideItems: FC<ISideItemsProps> = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Item title={data.title} to={data.to} icon={data.icon} />
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      ></Typography>
    </Box>
  );
};

export default SideItems;
