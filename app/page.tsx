import { Hero } from "@/components/hero"
import { InspirationSection } from "@/components/inspiration-section"
import { WhatIsSection } from "@/components/what-is-section"
import { StepsSection } from "@/components/steps-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestingSection } from "@/components/testing-section"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <InspirationSection />
      <WhatIsSection />
      <StepsSection />
      <BenefitsSection />
      <TestingSection />
      <ResourcesSection />
      <Footer />
    </main>
  )
}
