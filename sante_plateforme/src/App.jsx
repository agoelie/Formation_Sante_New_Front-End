import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Home from '../src/components/Home.jsx';
import CoursList from './components/CoursList.jsx';
import Library from './components/Library.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/CoursList" element={<CoursList />} />
        <Route path="/Library" element={<Library />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
