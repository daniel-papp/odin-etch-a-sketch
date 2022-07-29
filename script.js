// ------ Function Declarations ------

// createGrid: creates a size x size grid for the pixels

function createGrid(size) {
    // const container = document.getElementById('container');
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    main.appendChild(container);
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
            pixel.addEventListener('mouseover', () => colorRainbow(pixel));
        }
    }
}

// colorByHover: adds a class when hovering over a pixel

let mouseIsDown = false;
document.body.onmousedown = () => (mouseIsDown = true);
document.body.onmouseup = () => (mouseIsDown = false);


function colorByHover(element) {
    if (mouseIsDown) {
        element.classList.add('colored');
    }
}

// colorRainbow: changes pixels to random colors

function colorRainbow(element) {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    if (mouseIsDown) {
        element.style.cssText = `background-color: rgb(${red}, ${green}, ${blue});`;
    }

}

// setSize: asks for a new size and recreates the grid

function setSize() {
    const main = document.querySelector('main');
    let newSize = prompt('Enter new grid size (max-size: 100):');
    switch (true) {
        case (newSize >=1 && newSize <= 100) :
            break;
        case (newSize > 100) :
            newSize = 100;
            break;
        case (newSize < 1) :
            newSize = 1;
            break;
        default :
            newSize = 16;
    }
    main.removeChild(container);
    createGrid(newSize);
}

// clearGrid: clears the coloring from each pixel

function clearGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((item) => item.classList.remove('colored'));
}

// ------ Calling Functions ------

const defaultSize = 16;
createGrid(defaultSize);

const setSizeButton = document.getElementById('size-btn');
setSizeButton.addEventListener('click', setSize);

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearGrid);