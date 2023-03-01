import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes =()=> {
   
  let auth= ('token')

    return (
auth.token ? <Outlet/> : <Navigate to= '/Login'/>

            
  )
}

export default PrivateRoutes
