import { ReactNode } from "react";

export interface ISidebarItem {
  title: string;
  to: string;
  icon: ReactNode;
}

export interface ISidebarData {
  dashboard: ISidebarItem[];
  data: ISidebarItem[];
  pages: ISidebarItem[];
  charts: ISidebarItem[];
}
