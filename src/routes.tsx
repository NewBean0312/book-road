import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const MainPage = lazy(() => import("./pages/MainPage"));
const MembershipPage = lazy(() => import("./pages/login/MembershipPage"));


export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/login/membership", element: <MembershipPage /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/login/membership" },
];