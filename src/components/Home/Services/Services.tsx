//Styling
import { ServicesContainer } from "./Services.style";
//Packages
import { RefObject } from "react";
//Images
import { images } from "./ServicesImages";

import { servicesText } from "./Languages";

interface ServicesProps {
  servicesRef: RefObject<HTMLDivElement>;
}

export const Services = ({ servicesRef }: ServicesProps) => {
  const lang = servicesText.english;
  return (
    <ServicesContainer ref={servicesRef}>
      <div className="inner-container">
        <div className="box-1">
          {/* <div className="image-container">
            <img src={images.Image1} alt="" />
          </div> */}
          <div className="text-container">
            <h1>{lang.bodyguard.title}</h1>
            <h1>{lang.bodyguard.title}</h1>
            <p>{lang.bodyguard.content}</p>
          </div>
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.armed.title}</h1>
            <h1>{lang.armed.title2}</h1>
            <p>{lang.armed.content}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.unarmed.title}</h1>
            <h1>{lang.unarmed.title2}</h1>
            <p>{lang.unarmed.content}</p>
            <p>{lang.unarmed.content2}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.employee.title}</h1>
            <p>{lang.employee.content}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.risk.title}</h1>
            <p>{lang.risk.content}</p>
            <p>{lang.risk.content2}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.firstAid.title}</h1>
            <p>{lang.firstAid.content}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.mercedesVito.title}</h1>
            <p>{lang.mercedesVito.content}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.private.title}</h1>
            <h1>{lang.private.title2}</h1>
            <p>{lang.private.content}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>{lang.bodyguardAntalya.title}</h1>
            <h1>{lang.bodyguardAntalya.title2}</h1>
            <p>{lang.bodyguardAntalya.content}</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="keyWords">
          <p>{"keywords: " + lang.keywords.content}</p>
        </div>
      </div>
    </ServicesContainer>
  );
};
