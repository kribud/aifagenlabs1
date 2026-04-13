import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AIServicesSolutions from './components/AIServicesSolutions'
import FlagshipProducts from './components/FlagshipProducts'
import InnovationLabs from './components/InnovationLabs'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import Services from './components/Services'
import ProductsPage from './components/ProductsPage'
import InnovationLabsPage from './components/InnovationLabsPage'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import CollaboratePage from './components/CollaboratePage'
import PartnersPage from './components/PartnersPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <AIServicesSolutions setCurrentPage={setCurrentPage} />
          <FlagshipProducts setCurrentPage={setCurrentPage} />
          <InnovationLabs setCurrentPage={setCurrentPage} />
          <SuccessStories setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'services' ? (
        <Services setCurrentPage={setCurrentPage} />
      ) : currentPage === 'products' ? (
        <ProductsPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'innovation-labs' ? (
        <InnovationLabsPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'case-studies' ? (
        <CaseStudiesPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'about' ? (
        <AboutPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'collaborate' ? (
        <CollaboratePage />
      ) : currentPage === 'partners' ? (
        <PartnersPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicy />
      ) : currentPage === 'terms-and-conditions' ? (
        <TermsAndConditions />
      ) : null}
      
      <Footer setCurrentPage={setCurrentPage} />


    </div>
  )
}

export default App
