import { Footer, Navigation } from '@/components/layout'
import AppProviders from '@/providers'
import '@/styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <BrowserRouter>
         <AppProviders>
            <main className="min-h-screen flex flex-col">
               <Navigation />
               <App />
               <Footer />
            </main>
         </AppProviders>
      </BrowserRouter>
   </React.StrictMode>,
)
