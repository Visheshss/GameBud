import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import _ from 'lodash'
import { alignPropType } from 'react-bootstrap/esm/types';
import { NavBar } from "../components/navbar/navbar";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        //color: theme.palette.text.primary,
        color: 'white',
        background: '#282c34',
    }
}));

export const ShowGame = () => {
    const classes = useStyles();
    const { id } = useParams();
     const [game, setGame] = useState([]);

     useEffect(() => {
        fetch(`/api/${id}`)
        .then((res) => res.json())
        .then((data) => setGame(data));
  }, [{id}]);

  return (
    <React.Fragment>
        <div>
            <NavBar/>
        </div>
        <div>   
            <div>
                <Grid container spacing={2} className={classes.grid}>                       
                    <Grid item md={4} key={game['title']} >
                        <Paper id='box' className={classes.paper} style={{ position:'relative', display: "flex", justifyContent: "center", borderStyle:'solid', borderRadius:'10px', borderColor:'black', borderWidth:'medium',
                                backgroundImage: `url(${game['image']})`, backgroundRepeat: 'no-repeat', backgroundSize:'100%', height:'150px', backgroundSize: 'cover', alignItems:'center'}} >
                                <ul>
                                    <div className='imgbox'>
                                        {/* <img className='center-fit' src={game.image} style={{borderRadius:'10px', borderColor:'white', height:'100%', width:'100%'}}></img> */}
                                    </div>
                                    <br></br>
                                    <div style={{backgroundColor:'black', position:'relative', bottom:'-105px', width:'200px', height:'40px', borderRadius:'10px', opacity:'0.7'}}></div>
                                    <div style={{justifyContent:'space-between', display:'flex', position:'relative', bottom:'-80px', height:'100%'}}>
                                        <b><li style={{fontSize:'20px', width:'200px', height:'40px',lineHeight:'40px', textAlign:'center' }}>{game['title']}</li></b>
                                    </div>
                                </ul>
                        </Paper>
                    </Grid>                             
                </Grid>
            </div>
            <Link to='/home'>Back to search</Link>
        </div>
    </React.Fragment>
    );
  
}