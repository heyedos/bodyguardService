//Styling
import { SliderContainer } from "./Slider.style";
import "react-responsive-carousel/lib/styles/carousel.css";
//Packages
import { Carousel } from "react-responsive-carousel";

import { Photos } from "./SliderPhotos";

export const BottomSlider = () => {
  if (Photos)
    return (
      <SliderContainer>
        <Carousel
          stopOnHover={true}
          width={"100%"}
          autoPlay
          emulateTouch
          infiniteLoop
          interval={3500}
        >
          {Photos.map((photo, index) => {
            return (
              <div key={index} className="image-container">
                <img src={photo} />
              </div>
            );
          })}
        </Carousel>
      </SliderContainer>
    );
  else return <div>No Photos Found</div>;
};
