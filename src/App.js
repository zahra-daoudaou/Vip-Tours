import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsOfUse from './Pages/TermsOfUse';
import FAQs from './Pages/FAQs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import FoundedGuides from './Pages/FoundedGuides';
import Guides from './Pages/Guides';
import Tours from './Pages/Tours';
import AddTestimony from './Components/AddTestimony';
import About from './Components/About';
import Services from './Components/Services';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/terms-of-use" element={<TermsOfUse />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/founded-guides/:country" element={<FoundedGuides />} />
          <Route exact path="/guides/" element={<Guides />} />
          <Route exact path="/tours/" element={<Tours />} />
          <Route exact path="/add-testimony/" element={<AddTestimony />} />
          <Route exact path="/about/" element={<About />} />
          <Route exact path="/services/" element={<Services />} />
        </Routes>
        <ContactForm />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
