import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className="bg-primary mt-auto py-4">
         <div className="container text-white text-center">
            <span className="text-sm">© {new Date().getFullYear()} CarinsuranceDxb.com All Rights Reserved.</span>
            <div className="space-x-2 mt-2 text-sm">
               <Link to="/privacy" className="hover:underline hover:text-active">
                  Privacy Policy
               </Link>
               <Link to="/terms-conditions" className="hover:underline hover:text-active">
                  Terms and Conditions
               </Link>
            </div>
         </div>
      </footer>
   )
}

export default Footer
