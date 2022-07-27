// ------ Function Declarations ------

// createGrid: creates a size x size grid for the pixels

function createGrid(size) {
    const container = document.getElementById('container');
    // const pixel = document.createElement('div');
    // pixel.classList.add('pixel');
    for (let i = 0; i < size*size; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}





// ------ Calling Functions ------

const size = 16;
createGrid(size);