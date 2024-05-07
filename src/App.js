import React from 'react';
import './App.css';
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
import AddBlog from './Pages/addBlog';
import AddTour from './Pages/addTour';
import AddToGalerie from './Pages/addToGalerie';
import Galerie from './Pages/Galerie';
import Blog from './Pages/Blog';
import Article from './Pages/Article';
import DashboardGuide from './Pages/DashboardGuide';
import DashboardUser from './Pages/DashboardUser';
import Signinorup from './Pages/Auth/signinorup';
import Signup from './Pages/Auth/signuptourist';
import Signupguide from './Pages/Auth/signupGuide';
import Or from './Pages/Auth/or';
import Signin from './Pages/Auth/signin';
import Forgotpassword from './Pages/Auth/forgotpassword';


function App() {
  return (
    <div className="App">
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
          <Route exact path="/add-blog/" element={<AddBlog />} />
          <Route exact path="/add-tour/" element={<AddTour />} />
          <Route exact path="/add-to-galerie/" element={<AddToGalerie />} />
          <Route exact path="/galerie/" element={<Galerie />} />
          <Route exact path="/blog/" element={<Blog />} />
          <Route exact path="/article/" element={<Article />} />
          <Route exact path="/guide-profile/" element={<DashboardGuide />} />
          <Route exact path="/guide-utilisateur/" element={<DashboardUser />} />
          <Route exact path="/singin-signup/" element={<Signinorup />} />
          <Route exact path="/signin/" element={<Signin />} />
          <Route exact path="/or/" element={<Or />} />
          <Route exact path="/signup/" element={<Signup />} />
          <Route exact path="/Signup-guide/" element={<Signupguide />} />
          <Route exact path="/forgot-password/" element={<Forgotpassword />} />
        </Routes>
        <ContactForm />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
