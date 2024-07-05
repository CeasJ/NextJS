import About from "@/components/About";
import Classes from "@/components/Classes";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <div className='h-[3000px]'></div>
    </main>
  );
}
