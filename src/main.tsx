import App from "@/App";
import ResourcePreloader from "@/components/resource-preloader";
import "@/index.css";
import TermsAndCondition from "@/pages/terms";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CallForSpeakers from "./pages/call-for-speakers";

const siteRoutes = [
  { index: true, element: <App /> },
  { path: "call-for-speakers", element: <CallForSpeakers /> },
  { path: "terms-and-conditions", element: <TermsAndCondition /> },
] as const;

const router = createBrowserRouter([
  {
    path: "/",
    children: [...siteRoutes],
  },
  {
    path: "/2025",
    children: [...siteRoutes],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ResourcePreloader />
    <RouterProvider router={router} />
  </StrictMode>
);
