function buscar(){

let selecionar = document.getElementById('pokedex').value;
const resultado = document.getElementById('resultado');

switch (selecionar) {
    case 'bulbasaur':
        resultado.innerHTML = `
            <h1>Bulbasaur</h1>
            <p>Este é Bulbasaur</p>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur">
            <p>Tipo: Grass | Poison</p>
            <p>Poder: Overgrow</p>
        `;
    break;
    case 'charmander':
        resultado.innerHTML = `
            <h1>Charmander</h1>
            <p>Este é Charmander</p>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png" alt="Charmander">
            <p>Tipo: Fire</p>
            <p>Poder: Blaze</p>
        `;
    break;
    case 'squirtle':
        resultado.innerHTML = `
            <h1>Squirtle</h1>
            <p>Este é Squirtle</p>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png" alt="Squirtle">
            <p>Tipo: Water</p>
            <p>Poder: Torrent</p>
        `;
    break;
    case 'caterpie':
        resultado.innerHTML = `
            <h1>Caterpie</h1>
            <p>Este é Caterpie</p>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png" alt="Caterpie">
            <p>Tipo: Bug</p>
            <p>Poder: Shield Dust</p>
        `;
    break;
    case 'abra':
        resultado.innerHTML = `
            <h1>Abra</h1>
            <p>Este é Abra</p>
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png" alt="Abra">
            <p>Tipo: Psychic</p>
            <p>Poder: Synchronize</p>
        `;
    break;
    default:
        resultado.innerHTML = `<p>Informações não encontradas.</p>`;
    break;
    }
}