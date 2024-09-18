//Styling
import { AboutUsContainer } from "./AboutUs.style";
//Images
import AboutUsIMage from "../../../assets/about_us/7.jpeg";
import { RefObject } from "react";

interface AboutUsProps {
  aboutUsRef: RefObject<HTMLDivElement>;
}

export const AboutUs = ({ aboutUsRef }: AboutUsProps) => {
  return (
    <AboutUsContainer ref={aboutUsRef}>
      <div className="inner-container">
        <div className="title-container">
          <h1>Bodyguard Services in Turkey</h1>
          <h1>Bodyguard Services in İstanbul</h1>
        </div>
        <div className="bottom-container">
          {/* <div className="image-container">
                    <img src={AboutUsIMage} />
                </div> */}
          <div className="text-button-container">
            <p>
              We have been providing bodyguard services to our guests from all
              over the world for 20 years in Istanbul and throughout Turkey. We
              currently provide bodyguard services to hundreds of companies in
              Turkey, especially Nike, Toyota and Oppo. The security of the
              football players and all senior officials was ensured by our
              company in the Champions League final match played in Turkey in
              2023. In addition, former German Chancellor Gerhard Schröder and
              French President Jacques Chirac are among the people we have
              previously provided protection services to. . Our guards are
              professionals in their fields. They are trained to produce quick
              solutions and take action even in extraordinary situations and
              conditions. The focus is to protect the guest without any problems
              under all circumstances.
            </p>
            {/* <div className="button-container">
              <button>Read More</button>
            </div> */}
          </div>
        </div>
      </div>
    </AboutUsContainer>
  );
};
