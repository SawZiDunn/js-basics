document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search-button").onclick = () => {
        let input = document.getElementById("search-input").value;
        let container = document.getElementById("data-container");
 
        if (isNaN(input)) {
            input = input.split(" ").join("-").toLowerCase();
            input = input.replace("♀", "f");
            input = input.replace ("♂", "m");
        }

        fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`)
        .then(res => res.json())
        .then(result => {
            document.getElementById("pokemon-name").innerHTML = result.name.toUpperCase();

            const oldImage = document.getElementById("sprite");
            if (oldImage) {
                oldImage.remove();
            }
            container.innerHTML += `<img  id="sprite" src="${result.sprites.front_default}">`;

            document.getElementById("pokemon-id").innerHTML = result.id;
            document.getElementById("weight").innerHTML = result.weight;
            document.getElementById("height").innerHTML = result.height;    

            document.getElementById("types").innerHTML = "";
            result.types.forEach(type => {
                document.getElementById("types").innerHTML += `<span>${type.type.name.toUpperCase()}</span>`;
            })
             

            document.getElementById("hp").innerHTML = result.stats[0].base_stat;
            document.getElementById("attack").innerHTML = result.stats[1].base_stat;
            document.getElementById("defense").innerHTML = result.stats[2].base_stat;
            document.getElementById("special-attack").innerHTML = result.stats[3].base_stat;
            document.getElementById("special-defense").innerHTML = result.stats[4].base_stat;
            document.getElementById("speed").innerHTML = result.stats[5].base_stat;
            

        })
        .catch(error => {
            alert("Pokémon not found");
            console.log(error);
            return;
        })

    }
})
