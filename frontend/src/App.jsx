import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Simple placeholder component for legal pages
const LegalPage = ({ title }) => (
  <div className="min-h-[60vh] pt-40 px-6 max-w-3xl mx-auto text-[#121212]">
    <h1 className="text-4xl font-serif mb-6">{title}</h1>
    <p className="text-[#737373]">This page is a placeholder and is currently being updated by our legal team.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<ProjectDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<LegalPage title="Privacy Policy" />} />
        <Route path="terms" element={<LegalPage title="Terms of Service" />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
