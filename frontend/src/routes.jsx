import { createBrowserRouter } from "react-router-dom";
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
} from "./pages/PagesExport";
import DefaultLayout from "./Layouts/DefaultLayout";

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
]);

export default routes;
