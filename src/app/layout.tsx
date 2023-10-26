
import Navbar from '@/components/ui/Navbar/Navbar'
import './globals.css'

import Providers from '@/lib/Providers'
import React from 'react'



export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
          <Providers >
       
      <body >
        <Navbar/>
        {children}
      </body>

      
          </Providers>
      
    </html>
  )
}
