const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 16
let offset = 0

pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
         <li class="pokemon ${pokemon.type}">
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