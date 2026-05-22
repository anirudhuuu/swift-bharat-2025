import { ErrorFallback } from "@/components/error-fallback";
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function RouteErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorFallback
          title="Page not found"
          message="The page you're looking for doesn't exist or may have moved."
          devDetails={import.meta.env.DEV ? error.statusText : undefined}
        />
      );
    }

    return (
      <ErrorFallback
        title={`Error ${error.status}`}
        message={error.statusText || "Something went wrong loading this page."}
        devDetails={
          import.meta.env.DEV
            ? typeof error.data === "string"
              ? error.data
              : JSON.stringify(error.data, null, 2)
            : undefined
        }
      />
    );
  }

  if (error instanceof Error) {
    return (
      <ErrorFallback
        title="Something went wrong"
        message="An unexpected error occurred. You can try again or return home."
        onRetry={() => window.location.reload()}
        devDetails={import.meta.env.DEV ? error.message : undefined}
      />
    );
  }

  return (
    <ErrorFallback
      title="Something went wrong"
      message="An unexpected error occurred."
      onRetry={() => window.location.reload()}
    />
  );
}
