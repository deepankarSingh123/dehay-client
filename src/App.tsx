// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentArticles from './components/RecentArticles';
import TrendyTransfer from './components/MoneyTransfer';
import InternationalCalling from './components/InternationalCalling';
import MobileTopUp from './components/MobileTopUp';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';
import Container from './components/Container';
import './index.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ReferAFriend from './components/ReferAFriend';

const Home: React.FC = () => (
  <Container>
    <Hero />
    <RecentArticles />
    <TrendyTransfer />
    <InternationalCalling />
    <MobileTopUp />
  </Container>
);

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Container><Home /></Container>} />
          <Route path="/contact-us" element={<Container><ContactUs /></Container>} />
          <Route path="/about-us" element={<Container><AboutUs /></Container>} />
          <Route path="/support" element={<Container><Support /></Container>} />
          <Route path="/privacy-policy" element={<Container><PrivacyPolicy /></Container>} />
          <Route path="/terms-and-conditions" element={<Container><TermsAndConditions /></Container>} />
          <Route path="/refer-a-friend" element={<Container><ReferAFriend /></Container>} />
        </Routes>
        <AppPromo />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
