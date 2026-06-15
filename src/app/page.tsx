import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import SlotMachine from "@/components/SlotMachine";

export default function Home() {
  return (
    <main className="container mx-auto px-6 md:px-12 lg:px-24">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <SlotMachine />
    </main>
  );
}
