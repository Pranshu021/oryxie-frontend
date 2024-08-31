import { Carousel, Typography, Button } from "@material-tailwind/react";
import '../../../assets/styles/home.css';

const HomePageCarousel = (props) => {
  return (
    <div className="carousel-container">
      <div className="carousel-content absolute left-0 right-0 z-10 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4 rounded-xl carousel-content-container pt-10 pb-10 shadow-xl">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            ORYXIE
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80 carousel-content">
            Bringing traditional movie watching experience seamlessly to your
            devices.
          </Typography>
          <div className="flex justify-center gap-2">
            <Button size="lg" color="white">
              Signup
            </Button>
            <Button size="lg" color="white">
              Login
            </Button>
          </div>
        </div>
      </div>
      <Carousel className="relative h-full overflow-hidden" autoplay={true} autoplayDelay={4000} loop={true} prevArrow={({handlePrev}) => {
        <></>}} nextArrow={({handleNext}) => 
        <></>}>
        {props.items.map((item) => {
          return (
            <div className="relative h-full w-full">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover carousel-images"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
