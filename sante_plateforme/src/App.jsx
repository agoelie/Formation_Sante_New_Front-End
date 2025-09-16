import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Home from '../src/components/Home.jsx';
import CoursList from './components/CoursList.jsx';
import Library from './components/Library.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Reading from './components/Reading.jsx';
import DashboardLibrary from './components/DashboardLibrary.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/CoursList" element={<CoursList />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reading" element={<Reading />} />
        <Route path="/DashboardLibrary" element={<DashboardLibrary />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
