import App2025 from "@/2025/App";
import ResourcePreloader from "@/2025/components/resource-preloader";
import CallForSpeakers from "@/2025/pages/call-for-speakers";
import TermsAndCondition from "@/2025/pages/terms";
import App from "@/App";
import ErrorBoundary from "@/components/error-boundary";
import NotFoundPage from "@/components/not-found-page";
import RouteErrorPage from "@/components/route-error-page";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const siteRoutes = [
  { index: true, element: <App /> },
  { path: "*", element: <NotFoundPage /> },
] as const;

const siteRoutes2025 = [
  { index: true, element: <App2025 /> },
  { path: "call-for-speakers", element: <CallForSpeakers /> },
  { path: "terms-and-conditions", element: <TermsAndCondition /> },
  { path: "*", element: <NotFoundPage /> },
] as const;

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouteErrorPage />,
    children: [...siteRoutes],
  },
  {
    path: "/2025",
    errorElement: <RouteErrorPage />,
    children: [...siteRoutes2025],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ResourcePreloader />
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
