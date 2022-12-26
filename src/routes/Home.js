import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/Heroimg";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default home;
