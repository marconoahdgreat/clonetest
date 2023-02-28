import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import LoginDirect from './LoginDirect'

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<LoginDirect />} />

     </Routes>
      
    </div>
  )
}

export default App
