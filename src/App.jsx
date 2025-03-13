
import './App.css'
import { Dashboard, Orders, Menu, Tables } from "./pages/index.js"
import MainLayout from './components/layout/MainLayout'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path='menu' element={<Menu />} />
            <Route path='tables' element={<Tables />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
