import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({isAut, children}) => {
  return isAut
  ?children
  :<Navigate to="/iniciarSesion"/>
}

export default PrivateRoutes