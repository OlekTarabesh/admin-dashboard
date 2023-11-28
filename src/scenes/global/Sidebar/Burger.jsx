import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import { tokens } from "../../../theme";
import { MenuSidebar } from "./MenuSidebar";
import { sidebarDB } from "./db";

const drawerWidth = "100%";

const Burger = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const selectedHandler = (title) => {
    setSelected(title);
    setIsCollapsed(!isCollapsed);
  };

  const collapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        display: "flex",
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      }}
    >
      <MenuIcon onClick={collapsedHandler} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            padding: "16px",
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: `${colors.primary[400]}`,
          },
        }}
        variant="persistent"
        anchor="left"
        open={isCollapsed}
      >
        <MenuSidebar
          data={sidebarDB}
          isCollapsed={isCollapsed}
          collapsedHandler={collapsedHandler}
          selected={selected}
          selectedHandler={selectedHandler}
        />
      </Drawer>
    </Box>
  );
};

export default Burger;
