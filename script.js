// ------ Function Declarations ------

// createGrid: creates a size x size grid for the pixels

function createGrid(size) {
    const container = document.getElementById('container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
            colorByHover(pixel);
        }
    }
}

// colorByHover: adds a class when hovering over a pixel

function colorByHover(element) {
    element.addEventListener('mouseover', () => element.classList.add('colored'));
}



// ------ Calling Functions ------

const size = 16;
createGrid(size);