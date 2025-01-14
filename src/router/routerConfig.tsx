import { RouteProps } from "react-router-dom";
import {
  Dashboard,
  Team,
  Contacts,
  Invoices,
  Form,
  Calendar,
  FAQ,
  Bar,
  Pie,
  Line,
  Geography,
} from "../scenes";

export const routes: RouteProps[] = [
  { path: "/", element: <Dashboard /> },
  { path: "/team", element: <Team /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/invoices", element: <Invoices /> },
  { path: "/form", element: <Form /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/bar", element: <Bar /> },
  { path: "/pie", element: <Pie /> },
  { path: "/line", element: <Line /> },
  { path: "/geography", element: <Geography /> },
];
