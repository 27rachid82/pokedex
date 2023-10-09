
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },


  ];


function PokemonCard () {

        const pokemon = pokemonList[1];

       if (pokemon.imgSrc != null) {
            return<figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
            <figcaption>"Bulbasaur"</figcaption>
        </figure>

       }
        else {
            return(<div><p>???</p><p>Mew</p></div>)
       }


     return (
         <figure>
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
             <figcaption>"Bulbasaur"</figcaption>
         </figure>
     );
    }
     

export default PokemonCard;

