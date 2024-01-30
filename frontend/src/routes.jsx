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
import AuthLayout from "./Layouts/AuthLayout";
import NotFound from "./components/NotFound";
import DonationDone from "./pages/DonationDone";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
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
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
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
  {
    path: "/donatesuccess",
    element: <DonationDone />
  },
]);

export default routes;
