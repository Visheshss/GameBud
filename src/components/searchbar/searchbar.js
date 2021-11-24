import React, { Component } from 'react';

export const SearchBar = ({ userInput, onSearchChange, onSearchSubmit }) => {

    
    const handleChange = (event) => {
        onSearchChange(event.target.value);
    };

    const handleSubmit = (event) => {
        onSearchSubmit();
    };
    return (
        <center>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} id='search' type='text' required value={userInput} placeholder='Search For Games!'/>
                <br></br>
                <br></br>
                <input style = {{ width:'250px', height:'55px'}} class = 'button button1' id='submit' type='submit'/>
            </form>
        </center>
    );
};