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
    <div className="overflow-x-hidden">
      <div className="md:scale-105 scale-100 transform-gpu md:ml-[-2%]">
        <main className="max-w-7xl mx-auto px-4 max-sm:mr-2 sm:px-6 py-8 sm:py-12">
          <div className="w-full mx-auto mt-4 sm:mt-8">
            <div className="flex justify-center">
              <ProfileHeader />
            </div>
            <div className="flex justify-center">
              <TabNavigation />
            </div>
            <div className="mt-8 sm:mt-12 flex justify-center" ref={portfolioGridRef}>
              <PortfolioGrid />
              <CustomCursor containerRef={portfolioGridRef as React.RefObject<HTMLDivElement>} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}