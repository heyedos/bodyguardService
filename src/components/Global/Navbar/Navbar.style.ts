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
    width: 22em;
    padding-left: 2em;
    padding-right: 1em;

    .inner-logo-container {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      align-items: center;

      img {
        width: 32%;
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
    .wpDiv {
      width: 3em;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  .list-container {
    display: flex;
    align-items: center;
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
    width: 26.5em;
    min-width: 300px;
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
`;
