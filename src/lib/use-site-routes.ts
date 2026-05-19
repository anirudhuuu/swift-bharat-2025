import { useLocation } from "react-router";
import { getSiteRoutes } from "@/lib/routes";

export function useSiteRoutes() {
  const { pathname } = useLocation();
  return getSiteRoutes(pathname);
}
