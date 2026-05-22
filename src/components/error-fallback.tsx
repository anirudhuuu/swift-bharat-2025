type ErrorFallbackProps = {
  title: string;
  message: string;
  onRetry?: () => void;
  devDetails?: string;
};

export function ErrorFallback({
  title,
  message,
  onRetry,
  devDetails,
}: ErrorFallbackProps) {
  return (
    <main
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center bg-2025-brand-green px-6 py-12 text-center font-display text-white"
    >
      <h1 className="font-samarkan text-3xl md:text-5xl mb-4">{title}</h1>
      <p className="max-w-md text-sm md:text-base text-white/80 mb-8">{message}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="rounded-xl bg-2025-cream px-6 py-3 text-2025-brand-green font-medium hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
        )}
        <a
          href="/"
          className="rounded-xl bg-2025-cream px-6 py-3 text-2025-brand-green font-medium hover:opacity-90 transition-opacity"
        >
          Go home
        </a>
        <a
          href="/2025"
          className="rounded-xl border border-white/30 px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors"
        >
          Swift Bharat 2025
        </a>
      </div>
      {import.meta.env.DEV && devDetails && (
        <pre className="mt-8 max-w-xl overflow-auto rounded-lg bg-black/30 p-4 text-left text-xs text-white/70">
          {devDetails}
        </pre>
      )}
    </main>
  );
}
