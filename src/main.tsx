import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@/index.css";

import App from "@/App";
import TermsAndCondition from "@/pages/terms";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndCondition />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
