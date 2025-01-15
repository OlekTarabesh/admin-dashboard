import { ISidebarData } from "./types";

export interface IMenuSidebarProps {
  data: ISidebarData;
  isCollapsed: boolean;
  collapsedHandler: () => void;
}
