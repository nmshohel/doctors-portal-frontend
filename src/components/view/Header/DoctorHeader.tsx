import Navbar from '@/components/ui/Navbar/Navbar'
import React from 'react'

const DoctorHeader = () => {
    const items=[
        {key:1, label:"Home", href:'/'},
        {key:1, label:"About Us", href:'about-us'},
        {key:1, label:"Contact Us", href:'/contact-us'},
    ]
  return (
    <Navbar items={items}/>
  )
}

export default DoctorHeader