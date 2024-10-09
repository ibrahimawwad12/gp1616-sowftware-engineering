const puzzleContainer = document.getElementById('puzzle-container');
const shuffleButton = document.getElementById('shuffle');
let tiles = [];

function createTiles() {
    for (let i = 0; i < 8; i++) {
        tiles.push(i + 1);
    }
    tiles.push(null); // Empty space
    render();
}

function render() {
    puzzleContainer.innerHTML = '';
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (tile !== null) {
            tileElement.innerText = tile;
            tileElement.addEventListener('click', () => moveTile(index));
        } else {
            tileElement.classList.add('empty');
        }
        puzzleContainer.appendChild(tileElement);
    });
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3];

    if (validMoves.includes(index)) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        render();
    }
}

function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    render();
}

shuffleButton.addEventListener('click', shuffleTiles);
createTiles();
