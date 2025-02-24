window.addEventListener("DOMContentLoaded", () => {
    const NombreDePokemon = document.getElementById("Nombre-pokemon");
    const numeroDePokemon = document.getElementById("Numero-pokemon");
    const weightDePokemon = document.getElementById("weight-pokemon");
    const heightDePokemon = document.getElementById("height-pokemon");
    const  elemento = document.querySelector(".pokemon___image");
    
 
    
    
    
    
    const button = document.getElementById("button-buscador");
    

    button.addEventListener("click", () =>  {
        const inputValue = document.getElementById("buscador-pokemon").value;
        if(inputValue === ""){
            alert("escribe un nombre de pokemon valido")
            return
        }

        elemento.innerHTML = "";
             fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
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


                ImagenPokemon.addEventListener("click", () => {
                    const audio = new Audio("pokemon-level-up-made-with-Voicemod.mp3");
               
                   if(ImagenPokemon.src !== ""){
                    audio.play()
                   }
                  })
                
   
             })  .catch(err  =>{
                     console.error("error al obtener los datos", err)
                     alert("No se encontro el pokemon prueba con otro nombre")
             });
        
          

              
            

    })


})

