import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import _ from 'lodash'

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
        //background: theme.palette.dark
        background: 'grey'
    }
}));

export const Game = ({ listOfGames }) => {
    const classes = useStyles();
    if(listOfGames.length>1) {
        return (
            <div>
                <Grid container spacing={2} className={classes.grid}>
                    {listOfGames.map((game) => {
                        return (
                            <Grid item md={4} key={game.title}>
                                <Paper id='box' className={classes.paper} style={{ display: "flex", justifyContent: "flex-end" }} >
                                        <ul>
                                            <div className='imgbox'>
                                                <img className='center-fit' src={game.image} style={{width:'px'}}></img>
                                            </div>
                                            <li>{game.title}</li>
                                        </ul>
                                </Paper>
                            </Grid>
                        );
                    })}                                 
                </Grid>
            </div>
        );
    } else {
     
        return (
            
            <div>
                <center>
                <Grid container spacing={2} className={classes.grid}>                       
                            <Grid item md={4} key={listOfGames['title']}>
                                <Paper id='box' className={classes.paper} style={{ display: "flex", justifyContent: "flex-end" }} >
                                        <ul>
                                            <div className='imgbox'>
                                                <img className='center-fit' src={listOfGames['image']} style={{width:'px'}}></img>
                                            </div>
                                            <li>{listOfGames['title']}</li>
                                        </ul>
                                </Paper>
                            </Grid>                             
                </Grid>
                </center>
            </div>
            
            )
            // <div>
            //     <Grid container spacing={2} className={classes.grid}>
            //         return (
            //             <Grid item md={4} key={singleGame.title}>
            //                     <Paper id='box' className={classes.paper} style={{ display: "flex", justifyContent: "flex-end" }} >
            //                             <ul>
            //                                 <div className='imgbox'>
            //                                     <img className='center-fit' src={singleGame.image} style={{width:'px'}}></img>
            //                                 </div>
            //                                 <li>{singleGame.title}</li>
            //                             </ul>
            //                     </Paper>
            //                 </Grid>
            //         )
            //     </Grid>
            // </div>
    }

    
};

