import React from "react";
import PokemonCard from "./components/PokemonCard"; 

import NavBar from "./components/NavBar";

import {useState} from "react";




const pokemonList = 
  [
      {
        name:"bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "mew",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",

      },

      {
      name: "Rara",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  
      },


      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
     
    ];



function App() 
{

  const [pokemonIndex, setPokemonIndex] = useState(0);


  //const handleClickPrevious = () => {

    //if(pokemonIndex > 0) 
        
    //setPokemonIndex(pokemonIndex - 1)

  //}
  

  //const handleClickNext = () => {
     
    //if (pokemonIndex < pokemonList.length - 1 )

    //setPokemonIndex(pokemonIndex + 1)
    
  //}


  return (
    
     <>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {/*<NavBar pokemonIndex={pokemonIndex} onClickPrevious={handleClickPrevious} onClickNext={handleClickNext} />*/}
        <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />


    
        <p>{pokemonIndex}</p>
    </>

    
        );
  }



export default App;