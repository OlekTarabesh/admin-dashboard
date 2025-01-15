import { FC } from "react";
import { Box } from "@mui/material";
import { Menu } from "react-pro-sidebar";

import { LogoAndMenuIcon } from "../LogoAndMenuIcon";
import { User } from "../User";
import { SideItems } from "../SideItems";
import { IMenuSidebarProps } from "./menuSidebar.types";

const MenuSidebar: FC<IMenuSidebarProps> = ({
  data,
  isCollapsed,
  collapsedHandler,
}) => {
  return (
    <Menu
      rootStyles={{
        div: {
          [`& .MuiBox-root.css-1l8icbj`]: {
            padding: "5px 10px 5px 12px !important",
          },
          li: {
            [`& .ps-menu-button-root:hover`]: {
              padding: "5px 35px 5px 20px !important",
            },
          },
        },
      }}
    >
      <LogoAndMenuIcon
        isCollapsed={isCollapsed}
        collapsedHandler={collapsedHandler}
      />
      {isCollapsed && <User />}
      <Box paddingLeft={isCollapsed ? "10%" : undefined}>
        {data.dashboard.map((item, i) => (
          <SideItems key={i} data={item} />
        ))}
        {data.data.map((item, i) => (
          <SideItems key={i} data={item} />
        ))}
        {data.pages.map((item, i) => (
          <SideItems key={i} data={item} />
        ))}
        {data.charts.map((item, i) => (
          <SideItems key={i} data={item} />
        ))}
      </Box>
    </Menu>
  );
};

export default MenuSidebar;
