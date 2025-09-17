import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Home from '../src/components/Home.jsx';
import CoursList from './components/CoursList.jsx';
import Library from './components/Library.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Reading from './components/Reading.jsx';
import DashboardLibrary from './components/DashboardLibrary.jsx';
import DashboardCours from './components/DashboardCours.jsx';
import DashboardApi from './components/DashboardApi.jsx';
import DashboardUsers from './components/DashboardUsers.jsx';
import DashboardSetting from './components/DashboardSetting.jsx'; 
import News from './components/News.jsx';
import Contact from './components/Contact.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
      


        {/* Navigation */}
      {/* <nav className="flex gap-6 bg-gray-100 p-4 shadow">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/library" className="hover:text-blue-600">Bibliothèque</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </nav> */}

      <Routes>

      

        {/* pages */}

        <Route path="/" element={<Home />} />
        <Route path="/CoursList" element={<CoursList />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reading" element={<Reading />} />
        <Route path="/DashboardLibrary" element={<DashboardLibrary />} />
        <Route path="/DashboardCours" element={<DashboardCours />} />
        <Route path="/DashboardApi" element={<DashboardApi />} />
        <Route path="/DashboardUsers" element={<DashboardUsers />} />
        <Route path="/DashboardSetting" element={<DashboardSetting />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />


        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
