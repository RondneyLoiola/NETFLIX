import { Button, Container, Content } from "./styles"

const InputFinal = () => {
    return (
        <Container>
            <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <Content>
                <input type="email" placeholder="Email"/>
                <Button>Vamos lá</Button>
            </Content>
        </Container>
    )
}

export default InputFinal