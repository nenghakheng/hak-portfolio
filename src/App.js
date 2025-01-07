import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import Contact from "./contact/Contact.jsx";
import Footer from "./footer/Footer.jsx";
import ScrollUp from "./scrollUp/ScrollUp.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
