class Pokemon {
    name;
    id;
    type;
    types = [];
    ability;
    abilities = [];
    height;
    weight;
    specie;
    species = [];
}

function convertPokeApiDetailToPokemon (pokeDetail) {
    const myPokeModel = new Pokemon

    myPokeModel.id = pokeDetail.id
    myPokeModel.name = pokeDetail.name

    const pokeTypes = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [pokeType] = pokeTypes

    myPokeModel.types = pokeTypes
    myPokeModel.type = pokeType

    myPokeModel.height = pokeDetail.height
    myPokeModel.weight = pokeDetail.weight

    const abilityOne = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const [abilityTwo] = abilityOne

    myPokeModel.abilities = abilityOne
    myPokeModel.ability = abilityTwo

    myPokeModel.specie = pokeDetail.base_happiness

    return myPokeModel
}