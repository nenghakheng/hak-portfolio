import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import Contact from "./contact/Contact.jsx";

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
    </>
  );
}

export default App;
