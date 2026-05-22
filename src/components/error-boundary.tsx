import { ErrorFallback } from "@/components/error-fallback";
import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled application error:", error, info.componentStack);
  }

  private handleRetry = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <ErrorFallback
          title="Something went wrong"
          message="An unexpected error occurred. You can try reloading the page or return to the home page."
          onRetry={this.handleRetry}
          devDetails={
            import.meta.env.DEV ? this.state.error.message : undefined
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
