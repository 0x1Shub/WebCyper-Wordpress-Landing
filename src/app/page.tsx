import ChatSection from "@/components/chat-with-us";
import { Customers } from "@/components/choose-us";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import WhatWeFix from "@/components/our-speciality";
import RealResults from "@/components/real-results";

export default function Home() {
  return (
    <>
      <div className="bg-white p-4 font-[family-name:var(--font-dm-sans)] sm:p-6">
        <Header />
        <HeroSection />
        <WhatWeFix />
        <Customers />
        <RealResults />
        <ChatSection />
      </div>
    </>
  );
}
