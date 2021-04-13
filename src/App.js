import React from "react"
import TopAppBar from "./Components/Navbar"
import "./App.css"
import Header from "./Components/Header"
import FeaturedMovies from "./Components/FeaturedMovies"
import {Divider, Box} from "@material-ui/core"
import Footer from "./Components/Footer"
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
       <Box my={3}>
       <Divider />
       </Box>
      <Footer />
       </div>
    )
}


export default FuntoonApp