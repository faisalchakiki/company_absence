import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import { useState } from 'react';
import dataEmployee from './data/dataEmployee.json'
import EmployeeContext from './features/ContextEmployee.js'

function App() {
  const [valueEmployee, setValueEmployee] = useState(dataEmployee[0]);
  return (
    <BrowserRouter>
      <EmployeeContext.Provider value={{valueEmployee, setValueEmployee}}>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </EmployeeContext.Provider>
    </BrowserRouter>
  )
}

export default App
