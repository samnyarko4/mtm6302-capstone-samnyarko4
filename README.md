How I started to create the prototype is by creating the function to fetch the api. Then i proceeded to design and outline the card where the api will put the information about the pokemons by hard coding it. I than began adding the pokemons the the page dynamicaly. I did this by creating a div element with a class of pokemon, I then used innerHTML to put the hardcoded HTNL design into the div i just created dynamically using javascript. I then began to create the idividual pokemon page. This page is hardcoded and was created using flex and grid. The resources i used to create the prototype was the pokemon api, fontawsome icons, and google fonts. Some of the challanges i faced while creating the prototype was the 'load more pokemon' button to load the next 25 pokemons. The button as it is now loads another 25 pokemons but the loop starts from the begining at pokemon 1 and doubles the first 25 pokemons instaed of starting from pokemon 26 and going from there. The second challenge I faced was making every pokemon card button when click take the user to the specific pokemon full information page. Since the goal at the end is to have this site have no page refreshes I figured i would have to find a way to do that (ie:SPA) without have 150 seperate pages for each pokemon.