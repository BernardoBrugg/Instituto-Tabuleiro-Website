"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DesktopHome from "@/app/components/DesktopHome";
import MobileHome from "@/app/components/MobileHome";
import LoadingScreen from "@/components/LoadingScreen";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Prefetch pages
    const routes = ["/sobre", "/publicacoes", "/local", "/contato"];
    routes.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we get closer to 90%, wait for model to load for the last 10%
        if (prev >= 90) return prev;
        const increment = Math.max(1, (90 - prev) / 10);
        return prev + increment;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleModelLoaded = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Small delay to show 100%
  };

  return (
    <>
      {isLoading && <LoadingScreen progress={progress} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        {isMobile ? (
          <MobileHome onModelLoaded={handleModelLoaded} />
        ) : (
          <DesktopHome onModelLoaded={handleModelLoaded} />
        )}
      </div>
    </>
  );
}
