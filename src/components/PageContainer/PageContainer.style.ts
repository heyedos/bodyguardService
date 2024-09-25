import background from "../../assets/background/smooth-black-concrete-wall-background.jpg";

import styled from "styled-components";

interface PageContainerDivProps {
  isAtTop: boolean;
  scrollY: number;
}

export const PageContainerDiv = styled.div<PageContainerDivProps>`
  display: grid;
  position: absolute;
  font-family: "Roboto Slab", serif;
  /* background-image: url(${background}); */
  background-repeat: no-repeat;
  background-size: cover;

  .navbar {
    position: fixed;
    top: 0;
    z-index: 999;
  }

  .home {
    margin-top: 130px;
  }

  .scroll-to-top {
    position: fixed;
    opacity: ${({ isAtTop }) => (isAtTop ? "0" : "100")};
    bottom: 100px;
    right: 100px;
    height: 70px;
    width: 70px;
    border-radius: 100%;
    background-color: blue;
    color: white;
    transition: 1s ease-in-out;
    cursor: ${({ isAtTop }) => (isAtTop ? "default" : "pointer")};
    border: none;
    z-index: 999;

    &:hover {
      box-shadow: 0 0 5px 5px aqua;
    }

    svg {
      font-size: 25px;
    }
  }
`;
