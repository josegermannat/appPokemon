window.addEventListener("DOMContentLoaded", () => {
    const NombreDePokemon = document.getElementById("Nombre-pokemon");
    const numeroDePokemon = document.getElementById("Numero-pokemon");
    const weightDePokemon = document.getElementById("weight-pokemon");
    const heightDePokemon = document.getElementById("height-pokemon");
    const  elemento = document.querySelector(".pokemon___image");
    
 
    
    
    
    
    const button = document.getElementById("button-buscador");
    

    button.addEventListener("click", () =>  {
        const inputValue = document.getElementById("buscador-pokemon").value;
        
        try {
            if(inputValue !== ""){
                const audio = new Audio("pokemon-level-up-made-with-Voicemod.mp3");
               audio.play()
            }
        } catch (error) {
            console.warn("Error al reproducir el audio", error);
        }
       
    
        if(inputValue === ""){
            alert("escribe un nombre de pokemon valido")
            return
        }

        elemento.innerHTML = "";
        fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${inputValue}`)
             .then(response => response.json())
             .then(info => {
                
                const ImagenPokemon = document.createElement("img");
                ImagenPokemon.src =  info.sprites.other["official-artwork"].front_default;
              
                ImagenPokemon.classList.add("animation")

                NombreDePokemon.innerHTML = info.name;
                numeroDePokemon.innerHTML = `Numero: ${info.id}`;
                weightDePokemon.innerHTML = `Weight: ${info.weight}`;
                heightDePokemon.innerHTML = `Height: ${info.height}`;
             
                elemento.appendChild(ImagenPokemon);
             
                
                
   
             })  .catch(err  => {
                console.error("Error en fetch:", err);
                alert("Error en fetch: " + err.message);  // Muestra el error en una alerta
            });
             });
        
          

              
            

    })


})

