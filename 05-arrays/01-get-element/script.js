/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    //document.getElementById("run").addEventListener("click", () => {
       // console.log(fruits[3]);
   // }); THIS IS SHORTER WAY FROM EXAMPLE BELLOW

    const getFruits = (fruits) => {
        document.getElementById("run").addEventListener("click", getFruits);
    }
    console.log(fruits[3]); // THIS IS LONGER WAY
})();
