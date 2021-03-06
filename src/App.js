import React, { useState } from "react";
import DropDown from "./components/DropDown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default App;
