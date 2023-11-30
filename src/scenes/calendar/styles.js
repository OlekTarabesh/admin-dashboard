import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const SidebarWrapper = styled(Box)`
  padding: 15px;
  flex: 1 1 20%;

  border-radius: 4px;
  height: 385px;
  overflow: overlay;
  @media (max-width: 992px) {
    order: 2;
  }
`;

export const CalendarStyled = styled(Box)`
  flex: 1 1 100%;
  margin-left: 15px;
  & .fc-header-toolbar {
    flex-wrap: wrap;
    gap: 10px;
  }
  & .fc-toolbar-chunk {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;
