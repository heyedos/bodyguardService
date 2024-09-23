import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  z-index: 999;
  bottom: 0;
  width: 100%;
  margin-top: 200px;
  background-color: gray;
  padding-top: 1em;
  padding-bottom: 1.5em;
  .Footer {
    padding-left: 20em;
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
`;
