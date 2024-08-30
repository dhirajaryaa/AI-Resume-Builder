import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Home, Dashboard, SignIn, EditResume } from "./pages";
import { Provider } from "react-redux";
import { Store } from "./redux/Store.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: <EditResume />,
      },
    ],
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  // </StrictMode>
);
