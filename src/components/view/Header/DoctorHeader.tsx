import Navbar from '@/components/ui/Navbar/Navbar'
import React from 'react'

const DoctorHeader = () => {
 
    const items = [{ key: "1", label: "My Profile", href: "/doctor/my-profile" }];
 
  return (
    <Navbar
    items={items}
    hasSider
   
  />
  )
}

export default DoctorHeader