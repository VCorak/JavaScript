/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let button = document.getElementById("run");

// And when the button is clicked:
button.addEventListener("click", getRandom);

function getRandom(){
    // 16777215 (decimal) == ffffff in hexidecimal
    let newColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = newColor;

};

// We want the background to get a random color as we click button
// as well as when the button is clicked, so the function will be called right away
getRandom(newColor);
