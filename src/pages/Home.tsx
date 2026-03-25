import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Alpha Pico Homepage
 * Design System: Industrial Precision & Technical Sophistication
 * - Charcoal + Red + Off-white color scheme
 * - IBM Plex typography (Serif for headlines, Sans for body, Mono for code)
 * - Hexagon motif throughout (echoing logo)
 * - Asymmetric layouts with diagonal elements
 * - Smooth, purposeful micro-interactions
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
