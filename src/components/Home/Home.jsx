import '../../assets/styles/home.css';
import CarouselDefault from './CarouselDefault/CarouselDefault';
import carouselImages from '../../assets/images/carouselImages';

const Home = (props) => {

    const items = [
        {
            name: "Interstellar",
            image: carouselImages.interstellar
        }, 

        {
            name: "Inside Out 2",
            image: carouselImages.inside_out_2
        }, 

        {
            name: "The Office",
            image: carouselImages.office
        }, 

        {
            name: "Modern Family",
            image: carouselImages.modern_family
        }, 

    ]

    return(
        <div className="home-container">
            
            <CarouselDefault items={items}/>
       
            {/* <div className="col-start-1 lg:col-span-1 sm:col-span-2 xs:col-span-2 carousel-column">
                <div className="grid grid-rows-2">
                    <div className="row-start-1">
                        <h1>Welcome to Homepage</h1>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home;