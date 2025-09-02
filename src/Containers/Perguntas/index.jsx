import { useState } from "react";
import { Container, Content, Button, Desc } from "./styles";

function Perguntas() {

    
    const [show, setShow] = useState(null);

    const toggle = (e) => {
        setShow(show === e ? null : e);
    }

    const perg = [
        {
            title: 'O que é a Netflix?',
            desc: 'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.'
        },

        {
            title: 'Quanta custa a Netflix?',
            desc: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras'
        },

        {
            title: 'Onde posso assistir?',
            desc: `Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.`
        },

        {
            title: 'Como faço para cancelar?',
            desc: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.'
        },

        {
            title: 'O que eu posso assistir na Netflix?',
            desc: 'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.'
        },

        {
            title: 'A Netflix é adequada para crianças?',
            desc: `A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.`
        }
    ]

    return (
        <Container>
            <h2>Perguntas frequentes</h2>
            <Content>
                {perg.map((item, index) => (
                    <div key={index}>
                        
                        <Button onClick={() => toggle(index)} $rote={show === index}>
                            {item.title} <i className="fa-solid fa-xmark"></i>
                        </Button>
                        
                        
                        {show === index && (
                            <Desc $display={show === index}>
                                <p>{item.desc}</p>
                            </Desc>
                        )}
                    </div>
                ))}
            </Content>
        </Container>
    )
}

export default Perguntas