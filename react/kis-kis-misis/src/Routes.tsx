import React from "react";
import { useRoutes } from "react-router-dom";
// import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Main from "pages/Main/PagePage";
import Mentor from "pages/Mentor";
import Page2 from "pages/Page2";
import Input from "pages/Input/Input";
import Otklick from "pages/Otklick/Otklick";
import Registration from "pages/Registration/Registration";

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
    {
      path: "Input",
      element: <Input />,
    },
    {
      path: "Otklick",
      element: <Otklick />,
    },
    {
      path: "Registration",
      element: <Registration />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
