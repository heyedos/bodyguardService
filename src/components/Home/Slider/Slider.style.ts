import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  z-index: 100;

  .carousel-root {
    .carousel {
      button {
        display: none;
      }
      .slider-wrapper {
        .slider {
          width: 50%;
          .slide {
            height: 540px;
            .image-container {
              height: 100%;
              img {
                height: 100%;
              }
            }
          }
        }
      }
      .carousel-status {
        display: none;
      }
      .thumbs-wrapper {
        display: none;
      }

      .control-dots {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .carousel-root {
      .carousel {
        .slider-wrapper {
          .slider {
            width: 100%;
          }
        }
      }
    }
  }
`;
