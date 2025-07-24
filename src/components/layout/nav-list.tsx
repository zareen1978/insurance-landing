import { Dispatch, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

const links = [
   { id: 1, text: 'Home', target: 'home', offset: -150 },
   { id: 2, text: 'Services', target: 'services', offset: -90 },
   { id: 3, text: 'Partners', target: 'partners', offset: -90 },
   //  { id: 4, text: 'Contact Us', target: 'contact', offset: -90 },
]

const NavList = ({ setIsOpen }: { setIsOpen: Dispatch<React.SetStateAction<boolean>> }) => {
   const location = useLocation()
   const navigate = useNavigate()
   const [activeLink, setActiveLink] = useState<string>('')

   const handleLinkClick = (target: string, offset: number) => {
      setIsOpen(false)
      setActiveLink(target)
      if (location.pathname !== '/') {
         navigate('/')
         setTimeout(() => {
            scroller.scrollTo(target, {
               smooth: true,
               offset: offset,
               duration: 200,
            })
         }, 100)
      } else {
         scroller.scrollTo(target, {
            smooth: true,
            offset: offset,
            duration: 200,
         })
      }
   }

   return (
      <div className="flex gap-0 flex-col md:flex-row md:items-center md:gap-6">
         {links.map(link => (
            <div
               key={link.id}
               className={`hover:text-active text-sm md:text-md font-medium md:text-slate-200 p-2 md:p-0 cursor-pointer md:bg-transparent ${
                  activeLink === link.target && location.pathname !== '/enquire' ? '!text-active' : ''
               }`}
               onClick={() => handleLinkClick(link.target, link.offset)}
            >
               {link.text}
            </div>
         ))}

         <Link
            onClick={() => setIsOpen(false)}
            to="/enquire"
            className={`hover:text-active text-sm md:text-md font-medium md:text-slate-200 p-2 md:p-0 cursor-pointer md:bg-transparent ${
               location.pathname === '/enquire' ? '!text-active' : ''
            }`}
         >
            Enquire
         </Link>
      </div>
   )
}

export default NavList
