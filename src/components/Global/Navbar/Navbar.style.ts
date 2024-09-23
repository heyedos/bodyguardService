import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 120px;
  width: 100%;
  background-color: #080c0f;
  display: grid;
  grid-template-columns: 20% 55% 25%;

  .logo-container {
    //background-color: red;
    max-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .inner-logo-container {
      height: 100%;
      width: 80%;
      display: flex;
      align-items: center;
      gap: 5%;

      img {
        height: 80%;
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
    position: relative;
    align-items: center;
    img {
      width: 50px;
      cursor: pointer;
    }
  }
  .popupNumber {
    color: white;
    position: absolute;
    top: 50px;
    width: 125px;
  }

  .list-container {
    //background-color: orange;
    display: flex;
    justify-content: center;

    .inner-list-container {
      height: 100%;
      width: 80%;
      ul {
        list-style: none;
        padding-inline-start: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        li {
          h3 {
            color: white;
            opacity: 50%;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            border: 15px solid transparent;
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
    max-height: 120px;
    padding-top: 0.5em;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr;
    img {
      width: 42px;
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
`;
