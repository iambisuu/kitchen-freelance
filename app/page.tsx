// pages/index.tsx or app/page.tsx
"use client";
import { useRef } from "react";
import PortfolioGrid from "@/components/PortfolioGrid";
import ProfileHeader from "@/components/ProfileHeader";
import TabNavigation from "@/components/TabNavigation";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const portfolioGridRef = useRef<HTMLDivElement>(null);

  return (
    <div className="md:scale-105 scale-110 transform-gpu">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="w-full mx-auto mt-8">
          <div>
            <ProfileHeader />
          </div>
          <TabNavigation />
          <div className="mt-12" ref={portfolioGridRef}>
            <PortfolioGrid />
            <CustomCursor containerRef={portfolioGridRef as React.RefObject<HTMLDivElement>} />
          </div>
        </div>
      </main>
    </div>
  );
}