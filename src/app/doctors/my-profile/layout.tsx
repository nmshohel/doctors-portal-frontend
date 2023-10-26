import DoctorHeader from '@/components/view/Header/DoctorHeader'
import PublicHeader from '@/components/view/Header/PublicHeader'
import React from 'react'

const PatientLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <DoctorHeader/>
      {children}
      </div>
  )
}

export default PatientLayout