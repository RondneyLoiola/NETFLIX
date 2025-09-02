import Card from '../Card'
import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'



function Slider({ info, title }) { //o item é o filme e o index é a posição do filme, para não vir repetido
    
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper grabCursor={true} spaceBetween={0} slidesPerView={'auto'} className='swiper' navigation={true}>
                {
                    info.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    )
}

export default Slider
