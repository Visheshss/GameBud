import React, { Component, useState, useEffect } from "react";
import { Game } from "../components/game/game";
import { NavBar } from "../components/navbar/navbar";
import { SearchBar } from "../components/searchbar/searchbar";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setGames(data);
        setSearch("");
        console.log('hello');
      });
  }, []);


  // useEffect(() => {
  //   fetch("/api", {
  //       method: "POST",
  //       body: JSON.stringify({ content: search }),
  //       // headers: {
  //       //   "Content-type": "application/json; charset=UTF-8",
  //       // },
  //     })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setGames(data);
  //       setSearch("");
  //       console.log('hello');
  //     });
  // }, []);

  const handleSearchChange = (userInput) => {
    setSearch(userInput);
  };

  // const handleSearchSubmit = () => {
  //   console.log(search);
  //   setFiller('searched');
  // };

  const handleSearchSubmit = () => {
    fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ content: search }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Accept': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setSearch("");
        // getLatestGames();
      });
  };

  // const getLatestGames = () => {
  //   fetch("/api").then((res) => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //   }).then((data) => setGames(data));
  // };

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <br></br>
      <div>
        <SearchBar
          userInput={search}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>
      <br></br>
      <div>
        <Game listOfGames={games}/>
      </div>
    </div>
  );
};
