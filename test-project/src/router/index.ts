import Main from "../pages/Main";
import Error from "../pages/Page404/Page404";

export const routes = [
  { path: "/", component: Main, exact: true },
  { path: "*", component: Error, exact: true },
];
