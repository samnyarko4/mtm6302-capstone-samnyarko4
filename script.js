const poke_container = document.getElementById('poke-container')
const pokemon_count = 20
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
}


const fetchPokemons = async () => {
    for(let i = 1; i<= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const pokemonInnerHTML = 
    ` <div class="img-container">
    <img src="/images/bulbasur.png" alt="">
 </div>
 <div
 class="info">
     <span class="number">#001</span>
     <h3 class="type">Bulbasaur</h3>
     <small>Type: <span>grass</span></small>
 </div>`

 pokemonEl.innerHTML = pokemonInnerHTML

 poke_container.appendChild(pokemonEl)
}
fetchPokemons()