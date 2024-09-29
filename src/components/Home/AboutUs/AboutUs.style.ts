import styled from "styled-components";

export const AboutUsContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-top: 120px;
  position: relative;
  top: -5em;

  .inner-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;

    img {
      height: 400px;
      width: 300px;
      object-fit: contain;
    }
    /* .mid-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      width: auto;
    } */
    .mid-container {
      display: flex;
      flex-direction: column;
      gap: 2em;
      padding-top: 1em;
    }
    .title-container {
      background-color: white;

      h1 {
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        color: black;
        margin: 0;
        padding-top: 1em;
      }
    }

    .bottom-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .text-button-container {
        display: flex;
        flex-direction: column;
        p {
          font-weight: 400;
          color: black;
          font-size: 16px;
          margin: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .inner-container {
      flex-direction: column;
      width: 90%;
      gap: 0;
      .rightImg {
        padding-top: 20px;
      }
      img {
        width: 100%;
      }
    }
  }
`;
