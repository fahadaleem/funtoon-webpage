import React from "react"
import TopAppBar from "./Components/Navbar"
import "./App.css"
import Header from "./Components/Header"
import FeaturedMovies from "./Components/FeaturedMovies"
import {Divider, Box} from "@material-ui/core"
import PopularMovies from "./Components/PopularMovies"

const FuntoonApp = ()=>{
    return(
       <div>
       <TopAppBar />
       <Header />
       <FeaturedMovies />
       <Box my={3}>
       <Divider />
       </Box>
       <PopularMovies />

       </div>
    )
}


export default FuntoonApp