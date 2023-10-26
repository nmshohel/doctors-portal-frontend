import PatientHeader from '@/components/view/Header/PatientHeader'
import PublicHeader from '@/components/view/Header/PublicHeader'
import React from 'react'

const PatientLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <PatientHeader/>
      {children}
      </div>
  )
}

export default PatientLayout