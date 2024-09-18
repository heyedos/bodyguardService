
import styled from "styled-components";

export const AboutUsContainer = styled.div`
    width: 100%;
    background-color: white;
    display : flex;
    justify-content: center;
    z-index: 10;

    .inner-container {
        width: 75%;

        .title-container {
            margin-top: 1em;
            background-color: white;
            
            h1 {
                text-align: center;
                padding-top: .5em;
                font-weight  : bold ;
                font-size : 50px;
                color: black;
                margin: 0;
            }
        }

        .bottom-container {
            display: flex;
            flex-direction : column;
            align-items: center;
            
            .image-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .text-button-container {
                display: flex;
                flex-direction: column;
                p{
                    font-weight: 400;
                    color: black;
                    font-size: 20px;
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

`
