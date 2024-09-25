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
            height: 530px;
            .image-container {
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
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
