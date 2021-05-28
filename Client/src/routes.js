import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";

export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];
