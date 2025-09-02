import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        border-radius: 10px;
        width: 220px;
        height: 320px;
        object-fit: cover;
        
    }

    h3 {
        color: #fff;
        margin-top: 15px;
        font-size: 1rem;
    }

    @media (max-width: 768px){
        img {
            width: 140px;
            height: 240px;
        }

        h3 {
            font-size: .8rem;
            text-align: center;
            margin-top: 5px;
        }
    }
`