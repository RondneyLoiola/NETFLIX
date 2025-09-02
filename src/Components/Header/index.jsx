import { Button, Container, Logo } from "./styles"
import NetFlixLOGO from '../../assets/img/logo.png'

function Header(){
    return(
        <Container>
            <Logo src={NetFlixLOGO} alt="Logo-NETFLIX"/>
            <Button>Entrar</Button>
        </Container>
    )
}

export default Header