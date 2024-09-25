import styled from "styled-components";
import background from "../../../assets/services/5.jpeg";

export const ServicesContainer = styled.div`
  position: relative;
  padding-top: 50px;
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
      /* background-color: #646b6e; */
      width: 80%;
      display: flex;

      padding: 20px;
      /* border : 5px solid white; */

      /* .image-container {
        height: 20%;

        img {
          height: 400px;
          width: 300px;
          object-fit: cover;
          object-position: -80px 0px;
        }
      } */

      .text-container {
        border-radius: 10px;
        box-sizing: border-box;
        padding: 2%;
        color: black;

        h1 {
          text-align: center;
          margin: 0;
          padding-top: 1em;
        }

        p {
          font-weight: bold;
          font-size: 20px;
        }
      }
    }

    .box-2 {
      border-radius: 20px;
      /* background-color: #646b6e; */
      box-sizing: border-box;
      width: 80%;
      display: flex;

      justify-content: center;
      padding: 20px;
      /* border : 5px solid white; */
      color: black;

      /* .image-container {
                height: 20%;
                img {
                    height : 400px;
                    width: 300px;
                    object-fit: cover;
                    object-position: 0px -50px;
     
                }
            } */

      .text-container {
        h1 {
          text-align: center;
        }
        p {
          font-weight: bold;
          font-size: 20px;
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
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .ImgBoth {
      flex-direction: column;
      .text-container {
        width: 90%;
      }
    }
  }
`;
