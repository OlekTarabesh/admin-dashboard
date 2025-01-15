import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { Typography, useTheme } from "@mui/material";

import { Menu, MenuItem } from "react-pro-sidebar";

import { IItemsProps } from "./item.types";
import { tokens } from "../../theme";
import { menuItemRootStyles } from "./styles";

const Item: FC<IItemsProps> = ({ title, to, icon }) => {
  const { pathname } = useLocation();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isActive = pathname === to;

  return (
    <Menu>
      <MenuItem
        component={<Link to={to}></Link>}
        active={isActive}
        style={{
          color: colors.grey[100],
        }}
        icon={icon}
        rootStyles={menuItemRootStyles}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Menu>
  );
};

export default Item;
