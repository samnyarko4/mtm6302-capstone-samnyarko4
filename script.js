const poke_container = document.getElementById('poke-container')
let pokemon_count = 1
//POKEMON TYPE COLORS
const colors = {
    fire: '#EE8130',
    grass: '#7AC74C',
    electric:'#F7D02C',
    water:'#6390F0',
    ground: '#705746',
    rock:'#d5d5d4',
    fairy:'#D685AD',
    poison:'#A33EA1',
    bug:'#A6B91A',
    dragon:'#97b3e6',
    psychic:'#F95587',
    flying:'#A98FF3',
    fighting:'#C22E28',
    normal:'#A8A77A'
};

//ICON IMAGES
const TypeIcons = {
    normal: '/images/NormalIcon.svg',
    fire: '/images/FireIcon.svg',
    water:'/images/WaterIcon.svg',
    electric: '/images/ElectricIcon.svg',
    grass: '/images/GrassIcon.svg',
    ice: '/images/IceIcon.svg',
    fighting: '/images/FightingIcon.svg',
    poison: '/images/PoisonIcon.svg',
    ground: '/images/GroundIcon.svg',
    flying: '/images/FlyingIcon.svg',
    bug: '/images/BugIcon.svg',
    ghost: '/images/GhostIcon.svg',
    dragon: '/images/DragonIcon.svg',
    dark: '/images/DarkIcon.svg',
    fairy: '/images/FairyIcon.svg'
};


const caughtt = '#3F3F3F'

const main_types = Object.keys(colors);

const $main = document.getElementById('main')





const fetchPokemons = async () => {
    for(let i = 1; i<=20; i++){
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

const pokeCard = document.getElementById('card')


const selectPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    displayPopup(pokemon);
}


//POKEMON POP UP CREATION
const displayPopup = (pokemon) => {
    const poke_types = pokemon.types.map(el => el.type.name);

    const type = main_types.find(type => poke_types.indexOf(type) > -1);

    const typetwo = main_types.find(type => poke_types.indexOf(type) > 0);

    const ability = pokemon.abilities.map(ability=> ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)).join(", ");


    const icon1 = TypeIcons[type];
    const icon2 = TypeIcons[typetwo]


    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);


    const  htmlString = `
    <div id="pokeBg" class="popup">
    <div class="container">
    <button id="close">
    <i class="fa-solid fa-xmark fa-6x desktop"></i>
    <i class="fa-solid fa-xmark fa-4x mobile"></i>
    </button>
    <nav class="logo2">
    
        <div class="nav-container">

            <button onclick="myFunction()" id="poke-menu" class="poke-menu dropbtn">
                <i class="fa-brands fa-microsoft fa-4x desktop"></i>
                <i class="fa-brands fa-microsoft fa-3x mobile"></i>
            </button>
            <a class="logo" href="index.html">
                <img   href="index.html" src="/images/pokedex.png" alt="">
            </a>
        </div>
    </nav>
    <div id="square" class="square">
        <div id="poke-container" class="poke-container">

        </div>
       
    </div>
            <!-- Front and back arrows -->
        <span class="leftarrow">
                <button  class="btnarrows desktop" >
                    <i id="leftarrow"class="fa-solid fa-chevron-left fa-8x "></i>
                </button>
                <button class="btnarrows tablet">
                    <i id="leftarrow"class="fa-solid fa-chevron-left fa-6x "></i>
                </button>
                <button class="btnarrows mobile">
                    <i id="leftarrow"class="fa-solid fa-chevron-left fa-4x "></i>
                </button>
            </span>
            
            <span class="rightarrow">
                    <button class="btnarrows desktop">
                        <i id="rightarrow"class="fa-solid fa-chevron-right fa-8x "></i>
                    </button>
                    <button class="btnarrows tablet">
                        <i id="rightarrow"class="fa-solid fa-chevron-right fa-6x "></i>
                    </button>
                    <button class="btnarrows mobile">
                        <i id="rightarrow"class="fa-solid fa-chevron-right fa-4x"></i>
                    </button>
                </span>

        <!-- Pokemon information -->
<div class="pokemon-full">
        <img  id="pokemon-img" class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif"> >
        <div class="poke-info">
            <div class="leftside">
                
                <p class="num-id">#${pokemon.id.toString().padStart(3, '0')}</p>
                <h3 class="poke-name">${name}</h3>
                <p class="full-type">${type}</p>
                
                <div class="attributes">
                    <table>
                        <tr>
                            <td>Height:</td>
                            <td>${pokemon.height}</td>
                        </tr>
                        <tr>
                            <td>Weight:</td>
                            <td>${pokemon.weight} Ibs</td>
                        </tr>
                        <tr>
                            <td>Abilities:</td>
                            <td>${ability}</td>
                        </tr>
                    </table>
                </div>
            </div>    
        </div>
        <div class="types">
            <h5>Type</h5>
            <img class="primary-icon" src="${icon1}" alt="">
            <img class="primary-icon" src="${icon2}" alt="">
        </div>

        <div class="rightside">
                
            <h4>
                Stats
            </h4>
            <div class="attribute-chart">
            <h6 class="stat-title">
                HP
            </h6>
            <p class="stats-number">
            ${pokemon.stats[0].base_stat}
            </p>
            <h6 class="stat-title">
                Attack
            </h6>
            <p class="stats-number">
            ${pokemon.stats[1].base_stat}
            </p>
            <h6 class="stat-title">
                Defence
            </h6>
            <p class="stats-number">
            ${pokemon.stats[2].base_stat}
            </p>
            <h6 class="stat-title">
                Speed
            </h6>
            <p class="stats-number">
            ${pokemon.stats[3].base_stat}
            </p>
            </div>
        </div>
    </div>
</div>
</div>
    `
    $main.innerHTML = htmlString + $main.innerHTML ;
 
    
    $main.classList.add('hide');


    const $close = document.getElementById('close');

