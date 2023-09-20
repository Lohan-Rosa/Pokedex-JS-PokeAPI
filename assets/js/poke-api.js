const pokeApi = {}

function convertPokeApiDetailToPokemon (pokeDetail) {
    const myPokeModel = new Pokemon()

    myPokeModel.id = pokeDetail.id
    myPokeModel.name = pokeDetail.name

    const pokeTypes = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [pokeType] = pokeTypes

    myPokeModel.types = pokeTypes
    myPokeModel.type = pokeType

    return myPokeModel
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch (pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 24) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}