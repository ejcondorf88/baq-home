import React from "react";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToAction";

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Hero />
      <CallToAction />
    </main>
  </div>
);

export default Home;
