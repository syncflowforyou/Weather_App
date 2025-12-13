import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"
import hotImg from './assets/Images/hot.jpg';
import coldImg from './assets/Images/cold.jpg';
import rainImg from './assets/Images/Rain.jpg';
import AcUnitIcon from '@mui/icons-material/AcUnit';//cold
import SunnyIcon from '@mui/icons-material/Sunny';//hot
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';//rain



export default function InfoBox({ info }) {

    const HOT_URL = hotImg
    const COLD_URL = coldImg
    const RAIN_URL = rainImg

    const img_urg = "https://plus.unsplash.com/premium_photo-1661809018780-b35c2c6106c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHl8ZW58MHx8MHx8fDA%3D"
    return (
        <>
            <div className='cardContainer' >
                <Card sx={{ maxWidth: 345, width: '90%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} {
                                    info.humidity > 80
                                        ? <ThunderstormIcon />
                                        : info.temp > 15
                                            ? <SunnyIcon />
                                            : <AcUnitIcon />
                                }
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>Temperature = {info.temp}&deg;C</p>
                                <p>Humidity = {info.humidity}</p>
                                <p>Weather = {info.weather}</p>
                                <p>Latitude = {info.latitude}</p>
                                <p>Longitude = {info.longitude}</p>
                                <p>FeelsLike = {info.feelsLike}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}