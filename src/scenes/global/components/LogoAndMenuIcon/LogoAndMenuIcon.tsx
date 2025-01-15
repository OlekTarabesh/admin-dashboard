import { FC } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { tokens } from "../../../../theme";
import { ILogoAndMenuIconProps } from "./logoAndMenuIcon.types";

const LogoAndMenuIcon: FC<ILogoAndMenuIconProps> = ({
  collapsedHandler,
  isCollapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Menu>
      <MenuItem
        onClick={collapsedHandler}
        icon={!isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={{
          margin: "10px 0 20px 0",
          color: colors.grey[100],
        }}
        rootStyles={{
          a: {
            [`&.ps-menu-button:hover`]: {
              color: "#868dfb !important",
              backgroundColor: "transparent !important",
            },
            [`&.ps-menu-button.ps-active`]: {
              color: "#6870fa !important",
              backgroundColor: "transparent !important",
            },
          },
        }}
      >
        {isCollapsed && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              ADMINIS
            </Typography>
            <IconButton onClick={collapsedHandler}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </MenuItem>
    </Menu>
  );
};

export default LogoAndMenuIcon;
