//Styling
import { AboutUsContainer } from "./AboutUs.style";
//Images
import leftImg from "../../../assets/about_us/sideImg.jpg";
import rightImg from "../../../assets/about_us/sideImg2.jpg";
import { RefObject, useEffect, useState } from "react";
import { servicesText } from "../Services/Languages";

interface AboutUsProps {
  aboutUsRef: RefObject<HTMLDivElement>;
  selectedLanguage: string;
}

export const AboutUs = ({ aboutUsRef, selectedLanguage }: AboutUsProps) => {
  const [lang, setLang] = useState(servicesText.english);
  useEffect(() => {
    if (selectedLanguage === "english") {
      setLang(servicesText.english);
    } else if (selectedLanguage === "turkish") {
      setLang(servicesText.turkish);
    } else if (selectedLanguage === "russian") {
      setLang(servicesText.russian);
    } else if (selectedLanguage === "ukraine") {
      setLang(servicesText.ukraine);
    } else if (selectedLanguage === "german") {
      setLang(servicesText.german);
    } else if (selectedLanguage === "arabic") {
      setLang(servicesText.arabic);
    } else if (selectedLanguage === "italian") {
      setLang(servicesText.italian);
    } else if (selectedLanguage === "persian") {
      setLang(servicesText.persian);
    } else if (selectedLanguage === "french") {
      setLang(servicesText.french);
    } else if (selectedLanguage === "greece") {
      setLang(servicesText.greek);
    } else if (selectedLanguage === "japon") {
      setLang(servicesText.japon);
    } else if (selectedLanguage === "korean") {
      setLang(servicesText.korean);
    } else if (selectedLanguage === "romanian") {
      setLang(servicesText.romanian);
    } else if (selectedLanguage === "pakistan") {
      setLang(servicesText.urdu);
    } else if (selectedLanguage === "chinese") {
      setLang(servicesText.chinese);
    }
  }, [selectedLanguage]);
  return (
    <AboutUsContainer ref={aboutUsRef}>
      <div className="inner-container">
        <div className="leftImg">
          <img src={leftImg} alt="" />
        </div>
        <div className="mid-container">
          <div className="title-container">
            <h1>{lang.bodyguardTitle.title}</h1>
            <h1>{lang.bodyguardTitle.title2}</h1>
          </div>
          <div className="bottom-container">
            <div className="text-button-container">
              <p>{lang.bodyguardTitle.content}</p>
            </div>
          </div>
        </div>
        <div className="rightImg">
          <img src={rightImg} alt="" />
        </div>
      </div>
    </AboutUsContainer>
  );
};
