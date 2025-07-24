// import TopDivider from './top-divider'
import MobileNavigation from './mobile-nav'
import NavList from './nav-list'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <nav className="w-full">
         {/* <TopDivider /> */}
         <div className="h-12 bg-primary items-center flex w-full">
            <div className="container flex items-center gap-2 justify-between">
               <Link to="/" className="font-bold cursor-pointer text-white">
                  CarinsuranceDxb
               </Link>

               <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />

               <div className="hidden md:block">
                  <NavList setIsOpen={setIsOpen} />
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navigation
