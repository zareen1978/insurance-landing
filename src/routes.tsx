import HomePage from '@/pages/home'
import Privacy from './pages/privacy'
import TermsConditionPage from './pages/terms-conditions'
import EnquirePage from './pages/enquire'

const router = [
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/enquire',
      element: <EnquirePage />,
   },

   {
      path: '/privacy',
      element: <Privacy />,
   },

   {
      path: '/terms-conditions',
      element: <TermsConditionPage />,
   },
]

export default router
