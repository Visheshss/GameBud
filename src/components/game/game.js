import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import _ from 'lodash'
import { alignPropType } from 'react-bootstrap/esm/types';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: 'white',
        background: '#282c34',
    }
}));

export const Game = ({ listOfGames }) => {
    const classes = useStyles();
    if (listOfGames.length>1) {
        return (
            <div>
                <Grid container spacing={2} className={classes.grid}>
                    {listOfGames.map((game) => {
                        return (       
                            <Grid item md={4} key={game.title} >
                                <Link to={`${game.id}`}>
                                    <Paper id='box' className={classes.paper} style={{ position:'relative', display: "flex", justifyContent: "center", borderStyle:'solid', borderRadius:'10px', borderColor:'black', borderWidth:'medium',
                                    backgroundImage: `url(${game.image})`, backgroundRepeat: 'no-repeat', backgroundSize:'100%', height:'150px', backgroundSize: 'cover', alignItems:'center'}} >
                                            <ul>
                                                <div className='imgbox'>
                                                    {/* <img className='center-fit' src={game.image} style={{borderRadius:'10px', borderColor:'white', height:'100%', width:'100%'}}></img> */}
                                                </div>
                                                <br></br>
                                                <div style={{backgroundColor:'black', position:'relative', bottom:'-105px', width:'200px', height:'40px', borderRadius:'10px', opacity:'0.7'}}></div>
                                                <center><div style={{justifyContent:'space-between', display:'flex', position:'relative', bottom:'-80px', height:'100%'}}>
                                                    
                                                        <b><li style={{fontSize:'20px', width:'200px', height:'40px',lineHeight:'40px', textAlign:'center' }}>{game.title}</li></b>
                                                    
                                                </div></center>
                                            </ul>
                                    </Paper>
                                </Link>   
                            </Grid>                                                  
                        );
                    })}                                 
                </Grid>
            </div>
        );
    } else if (listOfGames.length=1) {
     
        return (
            
            <div>
                <Grid container spacing={2} className={classes.grid}>                    
                    <Grid item md={4} key={listOfGames['title']} >
                        <Link to={`${listOfGames['id']}`}> 
                            <Paper id='box' className={classes.paper} style={{ position:'relative', display: "flex", justifyContent: "center", borderStyle:'solid', borderRadius:'10px', borderColor:'black', borderWidth:'medium',
                                    backgroundImage: `url(${listOfGames['image']})`, backgroundRepeat: 'no-repeat', backgroundSize:'100%', height:'150px', backgroundSize: 'cover', alignItems:'center'}} >
                                    <ul>
                                        <div className='imgbox'>
                                            {/* <img className='center-fit' src={game.image} style={{borderRadius:'10px', borderColor:'white', height:'100%', width:'100%'}}></img> */}
                                        </div>
                                        <br></br>
                                        <div style={{backgroundColor:'black', position:'relative', bottom:'-105px', width:'200px', height:'40px', borderRadius:'10px', opacity:'0.7'}}></div>
                                        <div style={{justifyContent:'space-between', display:'flex', position:'relative', bottom:'-80px', height:'100%'}}>
                                            
                                                <b><li style={{fontSize:'20px', width:'200px', height:'40px',lineHeight:'40px', textAlign:'center' }}>{listOfGames['title']}</li></b>
                                            
                                        </div>
                                    </ul>
                            </Paper>
                        </Link> 
                    </Grid>                                                     
                </Grid>
            </div>
            
            )
    } else {
        return (
            <div>   
                <h1>We couldn't find the game you're looking for.</h1>
            </div>
        )
        
    }

    
};

