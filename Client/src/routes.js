import HomePage from "./components/pages/HomePage";
import NodeTypeList from "./components/pages/NodeTypeList";
import NotFoundPage from "./components/pages/NotFoundPage";

// component for nodeTypes
import Basic from "./components/nodetypes/Basic";
import Invoice from "./components/nodetypes/Invoice";
import Poll from "./components/nodetypes/Poll";
export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/notetype/",
    component: NodeTypeList,
  },
  {
    path: "/notetype/basic/",
    component: Basic,
  },
  {
    path: "/notetype/invoice/",
    component: Invoice,
  },
  {
    path: "/notetype/poll/",
    component: Poll,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];
