import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {Home,Dashboard,SignIn}  from "./pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
      path:"/",
      element:<Home />
    },
      {
      path:"/dashboard",
      element:<Dashboard />
    },
  ]
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
