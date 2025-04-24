import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { LogsPage } from "../app/pages/LogsPage";
import { MainPage } from "../app/pages/MainPage";

export enum RoutePathsEnum {
  MAIN = "/",
  LOGS = "/logs",
}

export const ROUTE_CONFIG = createBrowserRouter([
  {
    path: RoutePathsEnum.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RoutePathsEnum.LOGS,
        element: <LogsPage />,
      },
    ],
  },
]);
