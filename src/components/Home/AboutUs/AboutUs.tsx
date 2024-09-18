//Styling
import { AboutUsContainer } from "./AboutUs.style";
//Images
import AboutUsIMage from "../../../assets/about_us/7.jpeg";
import { RefObject } from "react";
import { servicesText } from "../Services/Languages";

interface AboutUsProps {
  aboutUsRef: RefObject<HTMLDivElement>;
}

export const AboutUs = ({ aboutUsRef }: AboutUsProps) => {
  const lang = servicesText.english;
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
