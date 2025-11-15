"use client";

import { useEffect, useState } from "react";
import DesktopHome from "@/app/components/DesktopHome";
import MobileHome from "@/app/components/MobileHome";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
}
