import {Toaster} from '@/components/ui/toaster'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactNode} from 'react'

import React from 'react'
const WhatsAppIcon = React.lazy(() => import('@/components/whatsapp-icon'))

const queryClient = new QueryClient()

const AppProviders = ({children}: {children: ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WhatsAppIcon />
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}

export default AppProviders
