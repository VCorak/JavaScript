(function() {

    const films = [
        "Contagion",
        "Cinema bij je thuis",

    ];

    const reversed = films.reverse();
    for (i = 0; i < films.length; i++) {


        document.write("<ul>");
        document.write("<li>" + reversed[i].toLowerCase() + "</li>");
        document.write("</ul>");

    }

})();