import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .navBAR {
    position: fixed;
    top: 0;
    z-index: 995;
    width: 100%;
    background-color: #080c0f;
    display: flex;
    align-items: center;
    gap: 0;
    height: 120px;
    padding-top: 10px;
  }
  .logo-container {
    //background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27%;
    padding-left: 0;
    padding-right: 0;

    .inner-logo-container {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      align-items: center;

      img {
        width: 22%;
        min-width: 25px;
      }

      .title-container {
        display: flex;
        flex-direction: column;
        white-space: nowrap;

        h2 {
          margin: 0;
          color: white;
          cursor: default;
          font-size: 21px;
        }
      }
    }
  }
  .wpIcon {
    display: flex;
    align-items: center;
    gap: 1em;
    position: relative;
    p {
      color: white;
      opacity: 50%;
      position: absolute;
      bottom: -2em;
      right: 3em;
    }
    .wpDiv {
      width: 4em;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  .rightIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .list-container-2 {
    display: flex;
    align-items: center;
    width: 48%;
    .inner-list-container {
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 2em;
        padding: 0;
        margin: 0;

        li {
          h3 {
            color: white;
            opacity: 50%;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            border-radius: 100%;
            &:hover {
              opacity: 100%;
            }
          }
        }
      }
    }
  }

  .flag-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 0.25em;
    width: 25%;
    max-width: 500px;
    padding-right: 1em;
    img {
      width: 100%;
      border-radius: 100%;
      border: 2px solid transparent;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 10px 3px white;
      }
    }

    .active {
      border: 2px solid white;
    }
  }
  .arrowIcon {
    width: 25px;
  }
  .close {
    transform: rotate(180deg);
  }

  @media only screen and (max-width: 1200px) {
    height: 75px;
    gap: 0;
    width: 100%;
    .wpIcon {
      padding-right: 0.5em;
      gap: 5px;
      p {
        opacity: 100%;
        bottom: -1.5em;
        right: 2.5em;
      }
      .wpDiv {
        width: 2.75em;
        position: absolute;
        top: 0.75em;
        right: 9em;
      }
    }
    .logo-container {
      width: 10%;
      padding-right: 0.5em;
      padding-left: 0.5em;
      .inner-logo-container {
        width: 100%;
        img {
          width: 80%;
        }
        .title-container {
          display: none;
        }
      }
    }
    .list-container-2 {
      display: flex;
      align-items: center;
      width: 90%;
      .inner-list-container {
        width: 100%;
        ul {
          gap: 10px;
          li {
            h3 {
              font-size: 15px;
              opacity: 100%;
            }
          }
        }
      }
    }
    .flagW {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25em;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      background-color: #080c0f;
      padding-top: 5px;
      img {
        width: 5%;
        border-radius: 100%;
        border: 2px solid transparent;
        transition: 0.5s ease-in-out;
        cursor: pointer;

        &:hover {
          box-shadow: 0px 0px 10px 3px white;
        }
      }

      .active {
        border: 2px solid white;
      }
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 1200px) {
    width: 100%;
    .flagW {
      img {
        width: 3%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    .logo-container {
      display: none;
      .inner-logo-container {
        display: none;
        img {
          width: 0;
        }
        .title-container {
          display: none;
        }
      }
    }
  }
`;
