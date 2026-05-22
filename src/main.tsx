import App2025 from "@/2025/App";
import ResourcePreloader from "@/2025/components/resource-preloader";
import Site2025Layout from "@/2025/layout";
import CallForSpeakers from "@/2025/pages/call-for-speakers";
import TermsAndCondition from "@/2025/pages/terms";
import App2026 from "@/2026/App";
import Site2026Layout from "@/2026/layout";
import RedirectCallForSpeakers from "@/2026/pages/redirect-call-for-speakers";
import TermsAndCondition2026 from "@/2026/pages/terms";
import ErrorBoundary from "@/components/error-boundary";
import NotFoundPage from "@/components/not-found-page";
import RouteErrorPage from "@/components/route-error-page";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const siteRoutes = [
  {
    element: <Site2026Layout />,
    children: [
      { index: true, element: <App2026 /> },
      {
        path: "call-for-speakers",
        element: <RedirectCallForSpeakers />,
      },
      { path: "terms-and-conditions", element: <TermsAndCondition2026 /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

const siteRoutes2025 = [
  {
    element: <Site2025Layout />,
    children: [
      { index: true, element: <App2025 /> },
      { path: "call-for-speakers", element: <CallForSpeakers /> },
      { path: "terms-and-conditions", element: <TermsAndCondition /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

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
