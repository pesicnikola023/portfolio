import React, { useRef } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import CustomCursor from "./components/cursor/CustomCursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CustomCursor />
      <div>
        <section id="Homepage">
          <Navbar />
          <Hero
            scrollToPortfolio={scrollToPortfolio}
            scrollToContact={scrollToContact}
          />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services scrollToPortfolio={scrollToPortfolio} />
        </section>
        <section id="Portfolio" ref={portfolioRef}>
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <section id="Contact" ref={contactRef}>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
