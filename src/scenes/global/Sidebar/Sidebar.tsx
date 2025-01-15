import { FC, useState } from "react";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useTheme } from "@mui/material";

import { tokens } from "../../../theme";
import { sidebarDB } from "../config";
import { MenuSidebar } from "../components";

const Sidebarr: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

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
      />
    </Sidebar>
  );
};

export default Sidebarr;
