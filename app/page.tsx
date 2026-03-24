import { About } from "@/components/About";
import { Connect } from "@/components/Connect";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Connect />
      </main>
      <SiteFooter />
    </>
  );
}
