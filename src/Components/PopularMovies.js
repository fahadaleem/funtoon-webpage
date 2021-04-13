import React from "react"
import Container from '@material-ui/core/Container'
import Explosion from "./images/explosion.svg"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const PopularMovies = ()=>{
    return(
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <img src={Explosion} />
                <Typography variant="h4" color="initial">POPOLARI QUESTA SETTIMANA</Typography>
            </Grid>
        </Container>
    )
}


export default PopularMovies