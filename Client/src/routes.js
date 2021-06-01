import HomePage from "./components/pages/HomePage";
import NodeTypeList from "./components/pages/NodeTypeList";
import NotFoundPage from "./components/pages/NotFoundPage";

// component for nodeTypes
import Basic from "./components/nodetypes/Basic";
import Invoice from "./components/nodetypes/Invoice";

export default [
  {
    path: "/home/",
    component: HomePage,
  },
  {
    path: "/nodetype/",
    component: NodeTypeList,
  },
  {
    path: "/nodetype/basic/",
    component: Basic,
  },
  {
    path: "/nodetype/invoice/",
    component: Invoice,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];
