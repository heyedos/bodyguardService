import styled from "styled-components";

export const AboutUsContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-top: 75px;

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
    .title-container {
      margin-top: 0.2em;
      background-color: white;

      h1 {
        text-align: center;
        padding-top: 0.75em;
        font-weight: bold;
        font-size: 50px;
        color: black;
        margin: 0;
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
          font-size: 20px;
          padding-top: 1em;
          margin: 0;
        }

        /* .button-container {
                    display: flex;
                    align-items: center;
                    button {
                        background-color: blue;
                        padding: 15px;
                        border: none;
                        color : white;
                        transition: 0.5s ease-in-out;
                        cursor: pointer;

                        &:hover {
                            box-shadow: 0 0 5px 5px aqua;
                        }

                    }
                } */
      }
    }
  }
`;
