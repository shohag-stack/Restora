import React from 'react'
import './App.css'
import FoodMenus from './pages/FoodMenus'
import Orders from './pages/Orders'
import Tables from './pages/Tables'
import Dashboard from './pages/Dashboard'
import MainLayout from './components/layout/MainLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path='foodMenus' element={<FoodMenus/>} />
            <Route path='tables' element={<Tables />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
