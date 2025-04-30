import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OurService from './pages/OurService';
import Appointment from './pages/Appointment';
import SecurityPlaza from './pages/SecurityPlaza';
import SecurityGuard from './pages/SecurityGuard';
import SecurityHouse from './pages/SecurityHouse';
import SecurityInstallations from './pages/SecurityInstallations';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<OurService />} />
        <Route path="/blog" element={<OurService />} />
        {/* <Route path="/blog" element={<OurService />} /> */}
        <Route path="/appointment" element={<Appointment />} />
        {/*  */}
        <Route path="/securityPlaza" element={<SecurityPlaza />} />
        <Route path="/securityGuard" element={<SecurityGuard />} />
        <Route path="/securityHouse" element={<SecurityHouse />} />
        <Route path="/securityInstallation" element={<SecurityInstallations />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
