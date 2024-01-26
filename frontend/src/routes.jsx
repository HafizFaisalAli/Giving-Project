import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Homepage,
  Zakatpage,
  Tithingpage,
  Aboutus,
  OrganizationPage,
  DonateZakat,
  DonateTithe,
  ZakatCalculator,
  TithCalculator,
  PayNow,
  Admin,
} from "./pages/PagesExport";
import DefaultLayout from "./Layouts/DefaultLayout";
import Login from "./pages/auth/Login";
import AdminLayout from "./Layouts/AdminLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/Zakatpage",
        element: <Zakatpage />,
      },
      {
        path: "/Tithingpage",
        element: <Tithingpage />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/organization",
        element: <OrganizationPage />,
      },
      {
        path: "/donate-zakat",
        element: <DonateZakat />,
      },
      {
        path: "/donate-tithe",
        element: <DonateTithe />,
      },
      {
        path: "/ZakatCalculator",
        element: <ZakatCalculator />,
      },
      {
        path: "/TithCalculator",
        element: <TithCalculator />,
      },
      {
        path: "/pay-now",
        element: <PayNow />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Admin />,
      },
    ],
  },
]);

export default routes;
