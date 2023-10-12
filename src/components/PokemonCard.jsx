

  //const pokemonList = 
  //[
      //{
        //name:"bulbasaur",
        //imgSrc:
          //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      //},
      //{
        //name: "mew",
      //},
  
  
    //];

function PokemonCard (props) {

console.log(props)

       if (props.pokemon.imgSrc != null) 
       {
            return  (
            

              <figure>
              
              <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>
              <figcaption>{props.pokemon.name}</figcaption>

                
              </figure>)



        }
          else 
        {
            return(<div><p>???</p><figcaption>"Mew"</figcaption></div>)
        }

      


     return (
         <figure>
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
             <figcaption>"Bulbasaur"</figcaption>
         </figure>
     );


     
    } 

export default PokemonCard;

