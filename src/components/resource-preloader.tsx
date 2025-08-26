import { useEffect } from "react";

// Resource preloader for critical assets
const ResourcePreloader = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      "/fonts/samankan.TTF",
      "/src/assets/hero-background.png",
      "/src/assets/speakers-background.jpg",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "preload";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
    fontLink.as = "style";
    document.head.appendChild(fontLink);

    // DNS prefetch for external resources
    const dnsPrefetch = document.createElement("link");
    dnsPrefetch.rel = "dns-prefetch";
    dnsPrefetch.href = "https://fonts.googleapis.com";
    document.head.appendChild(dnsPrefetch);

    const dnsPrefetch2 = document.createElement("link");
    dnsPrefetch2.rel = "dns-prefetch";
    dnsPrefetch2.href = "https://fonts.gstatic.com";
    document.head.appendChild(dnsPrefetch2);
  }, []);

  return null;
};

export default ResourcePreloader;
