import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Menu from './components/Menu'

import './App.css'
import Forecast from './pages/Forecast'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            {/* <Route path='/forecast' element={<Forecast />} /> */}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App