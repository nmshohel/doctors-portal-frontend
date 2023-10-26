
import Navbar from '@/components/ui/Navbar/Navbar'
import './globals.css'

import Providers from '@/lib/Providers'
import React from 'react'
import PublicHeader from '@/components/view/Header/PublicHeader'



export default function RootLayout({children}:{children:React.ReactNode}) {

  return (
    <html lang="en">
          <Providers >
       
      <body >
       
        {children}
      </body>

      
          </Providers>
      
    </html>
  )
}
