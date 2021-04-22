/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"


   // const event = new Date();
   // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
   // const time = event.toLocaleTimeString('en-US');
   // document.getElementById("target").innerHTML = event.toLocaleDateString('en-US', options)
    //  + time;

    document.getElementById("target").innerHTML = new Date().toUTCString()

})();

