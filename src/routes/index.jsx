import Layout from "../Layout";
import Home from "./Home";

const routes = () => {
  return [
    {
      component: Layout,
      routes: [
        {
          path: "/",
          exact: true,
          component: Home,
        },
      ],
    },
  ];
};

export default routes;
