import { useState } from "react";

import { DateSelectArg, EventApi, EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Box } from "@mui/material";

import Header from "../../components/Header";
import CalendarSidebar from "./calendar-sidebar/CalendarSidebar";
import { CalendarStyled, Content, Wrapper } from "./styles";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  //this will trigger prompt of what type of event you want to add
  const handleDateClick = (selected: DateSelectArg) => {
    console.log(selected);
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  //this for removing event
  const handelEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Wrapper>
      <Box width="auto">
        <Header title="CALENDAR" subtitle="Fill Calendar Interactive Page" />
      </Box>
      <Content>
        <CalendarSidebar data={currentEvents} />
        <CalendarStyled>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handelEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-08-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2023-08-28",
              },
            ]}
          />
        </CalendarStyled>
      </Content>
    </Wrapper>
  );
};

export default Calendar;