$close.addEventListener('click', function (){
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);

    $main.classList.remove('hide');



});



const popbg = document.getElementById('pokeBg')



const color = colors[type];
let gradient = `linear-gradient(to top, black,${color})`

popbg.style.background = gradient






const $leftarrow = document.getElementsByClassName('fa-chevron-left')
   function previousPoke(){ 
popbg.addEventListener('click', function (e) { 
    if (e.target.classList.contains('fa-chevron-left')) { 
        console.log('hello');
    }
    })
    
    }
    previousPoke();
};



//POKEMON CARD CREATION
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const poke_types = pokemon.types.map(el => el.type.name);

    const type = main_types.find(type => poke_types.indexOf(type) > -1);

   
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const color = colors[type];
    
    

    const pokemonInnerHTML = 
    `
    <div id="card">
    <button id="card-btn${pokemon.id}" onclick="selectPokemon(${pokemon.id})">
    <div class="img-container" id="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
 </div>
 <div
 class="info">
     <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
     <h3 class="name">${name}</h3>
     <small class="type" id="typeone" style="background-color:${color};"> <span id="typethree" >${type}</span></small>
     </div> 
     </button>
     <div class="status">
     <button class="caught" id="caught">Caught</button>
     </div>
     `
 
 

 pokemonEl.innerHTML = pokemonInnerHTML

 pokemonEl.style.borderColor = color

 
 
 

 poke_container.appendChild(pokemonEl);


   //CATCH POKEMON BUTTON

  // const uncatch = document.getElementsByClassName('caught')
   // let uncatchbtn = Array.from(uncatch)

 //  pokemonEl.addEventListener('click', function (e) {
 
  //  if (e.target.classList.contains('caught')){
      //  pokemonEl.style.backgroundColor = color;

        
 //       uncatchbtn.classList.add('uncatch')
  //  }
 //  })

 //  pokemonEl.addEventListener('mouseover', function (e) {
  //  if (e.target.classList.contains('caught')){
  //      uncatchbtn.forEach((element) => {

 //       uncatchbtn.style.backgroundColor = color
  //  })
  //  }
 //  })
   

  

};

let typeone = document.querySelectorAll('.type')
for (let i = 0; i < typeone.length; i++) {
typeone.style.backgroundColor = colors
let element = typeone[1];

// Set the background color of the element
element.style.backgroundColor = "red";
}

//LOAD MORE POKEMON BUTTON

const $load_more = document.getElementById('load-more')
$load_more.addEventListener('click', function(){
    pokemon_count+=20
    const fetchPokemons = async () => {
        
        for(let r = pokemon_count; r<pokemon_count +20; r++){
            await getPokemon(r);
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




//Pop up MINI POKE MENU
function myFunction() {
    document.getElementById("square").classList.toggle("show");
    document.getElementById("pokemon-img").classList.toggle("pokeimg-hide");
  };

