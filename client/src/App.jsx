import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import AgriConsultancy from './pages/services/AgriConsultancy';
import PoultryFarming from './pages/services/PoultryFarming';
import FeedProduction from './pages/services/FeedProduction';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/agri-consultancy" element={<AgriConsultancy />} />
          <Route path="/services/poultry-farming" element={<PoultryFarming />} />
          <Route path="/services/feed-production" element={<FeedProduction />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
