import { Box } from "@mui/material";
import { Menu } from "react-pro-sidebar";

import { LogoAndMenuIcon, SideItems, User } from "./components";

export const MenuSidebar = ({
  data,
  isCollapsed,
  collapsedHandler,
  selected,
  selectedHandler,
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
      {/* LOGO AND MENU ICON */}
      <LogoAndMenuIcon
        isCollapsed={isCollapsed}
        collapsedHandler={collapsedHandler}
      />
      {/* USER */}
      {isCollapsed && <User />}
      {/* All items of sidebar divided on grupes*/}
      <Box paddingLeft={isCollapsed ? "10%" : undefined}>
        {data.dashboard.map((item, i) => (
          <SideItems
            key={i}
            data={item}
            selected={selected}
            selectedHandler={selectedHandler}
          />
        ))}
        {data.data.map((item, i) => (
          <SideItems
            key={i}
            data={item}
            selected={selected}
            selectedHandler={selectedHandler}
          />
        ))}
        {data.pages.map((item, i) => (
          <SideItems
            key={i}
            data={item}
            selected={selected}
            selectedHandler={selectedHandler}
          />
        ))}
        {data.charts.map((item, i) => (
          <SideItems
            key={i}
            data={item}
            selected={selected}
            selectedHandler={selectedHandler}
          />
        ))}
      </Box>
    </Menu>
  );
};
