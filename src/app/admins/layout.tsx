import Navbar from '@/components/ui/Navbar/Navbar'
import AdminHeader from '@/components/view/Header/AdminHeader'
import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {

  return (
    <div>
         
      <AdminHeader/>
      {children}
        </div>
  )
}

export default AdminLayout