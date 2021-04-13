import React from "react"
import Container from '@material-ui/core/Container'
import Explosion from "./images/explosion.svg"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PopularMoviesCarousel from "./PopularMoviesCarousel"


const PopularMovies = ()=>{
    return(
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item lg={12}>
                <img src={Explosion} />
                <Typography variant="h4" color="initial" display="inline">POPOLARI QUESTA SETTIMANA</Typography>
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                    <PopularMoviesCarousel />
                </Grid>
            </Grid>

        </Container>
    )
}


export default PopularMovies