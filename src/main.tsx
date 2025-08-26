import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@/index.css";

import App from "@/App";
import ResourcePreloader from "@/components/resource-preloader";
import TermsAndCondition from "@/pages/terms";
import CallForSpeakers from "./pages/call-for-speakers";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/call-for-speakers",
    element: <CallForSpeakers />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndCondition />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ResourcePreloader />
    <RouterProvider router={router} />
  </StrictMode>
);
