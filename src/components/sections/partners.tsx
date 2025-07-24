const partners = [
  '/images/insurance/1.jpg',
  '/images/insurance/3.png',
  '/images/insurance/4.png',
  '/images/insurance/5.gif',
  '/images/insurance/6.png',
  '/images/insurance/7.png',
  '/images/insurance/8.png',
  '/images/insurance/9.svg',
  '/images/insurance/10.png',
  '/images/insurance/11.png',
  '/images/insurance/12.png',
  '/images/insurance/13.jpg',
  '/images/insurance/14.svg',
  '/images/insurance/15.svg',
  '/images/insurance/16.png',
  '/images/insurance/17.jpg',
  '/images/insurance/18.png',
  '/images/insurance/19.png',
]

const Partners = () => {
  return (
    <section id="partners" className="container">
      <div className="space-y-3 md:space-y-5 text-black  mx-auto">
        <h2 className="font-semibold text-[22px] md:text-3xl text-center italic">Our Partners</h2>
        <p className="text-sm  text-gray-700 md:text-base text-center max-w-xl mx-auto">
          Our partners play a crucial role in our mission to deliver exceptional service and value
          to our clients.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 max-w-[920px] mx-auto">
        {partners.map((partner, index) => (
          <img key={index} src={partner} className="max-w-xs mx-auto w-32" />
        ))}
      </div>
    </section>
  )
}

export default Partners
