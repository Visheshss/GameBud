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
    <React.Fragment >
        <div>
            <NavBar/>
        </div>
        <div style={{position: 'absolute', left:'50px', top:'130px', width:'600px'}}>   
            <center>
                <h1 class = 'white' style = {{position: 'relative', fontSize:'50px'}}>{game['title']}</h1>
                <h4 class = 'white' style = {{position: 'relative', top: '5px'}}>{game['genre']} | {game['platform']}</h4>
                <h2 class = 'white' style = {{position: 'relative', width: '400px', top:'50px'}}>{game['description']}</h2>
                <a href = {game['download']} class='button button1' style = {{position: 'relative', top:'100px', width:'300px'}}>Download</a>
            </center>
        </div>
        <div style = {{position:'absolute', right: '50px',
                top: '130px'}}>
            <center>
                <img src = {game['image']} style = {{width: '600px', position:'relative', borderStyle:'solid', borderColor:'black', borderWidth:'thin'}}></img>
                <h5 class = 'white' style = {{position: 'relative', top:'5px'}}>Developed by {game['developer']} | Published by {game['publisher']}</h5>
            </center>
        </div>
    </React.Fragment>
    );
  
}
