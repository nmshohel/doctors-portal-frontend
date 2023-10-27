import Navbar from '@/components/ui/Navbar/Navbar'
import AdminHeader from '@/components/view/Header/AdminHeader'
import AdminSidebar from '@/components/view/Sidebar/AdminSidebar/AdminSidebar'
import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {

  return (
    <div>
         
      <AdminHeader/>
      <div className="min-h-[calc(100vh-64px)]">
          <AdminSidebar>{children}</AdminSidebar>
      </div>
    
        </div>
  )
}

export default AdminLayout