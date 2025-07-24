import ScrollToTop from '@/components/scroll-to-top'
import { Contact, Hero, Partners, Service, WhyChoosingUs } from '@/components/sections'

export default function HomePage() {
   return (
      <div className="space-y-16">
         <ScrollToTop />
         <Hero />
         <Service />
         <WhyChoosingUs />
         <Partners />
         <Contact />
      </div>
   )
}
