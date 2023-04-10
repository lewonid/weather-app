import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Menu from './components/Menu'

import './App.css'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App