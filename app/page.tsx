import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsSection } from "@/components/projects-section"
import { CalWidget } from "@/components/cal-widget"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <CalWidget />
      <ContactSection />
      <Footer />
    </main>
  )
}
