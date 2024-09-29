import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  background-color: gray;
  padding-top: 1em;
  padding-bottom: 1.5em;
  display: flex;
  justify-content: center;
  .Footer {
    padding-left: 0;
    h3 {
      margin: 0;
    }
  }
  .footer-container {
    display: flex;
    gap: 10em;
    .contact {
      p {
        color: white;
        margin-top: 16px;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    .adress {
      p {
        margin-top: 10px;
      }
      width: 30%;
      color: white;
    }
  }
  @media only screen and (max-width: 1000px) {
    .Footer {
      padding-left: 3em;
    }
    .footer-container {
      gap: 3em;
    }
  }
  @media only screen and (max-width: 500px) {
    .footer-container {
      flex-direction: column;
      gap: 0;
      .adress {
        width: 90%;
      }
    }
  }
`;
