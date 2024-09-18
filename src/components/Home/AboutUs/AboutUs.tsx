//Styling
import { AboutUsContainer } from "./AboutUs.style"
//Images
import AboutUsIMage from "../../../assets/about_us/7.jpeg"
import { RefObject } from "react"

interface AboutUsProps {
    aboutUsRef : RefObject<HTMLDivElement> 
}

export const AboutUs = ({aboutUsRef} : AboutUsProps) => {
  return (
    <AboutUsContainer ref={aboutUsRef} >
        <div className="inner-container">
            <div className="title-container">
                <h1>Bodyguard Services in Turkey</h1>
            </div>
            <div className="bottom-container">
                <div className="image-container">
                    <img src={AboutUsIMage} />
                </div>
                <div className="text-button-container">
                    <p>
                        We have been providing bodyguard services to guests from all over the world in Turkey for 20 years.
                        Currently, we provide bodyguard services to hundreds of companies in Turkey, especially Nike, Toyota and Oppo.
                        The security of the football players and all senior officials was ensured by our company in
                        the Champions League final match played in Turkey in 2023. 
                        Additionally, former German Prime Minister Gerhard Schröder and French President Jacques Chirac are among the people we 
                        have previously provided bodyguard services. 
                        Our bodyguards are professionals in their field. 
                        They are fully trained to produce quick solutions and act even in extraordinary situations and conditions.
                        The focus is to protect the guest without any problems under all circumstances.
                    </p>
                    <div className="button-container">
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        
    </AboutUsContainer>
  )
}
