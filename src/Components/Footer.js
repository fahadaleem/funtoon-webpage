import React from "react"
import Container from '@material-ui/core/Container'
import {makeStyles} from "@material-ui/styles"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

import Typography from '@material-ui/core/Typography'
import { Divider } from "@material-ui/core"
import logo from "./images/logo.jpg"
import img1 from "./images/play.jpg"
import img2 from "./images/app.png"



const useStyles = makeStyles({
    footer:{
        backgroundColor:"black",
        position:"relative",
        bottom:"-20px"

    },
    links:{
        color:"white",
        fontSize:"15px",
        display:"inline-block",
        margin:"0 15px"
    },
    languageSelect:{
        backgroundColor:"white",
        width:"150px",
        borderBottom:"none"
    },
    languageselectiondiv:{
        backgroundColor:"white",
        width:"200px",
        padding:"5px 15px"
    }
})

const Footer = ()=>{
    const classes = useStyles()
    const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <Container maxWidth="xl" className={classes.footer}>
         <Grid
           container
           spacing={1}
           direction="row"
           justify="flex-start"
           alignItems="center"
           alignContent="stretch"
           wrap="nowrap"
         >
           <Grid item lg={9} sm={12} xs={12}>
                <Box>
                    <Typography variant="h6" color="initial" className={classes.links}>TERMINI E CONDITONZIN LEGALI</Typography>
                    <Typography variant="h6" color="initial" className={classes.links}>PRIVACY AND COOKIE POLICY</Typography>
                    <Typography variant="h6" color="initial" className={classes.links}>FAQ</Typography>
                    <Typography variant="h6" color="initial" className={classes.links}>Q&A</Typography>
                </Box>
           </Grid>
           <Grid item lg={3} sm={12} xs={12}>
           <div className={classes.languageselectiondiv}>
           <label>Lingua</label>
           <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          className={classes.languageSelect}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        </div>
           </Grid>
         </Grid>
         <Box py={1}>
         <Divider style={{backgroundColor:"white"}}/>
         <Grid container spacing={2} style={{marginTop:"20px"}}>
           <Grid item lg={6}>
           <Grid container spacing={2}>
               <Grid item lg={2}>
               <img src={logo} style={{padding:"5px", height:"80px", width:"80px"}} />
               </Grid>
               <Grid item lg={9}>
               <Typography style={{color:"white"}} variant="p" color="initial" display="inline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Typography>
               </Grid>
           </Grid>
       </Grid>
       <Grid item lg={4}>
            <Grid container>
                <Grid item lg={6}>
                    <img src={img2} style={{width:"100%"}}/>
                </Grid>
                <Grid item lg={6} style={{paddingLeft:"15px"}}>
               <Typography style={{color:"white"}} variant="p" color="initial" display="inline">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Grid>
            </Grid>
       </Grid>
         </Grid>
         </Box>
        </Container>
    )
}

export default Footer