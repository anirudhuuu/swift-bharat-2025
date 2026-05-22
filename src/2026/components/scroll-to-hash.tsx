import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    scroll();
    const timeout = window.setTimeout(scroll, 100);
    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
