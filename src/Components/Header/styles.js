import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        justify-content: center;
        gap: 1.5rem;
    }

`

export const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    margin-left: 20rem;

    @media (max-width: 768px){
        width: 7rem;
        
    }
`

export const Button = styled.button`
    background-color: #E50914;
    border: none;
    border-radius: 5px;
    font-size: .9rem;
    font-weight: bold;
    width: 4rem;
    height: 2.2rem;
    margin-right: 20rem;

    @media (max-width: 768px){
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`