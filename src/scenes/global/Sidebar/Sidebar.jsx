import { useState } from "react";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useTheme } from "@mui/material";

import { MenuSidebar } from "./MenuSidebar";

import { tokens } from "../../../theme";
import { sidebarDB } from "./db";

export const Sidebarr = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const selectedHandler = (title) => {
    setSelected(title);
  };

  const collapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Sidebar
      collapsed={!isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          minHeight: "100vh",
          background: `${colors.primary[400]} !important`,
        },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      }}
    >
      <MenuSidebar
        data={sidebarDB}
        isCollapsed={isCollapsed}
        collapsedHandler={collapsedHandler}
        selected={selected}
        selectedHandler={selectedHandler}
      />
    </Sidebar>
  );
};
