//Styling
import { HomeContainer } from "./Home.style"
//Components
import { Slider } from "../../components/Home/Slider/Slider"
import { AboutUs } from "../../components/Home/AboutUs/AboutUs"
import { Services } from "../../components/Home/Services/Services"
import { RefObject, useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

interface UseOutletContextProps {
  aboutUsRef : RefObject<HTMLDivElement>;
  servicesRef : RefObject<HTMLDivElement>
}

export const Home = () => {

  const {aboutUsRef,servicesRef}= useOutletContext<UseOutletContextProps>()

  return (
    <HomeContainer className="home" >
      <Slider />
      <AboutUs {...{aboutUsRef}} />
      <Services {...{servicesRef}} />
    </HomeContainer>
  )
}
