import DoctorHeader from '@/components/view/Header/DoctorHeader'
import PublicHeader from '@/components/view/Header/PublicHeader'
import DoctorSidebar from '@/components/view/Sidebar/DoctorSidebar/DoctorSidebar'
import React from 'react'

const DoctorLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <DoctorHeader/>
      <div className="min-h-[calc(100vh-64px)]">
        <div>
          <DoctorSidebar>{children}</DoctorSidebar>
        </div>
      </div>
      </div>
  )
}

export default DoctorLayout