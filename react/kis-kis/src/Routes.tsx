import React from "react";
import { useRoutes } from "react-router-dom";
// import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Mentor from "pages/Mentor";
import Page2 from "pages/Page2";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Main /> },
    { path: "*", element: <NotFound /> },
    {
      path: "Mentor",
      element: <Mentor />,
    },
    {
      path: "page2",
      element: <Page2 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
