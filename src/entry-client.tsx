import { StrictMode, lazy, Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/index.css";

import App from "@/App";
import ResourcePreloader from "@/components/resource-preloader";
import { LoadingShimmer } from "@/components/loading-shimmer";

// Lazy load pages
const CallForSpeakers = lazy(() => import("./pages/call-for-speakers"));
const TermsAndCondition = lazy(() => import("./pages/terms"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoadingShimmer>
        <App />
      </LoadingShimmer>
    ),
  },
  {
    path: "/call-for-speakers",
    element: (
      <Suspense
        fallback={
          <LoadingShimmer>
            <div />
          </LoadingShimmer>
        }
      >
        <LoadingShimmer>
          <CallForSpeakers />
        </LoadingShimmer>
      </Suspense>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <Suspense
        fallback={
          <LoadingShimmer>
            <div />
          </LoadingShimmer>
        }
      >
        <LoadingShimmer>
          <TermsAndCondition />
        </LoadingShimmer>
      </Suspense>
    ),
  },
]);

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <ResourcePreloader />
    <RouterProvider router={router} />
  </StrictMode>
);
