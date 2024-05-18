import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Newsletter from "../components/Newsletter";
import About from "../components/About";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}
