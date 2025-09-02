import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    background-color: #0d0d0d;

    h2 {
        font-size: 2rem;
        padding: 2rem 24rem;
        padding-top: 4rem;
    }


    @media (max-width: 768px){
        height: calc(100vh - 50px);
        align-items: center;

        h2 {
            text-align: center;
            padding: 1rem;
        }
    }

    @media (max-width: 530px){
        height: calc(100vh + 100px);
    }

    @media (max-width: 430px){
        height: calc(100vh + 200px)
    }

    @media (max-width: 380px){
        height: calc(100vh + 250px);
    }

    

    
`

export const Content = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
   
   @media (max-width: 768px){
        flex-direction: column;
        
   }

   @media (max-width: 430px) {
        height: 1000px;
        
   }
`

export const Box = styled.div`
    border-radius: 10px;
    background: #1b1d3d;
    background: linear-gradient(163deg,rgba(27, 29, 61, 1) 41%, rgba(61, 31, 59, 1) 88%);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 270px;
    height: 300px;

    h3 {
        font-size: 1.5rem;
    }

    p {
        opacity: .7;
        margin-top: 1rem;
    }

    @media (max-width: 768px){
        width: 370px;
        height: 200px;

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 360px){
        width: 320px;
        
    }
    

`