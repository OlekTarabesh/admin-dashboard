import { v1 } from "uuid";

import { IROW1 } from "../types";

export const row1: IROW1[] = [
  {
    id: v1(),
    title: "70,232",
    subtitle: "Emails Sent",
    progress: "0.75",
    increase: "+25%",
  },
  {
    id: v1(),
    title: "301,222",
    subtitle: "Sales Obtained",
    progress: "0.50",
    increase: "+55%",
  },
  {
    id: v1(),
    title: "27,987",
    subtitle: "New Clients",
    progress: "0.30",
    increase: "+5%",
  },
  {
    id: v1(),
    title: "4,765,777",
    subtitle: "Traffic Inbound",
    progress: "0.88",
    increase: "+45%",
  },
];
