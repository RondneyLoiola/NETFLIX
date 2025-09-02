import styled from "styled-components";

export const Container = styled.div`
    
    overflow: hidden;
    flex-direction: column;
    display: flex;
    width: 60%;
    padding: 2rem 0;

    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }


    .swiper-wrapper {
        display: flex;
        gap: 2.1rem;
    }

    @media (max-width: 768px){
        width: 75%;

        .swiper-wrapper {
            gap: .5rem;
        }

        h2 {
            text-align: center;
        }
    }
`