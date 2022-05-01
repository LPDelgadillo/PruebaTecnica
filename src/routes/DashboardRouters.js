import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import CrudIngredients from '../components/CrudIngredients'
import ListarIngredients from '../components/ListarIngredients'


const DashboardRouters = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListarIngredients />} />
        <Route path='/ingredients' element={<CrudIngredients />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default DashboardRouters