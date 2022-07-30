// ------ Function Declarations ------

// createGrid: creates a size x size grid for the pixels

function createGrid(size) {
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

// colorByHover: adds a class when hovering over a pixel (currently unused)

let mouseIsDown = false;
document.body.onmousedown = () => (mouseIsDown = true);
document.body.onmouseup = () => (mouseIsDown = false);


function colorByHover(element) {
    if (mouseIsDown) {
        element.classList.add('colored');
    }
}

// colorRainbow: changes pixels to random colors or darkens them if already colored

function colorRainbow(element) {
    const hue = Math.floor(Math.random()*360);
    if (mouseIsDown) {
        const hslArr = getHsl(element);
        if (hslArr[2] === 100) {
            element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        } else {
            element.style.backgroundColor = `hsl(${hslArr[0]}, 100%, ${hslArr[2] - 5}%)`;
        }
    }
}

// getHsl: returns element color in HSL array

function getHsl(element) {
    const rgbString = element.style.backgroundColor;
    let rgbArr = rgbString.split(',');
    if (rgbString === '') {
        rgbArr = [255, 255, 255];
    } else {
        rgbArr[0] = rgbArr[0].substring(4);
        rgbArr[1] = rgbArr[1].substring(1);
        rgbArr[2] = rgbArr[2].substring(1, rgbArr[2].length -1);
    }

    const hslArr = rgbToHsl(rgbArr[0], rgbArr[1], rgbArr[2]);

    return hslArr;
}

// rgbToHsl: converts RGB to HSL

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    let l = (max + min) / 2 * 100;

    if (max == min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) * 100 : d / (max + min) * 100;
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = h / 6 * 360;
    }

    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);

    return [h, s, l];
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
    pixels.forEach((item) => item.style.cssText = '');

}

// ------ Calling Functions ------

const defaultSize = 16;
createGrid(defaultSize);

const setSizeButton = document.getElementById('size-btn');
setSizeButton.addEventListener('click', setSize);

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearGrid);