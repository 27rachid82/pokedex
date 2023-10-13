import PokemonCard from "./components/PokemonCard"; 
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

  const [pokemonIndex, setpokemonIndex] = useState(0);


  const handleClickPrevious = () => {

    if(pokemonIndex > 0) 
        

    setpokemonIndex(pokemonIndex - 1)
  }
  

  const handleClickNext = () => {
     
    if (pokemonIndex < pokemonList.length - 1)

    setpokemonIndex(pokemonIndex + 1)
  }




  return (
    
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />



      {pokemonIndex > 0 && (
        <button onClick={handleClickPrevious}>Précédent</button>
      )}


      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}


      <p>{pokemonIndex}</p>
    </div>

    
  );
  }



export default App;