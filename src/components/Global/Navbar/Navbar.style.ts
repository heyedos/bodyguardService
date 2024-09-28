import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #080c0f;
  display: flex;
  align-items: center;
  gap: 2em;
  height: 130px;
  .logo-container {
    //background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27%;
    padding-left: 1em;
    padding-right: 1em;

    .inner-logo-container {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      align-items: center;

      img {
        width: 22%;
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
    .arrows {
      position: absolute;
      top: 90%;
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
    //background-color: blue;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 0.25em;
    width: 25%;
    max-width: 500px;
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
  @media only screen and (max-width: 1000px) {
    height: 75px;
    gap: 0;
    .wpIcon {
      padding-right: 0.5em;
      gap: 5px;
      .wpDiv {
        width: 2em;
      }
    }
    .logo-container {
      width: 10%;
      padding-right: 0;
      .inner-logo-container {
        width: 100%;
        img {
          width: 100%;
        }
        .title-container {
          width: 0;
          visibility: hidden;
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
      //background-color: blue;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 0.2em;
      height: 13em;
      width: 0;
      position: absolute;
      top: 4em;
      right: 3em;
      img {
        width: 18px;
      }
    }
  }
`;
