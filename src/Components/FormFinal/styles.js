import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #0e0e0e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 2rem;
    
    P {
        color: #fff;
        text-align: center;
    }

    @media (max-width: 768px){
        height: calc(500px - 200px);
        
        position: relative;
    }
`

export const Content = styled.div`
    display: flex;   
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    input {
        background-color: #181616;
        border: 1px solid #5E5E5E;
        padding: 12px;
        border-radius: 5px;
        font-size: 1rem;
        outline: none;
        width: 500px;
    }

    @media (max-width: 768px){
        flex-direction: column;
        

        input {
            width: 380px;
        }
    }

    @media (max-width: 360px){
        input {
            width: 350px;
        }
    }
`

export const Button = styled.button`
    background-color: #E50914;
    padding: .8rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
`