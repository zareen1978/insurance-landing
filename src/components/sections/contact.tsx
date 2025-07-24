import {info} from '../layout/top-divider'
import SocialLinks from '../social-links'

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-6 md:py-8 text-center sm:text-left section-grid container bg-section"
    >
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-3xl md:text-4xl italic font-semibold capitalize">Contact Us</h1>
        <p className="text-sm md:text-base">
          We're here to assist you every step of the way. Whether you have questions about our
          services, need assistance with your insurance needs, or simply want to say hello, don't
          hesitate to reach out
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start !mt-4 sm:!mt-4 items-center gap-2 sm:gap-4">
          {info.map(({icon, link, text, label}, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-black opacity-90 hover:opacity-100"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
              <span className="text-sm block opacity-90">{text}</span>
            </a>
          ))}
        </div>

        <div className="pt-6 !mt-4 border-t-2">
          <SocialLinks />
        </div>
      </div>
      <div className="aspect-video relative">
        <iframe
          className="absolute inset-0 size-full rounded-md shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3605.1967612213352!2d55.39831547538724!3d25.36472127760355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIxJzUzLjAiTiA1NcKwMjQnMDMuMiJF!5e0!3m2!1sen!2sae!4v1712596074750!5m2!1sen!2sae"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
