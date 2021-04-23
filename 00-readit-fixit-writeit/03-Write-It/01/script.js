(function() {

    let films = [
        "Contagion",
        "Cinema bij je thuis",

    ];

    let list = document.getElementById("list");

    films.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })



})();
