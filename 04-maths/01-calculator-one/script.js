/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    function getNumbers(){
      operandOne = parseInt(document.getElementById("op-one").value);
      operandTwo = parseInt(document.getElementById("op-two").value);
    };


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        getNumbers();
        alert(operandOne + operandTwo);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        getNumbers();
        alert(operandOne - operandTwo);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        getNumbers();
        alert(operandOne * operandTwo);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        getNumbers();
        alert(operandOne / operandTwo);
    });
})();
