import '../../assets/styles/home.css';
import HomePageCarousel from './HomePageCarousel/HomePageCarousel';
import carouselImages from '../../assets/images/carouselImages';
import NavigationBar from '../Navbar/NavigationBar';


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
        <div className="home-container h-full w-full">
            <NavigationBar />
            <HomePageCarousel items={items}/>
        </div>
    )
}

export default Home;