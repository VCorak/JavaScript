/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");
        if (passOne.value !== passTwo.value) {
            passOne.style.backgroundColor = "red";
            passTwo.style.backgroundColor = "red";

        }
        else {
            passOne.style.backgroundColor = "white";
            passTwo.style.backgroundColor = "white";
        }
    });


})();
