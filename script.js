// ------ Function Declarations ------

// createGrid: creates a size x size grid for the pixels

// function createGrid(size) {
//     const container = document.getElementById('container');
//     for (let i = 0; i < size*size; i++) {
//         const pixel = document.createElement('div');
//         pixel.classList.add('pixel');
//         container.appendChild(pixel);
//     }
// }


function createFlexGrid(size) {
    const container = document.getElementById('container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
    }
}


// ------ Calling Functions ------

const size = 16;
createFlexGrid(size);