import App from "@/2025/App";
import ResourcePreloader from "@/2025/components/resource-preloader";
import CallForSpeakers from "@/2025/pages/call-for-speakers";
import TermsAndCondition from "@/2025/pages/terms";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

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
