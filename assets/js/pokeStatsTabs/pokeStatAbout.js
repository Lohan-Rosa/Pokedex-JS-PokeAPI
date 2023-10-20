const divTeste = document.getElementById('section-stats')
const buttonAbout = document.getElementById('btnAbout')

const statsAbout = (offset, limit = 1) => {
    pokeApi.getPokemons(offset -1, limit = 1).then((pokemon = []) => {
        console.log('Hello world')
        divTeste.style.display = 'flex'

        const newHtml = pokemon.map((Pokemon) =>
    `
    <div class="container-about">
        <span class="fontDisable">Species</span>
        <span class="fontDisable">Height</span>
        <span class="fontDisable">Weight</span>
        <span class="fontDisable">Abilities</span>
    </div>
    <div class="container-about">
        <span class="fontActive">${Pokemon.species} aaa</span>
        <span class="fontActive">${Pokemon.height} cm</span>
        <span class="fontActive">${Pokemon.weight} kg</span>
        <span class="fontActive">${Pokemon.abilities.map((ability) => `${ability}`).join(`, `)}</span>
    </div>`).join('')
            divTeste.innerHTML = newHtml
    })
}