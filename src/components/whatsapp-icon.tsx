import { SocialIcon } from 'react-social-icons'

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/971555797971"
      target="_blank"
      className="fixed z-10 hover:scale-110 right-4 bottom-4"
    >
      <SocialIcon network="whatsapp" style={{height: 40, width: 40}} />
    </a>
  )
}

export default WhatsAppIcon
