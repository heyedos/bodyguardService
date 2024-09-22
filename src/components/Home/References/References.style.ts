import styled from "styled-components";

export const ReferencesContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-top: 75px;

  .inner-container {
    padding-top: 3em;
    .title-container {
      background-color: white;

      h1 {
        text-align: center;
        font-weight: bold;
        font-size: 50px;
        color: black;
        margin: 0;
      }
    }

    .bottom-container {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;

      .images-container {
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        align-items: center;
        justify-content: center;
        gap: 1.75em;
        img {
          width: 150px;
          object-fit: fill;
        }
      }
    }
  }
`;
