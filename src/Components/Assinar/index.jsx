import { Box, Container, Content } from "./styles";

function Assinar() {

    const info = [
        {
            title: 'Aproveite na TV',
            desc: 'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.'
        },

        {
            title: 'Baixe séries para assistir offline',
            desc: 'Salve seus títulos favoritos e sempre tenha algo para assistir.'
        },

        {
            title: 'Assista onde quiser',
            desc: 'Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.'
        },

        {
            title: 'Crie perfis para crianças',
            desc: 'Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.'
        }
    ]

    return (
        <Container>
            <h2>Mais motivos para assinar</h2>
            <Content>
                {
                    info.map((item, index) => (
                        <Box key={index}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Box>

                    ))
                }
            </Content>

        </Container>
    )
}

export default Assinar