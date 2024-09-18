
import styled from "styled-components";
import background from "../../../assets/services/5.jpeg"

export const ServicesContainer = styled.div`
    position: relative;
    height: 1000px;
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .background-container {
        background-color: transparent;
        height: 100%;
        width: 100%;
        opacity: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
        
        .background-image {
            position: absolute;
            height: 100%;
            width: 100%;
            /* background-image: url(${background}); */
            background-color: black;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            z-index: -1;
        }  

    }

    .inner-container {
        height: 100%;
        position: absolute;
        opacity: 100%;
        display: flex;
        flex-direction : column;
        box-sizing: border-box;
        justify-content: space-around;
        align-items: center;

        .box-1{
            border-radius: 20px;
            /* background-color: #646b6e; */
            width: 80%;
            display: flex;
            opacity: 100%;
            padding: 20px;
            /* border : 5px solid white; */

            .image-container {
                height: 20%;
                
                img {
                    height : 400px;
                    width: 300px;
                    object-fit: cover;
                    object-position: -80px 0px;
        
                }
            }

            .text-container{
                border-radius: 10px;
                box-sizing: border-box;
                padding: 2%; 
                color : white;

                h1 {
                    text-align: center;
                    margin: 0;
                }

                p {
                    font-weight: bold;
                    font-size: 20px;
                }
            }

        }

        .box-2{
            border-radius: 20px;
            /* background-color: #646b6e; */
            box-sizing: border-box;
            width: 80%;
            display: flex;
            opacity: 100%;
            justify-content: space-between;
            padding: 20px;
            /* border : 5px solid white; */
            position: relative;
            color : white;

            .image-container {
                height: 20%;
                img {
                    height : 400px;
                    width: 300px;
                    object-fit: cover;
                    object-position: 0px -50px;
     
                }
            }
            
            .text-container{
                h1 {
                    text-align: center;
                    
                }
                p{
                    font-weight: bold;
                    font-size: 20px;
                }
            }
        }

    }

`
