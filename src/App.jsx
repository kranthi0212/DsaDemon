
import Navbar from './components/Navbar.jsx';
import CardContainer from './components/CreatorCard.jsx';
import CreatorAbout from './components/CreatorAbout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />} />
        <Route path="/creator/:id" element={<CreatorAbout />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
