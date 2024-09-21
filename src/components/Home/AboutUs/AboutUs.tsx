//Styling
import { AboutUsContainer } from "./AboutUs.style";
//Images
import AboutUsIMage from "../../../assets/about_us/7.jpeg";
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
        <div className="title-container">
          <h1>{lang.bodyguardTitle.title}</h1>
          <h1>{lang.bodyguardTitle.title2}</h1>
        </div>
        <div className="bottom-container">
          {/* <div className="image-container">
                    <img src={AboutUsIMage} />
                </div> */}
          <div className="text-button-container">
            <p>{lang.bodyguardTitle.content}</p>
            {/* <div className="button-container">
              <button>Read More</button>
            </div> */}
          </div>
        </div>
      </div>
    </AboutUsContainer>
  );
};
