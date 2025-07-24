import {Mail, Phone} from 'lucide-react'
import SocialLinks from '../social-links'

export const info = [
  {icon: <Phone size={17} />, text: '+971555797971', link: 'tel:+971555797971', label: 'Phone'},
  {
    icon: <Mail size={17} />,
    text: 'zareen@carinsurancedxb.com',
    link: 'mailto:zareen@carinsurancedxb.com',
    label: 'Email',
  },
]

const TopDivider = () => {
  return (
    <div className="bg-gray-100 py-2 hidden md:block">
      <div className="container flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
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
        <SocialLinks />
      </div>
    </div>
  )
}

export default TopDivider
