import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import movie1 from "./images/movie1.jpg"
import movie2 from "./images/movie2.jpg"
import movie3 from "./images/movie3.jpg"
import movie4 from "./images/movie4.jpg"
import movie5 from "./images/movie5.jpg"
import movie6 from "./images/movie6.jpg"
import movie7 from "./images/movie7.jpg"
import movie8 from "./images/movie8.jpg"


import {Container, Grid, Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"
import "../App.css"

const useStyles = makeStyles({
    cardImage:{
        height:"350px",
        width:"100%",
        borderRadius:"15px"
    },
    imageCenter:{
        textAlign:"center"
    }
})


export default function CarouselSlider() {

    const classes = useStyles()

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        outerHeight:0,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div className="container">
          <Slider {...settings}>
                <div>
                    <Box className={classes.imageCenter}>
                        <img src={movie1} className={classes.cardImage} />
                    </Box>
                </div>
                <div>
                    <Box>
                        <img src={movie2} className={classes.cardImage} />
                    </Box>
                </div>
                <div>
                    <Box>
                        <img src={movie3} className={classes.cardImage}/>
                    </Box>
                </div>
                <div>
                <Box>
                    <img src={movie4} className={classes.cardImage}/>
                </Box>
            </div>
            <div>
            <Box>
                <img src={movie5} className={classes.cardImage}/>
            </Box>
        </div>
        <div>
        <Box>
            <img src={movie6} className={classes.cardImage}/>
        </Box>
    </div>
    <div>
    <Box>
        <img src={movie7} className={classes.cardImage}/>
    </Box>
</div>
<div>
<Box>
    <img src={movie8} className={classes.cardImage}/>
</Box>
</div>

          </Slider>
        </div>
      );
}