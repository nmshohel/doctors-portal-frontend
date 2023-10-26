import React from 'react'
interface Props{
    params:{
        adminId:number
    }
}
const Admins = (props:Props) => {
    const {adminId}=props.params
  return (
    <div>UpdateAdmin {adminId}</div>
  )
}

export default Admins