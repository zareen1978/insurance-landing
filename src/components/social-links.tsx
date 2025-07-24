import {SocialIcon} from 'react-social-icons'

const socialMediaLinks = [
  {
    link: 'https://www.instagram.com/carinsurancedxbzareen/',
    label: 'Instagram',
  },
  {
    link: 'https://www.facebook.com/people/Carinsurancedxbcom/61555612810187/?mibextid=PlNXYD',
    label: 'Facebook',
  },
  {
    link: 'https://www.linkedin.com/in/zareen-javed-8a91a278/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    label: 'Linkedin',
  },
]

const SocialLinks = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-2">
      <span className="text-black text-sm italic md:mr-2 font-semibold">Follow us</span>
      <div className="flex  items-center gap-2">
        {socialMediaLinks.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black size-7 bg-white transition-all grid place-content-center rounded-full opacity-100 hover:opacity-90 transform hover:scale-105"
            aria-label={socialMedia.label}
          >
            <SocialIcon
              url={socialMedia.link}
              style={{height: 30, width: 30, pointerEvents: 'none'}}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
