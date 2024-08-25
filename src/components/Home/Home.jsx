import '../../assets/styles/home.css';
import Navbar from '../Navbar/Navbar';
import HomePageCarousel from './HomePageCarousel';
import interstellar from '../../assets/images/carouselImages/interstellar.jpg';


const Home = (props) => {
    return(
        <div className="lg:grid lg:grid-cols-1 mx-auto home-container">
            <div className="col-start-1 lg:col-span-1 sm:col-span-2 xs:col-span-2 carousel-column">
                <div className="grid grid-rows-2">
                    <div className="row-start-1">
                        <HomePageCarousel/>
                    </div>
                </div>
            </div>
            {/* <div className="col-start-2 lg:col-span-1 sm:col-span-2 xs:col-span-2 carousel-column">
                <HomePageCarousel/>
            </div> */}
        </div>

    )
}

export default Home;