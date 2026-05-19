export const ROUTES = {
  home: "/",
  callForSpeakers: "/call-for-speakers",
  terms: "/terms-and-conditions",
  year2025: {
    root: "/2025",
    callForSpeakers: "/2025/call-for-speakers",
    terms: "/2025/terms-and-conditions",
  },
} as const;

export type SiteRoutes = {
  home: string;
  callForSpeakers: string;
  terms: string;
};

export function getSiteRoutes(pathname: string): SiteRoutes {
  if (
    pathname === ROUTES.year2025.root ||
    pathname.startsWith(`${ROUTES.year2025.root}/`)
  ) {
    return {
      home: ROUTES.year2025.root,
      callForSpeakers: ROUTES.year2025.callForSpeakers,
      terms: ROUTES.year2025.terms,
    };
  }

  return {
    home: ROUTES.home,
    callForSpeakers: ROUTES.callForSpeakers,
    terms: ROUTES.terms,
  };
}
