window.addEventListener("DOMContentLoaded", () => {
    const NombreDePokemon = document.getElementById("Nombre-pokemon");
    const numeroDePokemon = document.getElementById("Numero-pokemon");
    const weightDePokemon = document.getElementById("weight-pokemon");
    const heightDePokemon = document.getElementById("height-pokemon");
    
    
    const ImagenPokemon = document.getElementById("Imagen-Pokemon");
    
    
    
    
    const button = document.getElementById("button-buscador");
    

    button.addEventListener("click", () =>  {
        const inputValue = document.getElementById("buscador-pokemon").value;
        if(inputValue === ""){
            alert("escribe un nombre de pokemon valido")
        }
             fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
             .then(response => response.json())
             .then(info => {
                NombreDePokemon.innerHTML = info.name;
                numeroDePokemon.innerHTML = `Numero: ${info.id}`;
                weightDePokemon.innerHTML = `Weight: ${info.weight}`;
                heightDePokemon.innerHTML = `Height: ${info.height}`;
                ImagenPokemon.src =  info.sprites.other["official-artwork"].front_default;
                       


             })  .catch(error => console.error("Error al obtener los datos:", error));
        
          

              ImagenPokemon.addEventListener("click", () => {
                const audio = new Audio("https://play.pokemonshowdown.com/audio/evolve.mp3");
               audio.play()
              })
            

    })


})

