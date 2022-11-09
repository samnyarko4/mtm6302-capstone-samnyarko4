const poke_container = document.getElementById('poke-container')
let pokemon_count = 25
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric:'#FCF7DE',
    water:'#DEF3FD',
    ground: '#f4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    poison:'#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#F5F5F5',
    fighting:'#E6E0D4',
    normal:'#F5F5F5'
};

const main_types = Object.keys(colors);





const fetchPokemons = async () => {
    for(let i = 1; i<= pokemon_count; i++){
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    createPokemonCard(pokemon)
}

fetchPokemons();



const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const poke_types = pokemon.types.map(el => el.type.name);

    const type = main_types.find(type => poke_types.indexOf(type) > -1);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const color = colors[type];

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = 
    
    `
    <div>
    <button id="card-btn${pokemon.id}">
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
 </div>
 <div
 class="info">
     <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
     <h3 class="name">${name}</h3>
     <small class="type">Type: <span>${type}</span></small>
     </div> 
     </button>
     <div class="status">
     <input type="checkbox" id="caught" name="catch" value="Catch">
    <span>Caught</span>
     </div>
     `
 
 

 pokemonEl.innerHTML = pokemonInnerHTML

 

 poke_container.appendChild(pokemonEl);

 const $btn = document.getElementById('card-btn1')



$btn.addEventListener('click', function() {
    location.href = "bulbaseaur.html"; 
   });

  

 
};



const $load_more = document.getElementById('load-more')
$load_more.addEventListener('click', function(){
    const fetchPokemons = async () => {
        for(let i = 1; i <= 25; i++){
            await getPokemon(i);
        }
    }
    
    const getPokemon = async (id) => {
        
        
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokemon = await res.json()
        createPokemonCard(pokemon)
    }
    
    fetchPokemons();
    
    
});


function myFunction() {
    document.getElementById("square").classList.toggle("show");
    document.getElementById("pokemon-img").classList.toggle("pokeimg-hide");
  };


