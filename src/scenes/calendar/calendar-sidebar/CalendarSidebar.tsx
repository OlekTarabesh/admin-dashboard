import React, { FC } from "react";

import { formatDate } from "@fullcalendar/core";

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import { tokens } from "../../../theme";
import { SidebarWrapper } from "../styles";
import { ICalendarSidebarProps } from "./calendarSidebar.types";

const CalendarSidebar: FC<ICalendarSidebarProps> = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <SidebarWrapper sx={{ backgroundColor: `${colors.primary[400]}` }}>
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
                  {formatDate(event.start as Date, {
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
