'use client'

import ForestHouseModel from "@/components/foresthouse/ForestHouse"
import Contributions from "@/components/sections/Contributions";
import ProfileCard from "@/components/sections/ProfileCard";
import WorkHistory from "@/components/sections/WorkHistory";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro"
import Hobbies from "@/components/sections/Hobbies";
import Socials from "@/components/sections/Socials";

export default function Home() {
  return (
    <div className="bg-theme-yellow">
      <div className="container mx-auto max-w-2xl px-4">
        <main className="w-full max-w-[500px] mx-auto aspect-square">
          <ForestHouseModel />
        </main>
        <Intro />
        <Contributions />
        <ProfileCard />
        <Hobbies />
        <WorkHistory />
        <Socials />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}
