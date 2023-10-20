const pokemonList = document.getElementById('pokemonList')
const pokemonContainer = document.getElementsByClassName('pokemons')
const loadMoreButton = document.getElementById('loadMoreButton')
const containerButton = document.getElementById('container-button')
const divCasa = document.getElementById("put")
const pokeId = document.getElementsByName('#id')
let limit = 16
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `   <li id="${pokemon.id}" class="pokemon ${pokemon.type}" onclick="statsPokemon(this.id)">
              <span class="number">#${pokemon.id}</span>
              <span class="name">${pokemon.name}</span>

                <div class="container-pokemon">
                  <ol class="types">
                    ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join(``)}
                  </ol>
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif"
                    alt="${pokemon.name}">
                </div>
            </li>
         `).join('')
            pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})