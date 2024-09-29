import styled from "styled-components";

export const ReferencesContainer = styled.div`
  width: auto;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-top: 130px;
  position: relative;
  top: -12em;
  height: auto;

  .inner-container {
    .title-container {
      background-color: white;

      h1 {
        text-align: center;
        font-weight: bold;
        font-size: 50px;
        color: black;
        margin: 0;
        padding-bottom: 1em;
      }
    }

    .bottom-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .images-container {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        align-items: center;
        justify-content: center;
        gap: 1.75em;
        img {
          width: 140px;
          object-fit: fill;
        }
      }
    }
  }
`;
