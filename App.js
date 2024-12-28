import React from 'react'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Navbar />
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/add-user" element={<AddUser />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;