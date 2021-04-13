import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from "@material-ui/styles"
import Box from '@material-ui/core/Box'

import img1 from "./images/rounded-img.jpg"
import img2 from "./images/panda.jpg"
import img3 from "./images/rounded-img2.jpg"


import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    cardImage:{
        height:"150px",
        width:"150px",
    },
    imageCenter:{
        textAlign:"center"
    },
    box:{
        height:"150px",
        width:"150px",
        borderRadius:"50%",
        overflow:"hidden"
    },
    category:{
        fontSize:"1.8rem",
        textAlign:"left",
    },
    categoryC:{
        color:"pink",
        fontWeight:"normal",
        textAlign:"left"
    },
    categoryB:{
        color:"blue",
        fontWeight:"normal",
        textAlign:"left"

    },
    padding:{
        padding:"20px"
    }, 
    label:{
        backgroundColor:"orange", 
        padding:"5px 10px",
        borderRadius:"50%",
        position:"relative",
        top:"-120px",
        left:"-70px",
        color:"white"
    }
})


const PopularMoviesCarousel = ()=>{

    const classes = useStyles()

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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

    return(
        <Slider {...settings}>
            <div>
                <Grid container  justify="space-between" align="center">
                  <Grid item lg={5}>
                    <Box className={classes.box}>
                        <img src={img1} className={classes.cardImage} />
                    </Box>
                    <label for="count" className={classes.label}>1</label>
                  </Grid>
                  <Grid item lg={7}>
                        <Box my={2} mx={2}>
                            <Typography variant="h6" color="initial" className={classes.category}>- Sunny</Typography>
                            <Typography variant="h6" color="initial" className={classes.categoryC}>- Category C</Typography>
                            <Typography variant="h6" color="initial" className={classes.categoryB}>- Category B</Typography>
                        </Box>
                  </Grid>
                </Grid>
            </div>
            <div>
            <Grid container  justify="space-between" align="center">
              <Grid item lg={5}>
                <Box className={classes.box}>
                    <img src={img2} className={classes.cardImage} />
                </Box>
                <label for="count" className={classes.label}>5</label>
              </Grid>
              <Grid item lg={7}>
                    <Box my={2} mx={2}>
                        <Typography variant="h6" color="initial" className={classes.category}>- Sunny</Typography>
                        <Typography variant="h6" color="initial" className={classes.categoryC}>- Category C</Typography>
                        <Typography variant="h6" color="initial" className={classes.categoryB}>- Category B</Typography>
                    </Box>
              </Grid>
            </Grid>
        </div>
        <div>
        <Grid container  justify="space-between" align="center">
          <Grid item lg={5}>
            <Box className={classes.box}>
                <img src={img3} className={classes.cardImage} />
            </Box>
            <label for="count" className={classes.label}>3</label>
          </Grid>
          <Grid item lg={7}>
                <Box my={2} mx={2}>
                    <Typography variant="h6" color="initial" className={classes.category}>- Sunny</Typography>
                    <Typography variant="h6" color="initial" className={classes.categoryC}>- Category C</Typography>
                    <Typography variant="h6" color="initial" className={classes.categoryB}>- Category B</Typography>
                </Box>
          </Grid>
        </Grid>
    </div>
    <div>
    <Grid container  justify="space-between" align="center">
      <Grid item lg={5}>
        <Box className={classes.box}>
            <img src={img3} className={classes.cardImage} />
        </Box>
        <label for="count" className={classes.label}>3</label>
      </Grid>
      <Grid item lg={7}>
            <Box my={2} mx={2}>
                <Typography variant="h6" color="initial" className={classes.category}>- Sunny</Typography>
                <Typography variant="h6" color="initial" className={classes.categoryC}>- Category C</Typography>
                <Typography variant="h6" color="initial" className={classes.categoryB}>- Category B</Typography>
            </Box>
      </Grid>
    </Grid>
</div>
<div>
<Grid container  justify="space-between" align="center">
  <Grid item lg={5}>
    <Box className={classes.box}>
        <img src={img3} className={classes.cardImage} />
    </Box>
    <label for="count" className={classes.label}>3</label>
  </Grid>
  <Grid item lg={7}>
        <Box my={2} mx={2}>
            <Typography variant="h6" color="initial" className={classes.category}>- Sunny</Typography>
            <Typography variant="h6" color="initial" className={classes.categoryC}>- Category C</Typography>
            <Typography variant="h6" color="initial" className={classes.categoryB}>- Category B</Typography>
        </Box>
  </Grid>
</Grid>
</div>
        </Slider>
    )
}

export default PopularMoviesCarousel