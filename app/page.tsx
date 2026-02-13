'use client'

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { Preloader } from '@/components/preloader'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { CompetitiveProgramming } from '@/components/sections/competitive-programming'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
