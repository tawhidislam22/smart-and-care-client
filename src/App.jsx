
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <Routes>
      <Route index element={<h2>This is my default path</h2>}></Route>
    </Routes>
  )
}

export default App
