
import styled from "styled-components";

export const AboutUsContainer = styled.div`
    height: 1300px;
    width: 100%;
    background-color: #080C0F;
    display : flex;
    justify-content: center;
    z-index: 10;

    .inner-container {
        width: 75%;
        height : 900px;

        .title-container {
            height: 20%;
            background-color: #080C0F;
            
            h1 {
                text-align: center;
                font-weight  : bold ;
                font-size : 70px;
                color: white;
                margin: 0;
                margin-top: 5%;
            }
        }

        .bottom-container {
            display: flex;
            gap : 15%;
            height: 80%;
            flex-direction : column;
            align-items: center;
            
            .image-container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                height: 80%;
                
                img {
                    height: 100%;
                }
            }

            .text-button-container {
                display: flex;
                flex-direction: column;
                width: 90%;
                height: 80%;
           

                p{
                    margin: 0;
                    font-weight: 400;
                    color: white;
                    font-size: 20px;
                }

                .button-container {
                    margin-top: 5%;
                    display: flex;
                    align-items: center;
                    height: 20%;
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
                }

            }

        }
    }

`
