import { createHashRouter } from "react-router-dom";
import ErrorPage from "../routes/ErrorPage";
import Layout from "../routes/Layout";
import HomePage from "../routes/HomePage";
import CountryDetailsPage from "../routes/CountryDetailsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "country/:countryCode",
        element: <CountryDetailsPage />,
      },
    ],
  },
]);

export default router;
