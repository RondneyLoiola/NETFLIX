import { useEffect, useState } from "react"
import Header from "../../Components/Header"
import { Box, Box2, Container, Info, InfoForm } from "./styles"
import { getMovies, getTopMovies } from "../../services/getData"
import Slider from '../../Components/Slider'
import Assinar from "../../Components/Assinar"
import Perguntas from "../Perguntas"
import InputFinal from "../../Components/FormFinal"
import Footer from "../../Components/Footer"


function Home() {

    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()

    useEffect(() => {
        async function getData() {
            Promise.all([
                getMovies(),
                getTopMovies()
            ]).then(([movie, topMovies]) => {
                setMovie(movie),
                    setTopMovies(topMovies)
            }).catch((error) => console.error(error))
        }

        getData()
    }, [])

    return (
        <>
            {movie && (
                <>
                    <Container>
                        <Box>
                            <Header />
                            <Info>
                                <h2>Filmes, séries e muito mais, sem limites</h2>
                                <h3>A partir de R$ 20,90. Cancele quando quiser.</h3>
                                <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                                <InfoForm>
                                    <input type="email" placeholder="Email" />
                                    <button>Vamos lá </button>
                                </InfoForm>
                            </Info>
                        </Box>
                        <Box2>
                            {topMovies && <Slider info={topMovies} title={'Em Alta'}></Slider>}
                        </Box2>
                        <Assinar />
                        <Perguntas />
                        <InputFinal />
                    </Container>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Home