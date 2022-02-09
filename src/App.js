//APP

//IMPORTING
import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Design from "./components/Design/Design";
import Build from "./components/Build/Build";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Client from "./components/Client/Client";
import Faq from "./components/FAQ/Faq";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import "./App.scss";

//APP
const App = () => {
  //RETURN
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Design />
      <Build />
      <Features />
      <Pricing />
      <Faq />
      <Client />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
