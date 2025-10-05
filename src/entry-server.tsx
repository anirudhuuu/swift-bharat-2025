import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { StrictMode } from "react";

import App from "@/App";
import ResourcePreloader from "@/components/resource-preloader";
import TermsAndCondition from "@/pages/terms";
import CallForSpeakers from "./pages/call-for-speakers";
import { LoadingShimmer } from "@/components/loading-shimmer";

export async function render(url: string) {
  const getComponent = () => {
    switch (url) {
      case "/call-for-speakers":
        return <CallForSpeakers />;
      case "/terms-and-conditions":
        return <TermsAndCondition />;
      default:
        return <App />;
    }
  };

  const html = renderToString(
    <StaticRouter location={url}>
      <StrictMode>
        <ResourcePreloader />
        <LoadingShimmer>{getComponent()}</LoadingShimmer>
      </StrictMode>
    </StaticRouter>
  );

  return html;
}
