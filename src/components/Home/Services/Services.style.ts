import styled from "styled-components";

export const ServicesContainer = styled.div`
  position: relative;
  padding-top: 125px;
  top: -10em;
  width: 100%;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .background-container {
    background-color: transparent;
    height: 100%;
    width: 100%;
    opacity: 100%;

    top: 0;
    z-index: -1;
  }

  .inner-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;

    .box-1 {
      border-radius: 20px;
      width: 80%;
      display: flex;
      padding: 20px;
      padding-bottom: 5em;
      align-items: center;

      .text-container {
        border-radius: 10px;
        box-sizing: border-box;
        padding: 2%;
        color: black;

        h1 {
          text-align: center;
          margin: 0;
          padding-top: 0.5em;
          font-size: 30px;
        }

        p {
          font-weight: bold;
          font-size: 14px;
        }
      }
    }

    .box-2 {
      border-radius: 20px;
      box-sizing: border-box;
      width: 80%;
      display: flex;

      justify-content: center;
      padding: 10px;
      color: black;

      .text-container {
        h1 {
          text-align: center;
          font-size: 30px;
        }
        p {
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
    .ImgBoth {
      width: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 1em;
    }
    .keyWords {
      width: 78%;
      p {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .ImgBoth {
      flex-direction: column;
      width: 90%;
      img {
        width: 100%;
      }
      .text-container {
        width: 90%;
      }
    }
    .box-1 {
      flex-direction: column;
      img {
        width: 100%;
      }
    }
  }
`;
