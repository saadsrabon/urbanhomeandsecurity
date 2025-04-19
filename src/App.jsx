import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Footer from './components/Footer';
import NavbarMenu from './components/Navbar';

function App() {

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
