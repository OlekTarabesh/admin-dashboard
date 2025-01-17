import { FC, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import { MenuSidebar } from "../components";

import { tokens } from "../../../theme";
import { sidebarDB } from "../config";

const drawerWidth = "100%";

const MobileSidebar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const collapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        display: "flex",
        "& ::-webkit-scrollbar": {
          display: "none",
        },
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
        />
      </Drawer>
    </Box>
  );
};

export default MobileSidebar;
