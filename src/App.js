import React from 'react';
import './App.css';
import heroImage from './images/hero.jpg';  // replace with the path to your image
import featureImage from './images/feature.jpg';  // replace with the path to your image
import benefitImage from './images/benefit.jpg';  // replace with the path to your image
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Login} from './components/login';
import { Register} from './components/register';
import Search from './components/search';



import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>Recruitment Platform</h2>
      <div>
        <Link to="/#features">Features</Link>
        <Link to="/#benefits">Benefits</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};


const Section = ({ background, children }) => (
  <div className="parallax" style={{backgroundImage: `url(${background})`}}>
    <div className="content">{children}</div>
  </div>
);

const HeroSection = () => (
  <Section background={heroImage}>
    <h1>Welcome to our Digital Recruitment Solution</h1>
    <p>Your one-stop solution for seamless hiring.</p>
  </Section>
);

const FeaturesSection = () => (
  <Section background={featureImage} id="features">
    <h2>Features</h2>
    <ul>
      <li>Efficient candidate search</li>
      <li>Easy candidate evaluation and ranking</li>
      <li>Seamless communication with candidates</li>
    </ul>
  </Section>
);

const BenefitsSection = () => (
  <Section background={benefitImage} id="benefits">
    <h2>Benefits</h2>
    <ul>
      <li>Save time and money</li>
      <li>Find the best candidates</li>
      <li>Streamline your hiring process</li>
    </ul>
  </Section>
);


const Footer = () => {
  return (
    <footer>
      <p>© 2023 Recruitment Platform. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
              <BenefitsSection />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
