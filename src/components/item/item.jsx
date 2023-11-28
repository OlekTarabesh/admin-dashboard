import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import { Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, selectedHandler }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Menu>
      <MenuItem
        component={<Link to={to}></Link>}
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => selectedHandler(title)}
        icon={icon}
        /* Here👇🏻 is a new styling of MUI library. Check it out! */
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
        <Typography>{title}</Typography>
      </MenuItem>
    </Menu>
  );
};

export default Item;
