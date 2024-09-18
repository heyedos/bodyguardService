//Styling
import { ServicesContainer } from "./Services.style";
//Packages
import { RefObject } from "react";
//Images
import { images } from "./ServicesImages";

interface ServicesProps {
  servicesRef: RefObject<HTMLDivElement>;
}

export const Services = ({ servicesRef }: ServicesProps) => {
  return (
    <ServicesContainer ref={servicesRef}>
      <div className="inner-container">
        <div className="box-1">
          {/* <div className="image-container">
            <img src={images.Image1} alt="" />
          </div> */}
          <div className="text-container">
            <h1>Bodyguard company in Turkey</h1>
            <h1>Bodyguard company in istanbul</h1>
            <p>
              Currently, in addition to our personal bodyguards, we serve nearly
              400 companies throughout Turkey with our nearly 3000 personnel.
              The places where we provide bodyguard and private security
              services include holdings, power plants, factories, stores,
              airports, stadiums, residences, villas, meeting areas and people
              who feel threatened. Our company also provides Bodyguard service
              with luxury vehicles in Turkey.
            </p>
          </div>
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Armed bodyguard Turkey</h1>
            <h1>Armed bodyguard İstanbul</h1>
            <p>
              All of our armed bodyguards consist of members of the Police and
              special forces who are professionals in using weapons. In any
              extraordinary situation and condition, our bodyguards show their
              police IDs and resolve the incidents in a shorter time.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Unarmed bodyguard Turkey</h1>
            <h1>Unarmed bodyguard Istanbul</h1>
            <p>
              Our unarmed bodyguards consist of people who have received close
              defense training and have a strong physique. They have all the
              skills and abilities required to protect guests in undesirable
              situations.
            </p>
            <p>
              Istanbul bodyguard service Code of conduct and business ethics
              policy All our bodyguards undergo orientation training with 3
              different people at our company headquarters before starting their
              duties. We subject all our bodyguards who have successfully passed
              the orientation training to a test that covers all issues related
              to their duties before they can start their duties. Bodyguards who
              successfully pass the entire orientation and testing process begin
              their duties.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Employee performance Audit</h1>
            <p>
              We have an inspection team that inspects all personnel and
              bodyguards. These audits are intended to increase service quality
              and future customer satisfaction.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Risk assessment</h1>
            <p>
              Before the mission, our special teams go to the areas where the
              bodyguard service will be performed, examine the area where the
              mission will be performed and create a risk analysis for the risk
              area. We evaluate your risk analyzes at our headquarters and share
              them with our customers.
            </p>
            <p>None of our bodyguards consume alcohol while on duty.</p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>First aid service</h1>
            <p>
              All of our Bodyguards serving throughout Turkey have received
              first aid training and can provide first aid service to all our
              guests in case of any undesirable incident. In addition, we have a
              team of first aid experts at our company headquarters who are
              ready to go to the scene of the incident and take the guest to the
              hospital when necessary.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Mercedes Vito Cars İstanbul</h1>
            <p>
              In line with the demands of our customers, we provide professional
              bodyguard service with our Vito vehicles in Istanbul.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Private security company turkey</h1>
            <h1>private security company istanbul</h1>
            <p>
              Our company is the only close protection company in Turkey that
              can provide professional private security and bodyguard services.
              We have been providing bodyguard services to hundreds of companies
              and thousands of people every year for 20 years with our expert
              staff. We have bodyguards suitable for every company and person.
              Our company, which complies with world close protection standards
              and has all certificates in this field, is highly recognized in
              many parts of the world, especially in Europe, the Middle East and
              Asia. Our company, which is the best private security company in
              Istanbul and all of Turkey, has been continuing its activities for
              years without interruption. Our private security company, which
              provides services to Hollywood stars, presidents and prime
              ministers in Turkey, provides private security services to all
              parts of Turkey with professional security officers in Turkey and
              Istanbul. As a private security company in Istanbul, we are at
              your service with our security officers who dominate all
              parts of Istanbul.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Bodyguard services in antalya</h1>
            <h1>Private security in antalya</h1>
            <p>
              We provide professional bodyguard service to our guests in
              Antalya. Our company is the only company that can provide
              professional bodyguard service in Antalya with our expert teams.
              Security has always become a need for guests in Antalya, one of
              the most touristic cities in Turkey. Our bodyguards, who are
              familiar with the city structure and life, will serve you in
              Antalya with peace of mind.
            </p>
          </div>
          {/* <div className="image-container">
            <img src={images.Image2} alt="" />
          </div> */}
        </div>
        <div className="keyWords">
          <p>
            keywords: Bodyguard Service in Istanbul. Bodyguard Service in
            Turkey. Close protection Istanbul. Close protection turkey. Close
            protection service Istanbul. Bodyguard company istanbul. Bodyguard
            company turkey. The best bodyguard service in Istanbul. The best
            bodyguard service turkey. Bodyguard Turkey. Bodyguard Istanbul.
            Bodyguard service antalya. Bodyguard Antalya. private security in
            istanbul private security service istanbul private security company
            istanbul private security company turkey Bodyguard service in
            türkiye Bodyguard türkiye
          </p>
        </div>
      </div>
    </ServicesContainer>
  );
};
