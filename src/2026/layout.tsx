import ScrollToHash from "@/2026/components/scroll-to-hash";
import "@/2026/fonts.css";
import { Outlet } from "react-router";

const Site2026Layout = () => (
  <div className="site-2026 min-h-screen">
    <ScrollToHash />
    <Outlet />
  </div>
);

export default Site2026Layout;
