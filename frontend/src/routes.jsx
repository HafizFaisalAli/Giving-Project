import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Home,
  ZakatPage,
  TithingPage,
  About,
  OrganizationPage,
  DonateZakat,
  DonateTithe,
  ZakatCalculator,
  TitheCalculator,
  PayNow,
  Admin,
} from "./pages/PagesExport";
import DefaultLayout from "./Layouts/DefaultLayout";
import Login from "./pages/auth/Login";
import AdminLayout from "./Layouts/AdminLayout";
import AuthLayout from "./Layouts/AuthLayout";
import NotFound from "./components/NotFound";
import DonationDone from "./pages/DonationDone";
import TotalDonate from "./pages/admin/TotalDonation";
import DonationZakat from "./pages/admin/DonationZakat";
import DonationTithe from "./pages/admin/DonationTithe";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/zakat",
        element: <ZakatPage />,
      },
      {
        path: "/tithing",
        element: <TithingPage />,
      },
      {
        path: "/about",
        element: <About />,
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
        path: "/zakatcalculator",
        element: <ZakatCalculator />,
      },
      {
        path: "/tithecalculator",
        element: <TitheCalculator />,
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
      {
        path: "donatezakat",
        element: <DonationZakat />,
      },
      {
        path: "donatetithe",
        element: <DonationTithe />,
      },
      {
        path: "total",
        element: <TotalDonate />,
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
    ],
  },
  {
    path: "/donatesuccess",
    element: <DonationDone />,
  },
]);

export default routes;
