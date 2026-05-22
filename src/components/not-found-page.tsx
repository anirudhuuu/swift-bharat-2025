import { ErrorFallback } from "@/components/error-fallback";

export default function NotFoundPage() {
  return (
    <ErrorFallback
      title="Page not found"
      message="The page you're looking for doesn't exist or may have moved."
    />
  );
}
