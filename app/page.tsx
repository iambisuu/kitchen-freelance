// pages/index.tsx or app/page.tsx
import PortfolioGrid from "@/components/PortfolioGrid";
import ProfileHeader from "@/components/ProfileHeader";
import TabNavigation from "@/components/TabNavigation";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="w-full mx-auto mt-8">
        <ProfileHeader />
        <TabNavigation />
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </div>
    </main>
  );
}