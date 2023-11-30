import React from "react";
import { SidebarWrapper } from "../styles";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import { tokens } from "../../../theme";

const CalendarSidebar = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <SidebarWrapper backgroundColor={`${colors.primary[400]}`}>
      <Typography variant="h5">Events</Typography>
      <List>
        {data.map((event) => (
          <ListItem
            key={event.id}
            sx={{
              backgroundColor: colors.greenAccent[500],
              margin: "10px 0",
              borderRadius: "2px",
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={
                <Typography>
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </SidebarWrapper>
  );
};

export default CalendarSidebar;
