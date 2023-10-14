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




function NavBar (props) {
    const { pokemonIndex, onClickPrevious, onClickNext } = props;



    {pokemonIndex > 0 && (
        <button onClick={onClickPrevious}>Précédent</button>
                        )   
    }



    
   {pokemonIndex < pokemonList.length - 1 && (
         <button onClick={onClickNext}>Suivant</button>
    ) 
    }




    return (
        <div>
          {pokemonIndex > 0 && (
            <button onClick={onClickPrevious}>Précédent</button>
          )}
    
          {pokemonIndex < pokemonList.length - 1 && (
            <button onClick={onClickNext}>Suivant</button>
          )}
        </div>
      );
    
  

   }   



   export default NavBar