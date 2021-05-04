/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function getInputValue() {

        document.getElementById('run').addEventListener('click', () => {
            let input = document.getElementById("hero-id").value;

            fetch('http://localhost:8000/_shared/api.json',{ input : id})
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data.heroes);
                    const list = data.heroes.map(heroes => {
                        return `<li>Name: ${heroes.name}</li>`
                    })
                    document.querySelector('#target')
                        .insertAdjacentHTML("afterbegin", list);
                })
        })
    }
    getInputValue();
    // When you click on the button,
    // get the id from the form, then
    // get the corresponding X-Men from
    // the API and display it in the tag whose id
    // is "target". Use the tag <strong>template</strong> to
    // reproduce a suitable html structure.
})();
