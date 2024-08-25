import { Paper, Button, Box } from '@mui/material';
import '../../assets/styles/home.css';


const CarouselItems = (props) => {

    return (
        <Paper className="carousel-paper flex flex-row content-center" elevation={12}>
            <div className="basis-1/4"></div>
            <div className="basis-1/2 flex content-center">
                <img src={props.item.image} className="object-fill carousel-image pb-2 pt-2"/>
            </div>
            <div className="basis-1/4"></div>
        </Paper>
    )
}

export default CarouselItems;