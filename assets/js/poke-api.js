const pokeApi = {}

pokeApi.getSpeciesDetail = (pokemon) => {
    const speciesUrl = pokemon.species.url

    return fetch(speciesUrl)
        .then((response) => response.json())
        .then((speciesData) => {

            return speciesData
        })
}

pokeApi.getPokemonDetail = (pokemon) => {
    const url = pokemon.url

    return fetch (url)
        .then((response) => response.json())
        .then((pokemonData) => {
            pokemonData.species = pokeApi.getSpeciesDetail(pokemonData)

            return pokemonData
        })
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 16) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}