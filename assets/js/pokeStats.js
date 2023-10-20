const statsPokemon = (offset, limit = 1) => {
    pokeApi.getPokemons(offset -1, limit).then((pokemon = []) => {
        pokemonList.style.display = 'flex'
        containerButton.style.display = 'none'
        const newHtmlStats = pokemon.map((Pokemon) =>
 `
 <section class="stats-container-pokemon">
 <div class="popup-pokemon ${Pokemon.type}">
     <div class="popup-img-pokemon">
         <div class="container-top">
            <a href="../Desenvolvimento-Web-JavaScript/index.html" id="back-button">
                <i class="fa-solid fa-arrow-right fa-rotate-180"></i>
            </a>
             <span id="favorite-button">
                <i class="fa-regular fa-heart"></i>
             </span>
         </div>
         <div class="container-name">
             <span class="font-name">${Pokemon.name}</span>
         </div>
         <div class="container-id font-id">
             <span>#${Pokemon.id}</span>
         </div>
         <ol class="container-types">
             ${Pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join(``)}
         </ol>
         <div class="container-img-pokemon">
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${Pokemon.id}.png"
                 alt="${Pokemon.name}">
         </div>
     </div>
     <div class="popup-container-stats">
        <div class="container-stats">
            <button id="btnAbout" class="fontDisable stats-about" onclick="statsAbout(this.id)">About</button>
            <button id="btnBase" class="fontDisable stats-base" onclick="baseStats(this.id)">Base Stats</button>
            <button id="btnEvolution" class="fontDisable stats-evolution" onclick="statEvolution(this.id)">Evolution</button>
            <button id="btnMoves" class="fontDisable stats-moves" onclick="statMoves(this.id)">Moves</button>
        </div>
         <section id="section-stats">
         </section>
     </div>
 </div>
</section>`).join('')
            pokemonList.innerHTML = newHtmlStats
    })
}

const favBtn = document.getElementById('favorite-button')

favBtn.addEventListener('click', () => {
    favBtn.style.color = '#ec5959'
    favBtn.style.animationFillMode = 'both, forwards'
})