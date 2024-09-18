//Styling
import { ServicesContainer } from './Services.style'
//Packages
import { RefObject } from 'react'
//Images
import { images } from './ServicesImages'

interface ServicesProps {
  servicesRef : RefObject<HTMLDivElement>
}

export const Services = ({servicesRef} : ServicesProps) => {

  return (
    <ServicesContainer ref={servicesRef}>
      <div className="background-container">
        <div className="background-image"/>
      </div>
        <div className="inner-container">
        <div className="box-1">
          <div className="image-container">
            <img src={images.Image1} alt="" />
          </div>
          <div className="text-container">
            <h1>Armed Bodyguard Service in Turkey</h1>
            <p>
              All of our Armed Bodyguards consist of specially trained Police officers.
              Due to the authority granted by being a police officer, they have full authority to intervene in events in
              emergency situations and conditions.
            </p>
          </div>
        </div>
        <div className="box-2">
          <div className="text-container">
            <h1>Unarmed bodyguard service in Turkey</h1>
            <p>
              All of our unarmed bodyguards are athletes who are experts in close combat.
              Each bodyguard begins his duty by going through special training.
            </p>
          </div>
          <div className="image-container">
            <img src={images.Image2} alt="" />
          </div>
        </div>
      </div>
    </ServicesContainer>
  )
}

