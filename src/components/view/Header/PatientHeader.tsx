import Navbar from '@/components/ui/Navbar/Navbar'
import React from 'react'

const PatientHeader = () => {
  const items = [{ key: "1", label: "My Profile", href: "/my-profile" }];
  return (
    <Navbar
    items={items}
    hasSider
   
  />
  )
}

export default PatientHeader