import QuoteForm from '../quote-form'

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-section">
      <main className="py-6 md:py-16 text-center sm:text-left section-grid container">
        <div className="space-y-2 md:space-y-4">
          <p className="text-xs md:text-sm">Simple Pricing, Fair Rates</p>
          <h1 className="text-2xl font-bold sm:font-normal  md:text-3xl lg:text-5xl capitalize">
            We provide the best value insurance
          </h1>
          <p className="text-sm md:text-base">
            Discover peace of mind with our affordable and reliable insurance options, customized to
            fit your needs perfectly. Protect your investments with our top-notch coverage today.
          </p>
        </div>

        <QuoteForm />
      </main>
    </section>
  )
}

export default HeroSection
