import styled from "styled-components";
import Background from '../../assets/img/background.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
`

export const Box = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    position: relative;

    @media (max-width: 768px){
        background-position: center;
        background-size: cover;
    }
`

export const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    h2 {
        font-size: 4.5rem;
        line-height: 1.11122;
    }

    h3 {
        margin: 1.5rem;
        font-size: 1.2rem;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
    }
    
    @media (max-width: 768px){
        

        h2 {
            font-size: 1.7rem;
            width: 400px;
            padding: 0rem .2rem;
        }

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }
    }

    @media (max-width: 380px){
        h2 {
            padding: 0rem .8rem;
            
        }

        p {
            padding: 0  .8rem;
        }
        
    }

`

export const InfoForm = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;

    input {
        background-color: #181616;
        border: 1px solid #5E5E5E;
        padding: 12px;
        border-radius: 5px;
        font-size: 1rem;
        outline: none;
        width: 500px;
    }

    button {
        background-color: #E50914;
        padding: 1rem;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    @media (max-width: 768px) {
    
        flex-direction: column;
        align-items: center;

        input {
            width: 350px;
        }

        button {
            padding: 0.6rem;
            font-size: 1rem;
            width: 100px;
        }
    }
`

export const Box2 = styled.div`
    background-color: #0e0e0e;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    align-items: center;
`



