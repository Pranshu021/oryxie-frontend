import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItems from './CarouselItems';
import images from '../../assets/images/carouselImages'

const HomePageCarousel = (props) => {
    var items = [
        {
            name: "Interstellar",
            image: images.interstellar
        },
        {
            name: "Inside Out 2",
            image: images.inside_out_2
        },
        {
            name: "The Office",
            image: images.office
        },
        {
            name: "The Modern Family",
            image: images.modern_family
        }
    ]

    return (
        <Carousel
            autoPlay = {true}
            duration = {600}
            indicators = {false}
            navButtonsAlwaysVisible = {true}
        >
            {
                items.map( (item, i) => <CarouselItems key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default HomePageCarousel;