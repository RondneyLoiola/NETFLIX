import styled from "styled-components";

export const Container = styled.div`
    background-color: #0e0e0e;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 24rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px){
        position: relative;
        padding: 0;
        padding-top: 30px;

        h2 {
            text-align: center;
        }
    }

    @media (max-width: 430px){
        
    }
`

export const Content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    

    @media (max-width: 768px){
        height: 720px;
        padding: .5rem;
        margin: auto;
    }

    @media (max-width: 430px){
        padding: .6rem;
        height: calc(70vh + 300px);
    }
`

export const Button = styled.div`
    width: 100%;
    background-color: #2d2d2d;
    padding: 1rem 2rem;
    border: none;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => props.$rote ? '0.2rem solid #414141' : 'none'};

    &:hover {
        background-color: #414141;
    }

    i {
        font-size: 2rem;
        transform: ${props => props.$rote ? 'rotate(0deg)' : 'rotate(45deg)'};
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin: auto;
    }

`

export const Desc = styled.div`
    background-color: #2D2D2D;
    padding: 1rem 2rem;
    display: ${props => props.$display ? 'block' : 'none'};

    p {
        font-size: 1.4rem;
    }

    @media (max-width: 768px){
        

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 430px){
        
    }

`