//Styling
import { HomeContainer } from "./Home.style";
//Components
import { Slider } from "../../components/Home/Slider/Slider";
import { AboutUs } from "../../components/Home/AboutUs/AboutUs";
import { Services } from "../../components/Home/Services/Services";
import { BottomSlider } from "../../components/Home/BottomSlider/Slider";
import { References } from "../../components/Home/References/References";
import { RefObject, useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

interface UseOutletContextProps {
  aboutUsRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
  referencesRef: RefObject<HTMLDivElement>;
  selectedLanguage: string;
}

export const Home = () => {
  const { aboutUsRef, servicesRef, selectedLanguage, referencesRef } =
    useOutletContext<UseOutletContextProps>();

  return (
    <HomeContainer className="home">
      <Slider />
      <AboutUs {...{ aboutUsRef, selectedLanguage }} />
      <Services {...{ servicesRef, selectedLanguage }} />
      <BottomSlider />
      <References {...{ referencesRef }} />
    </HomeContainer>
  );
};
