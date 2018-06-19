$(function() {
    /* Go DOM is loaded !
    Writes some lines of jQuery, I know it's more than a passion for you :) */
    


        // Requête AJAX Appeller  une page php qui genère à la volée un JSON
           
        $.getJSON("ajax/movies.php", function(data) {

            // selectuer : là ou afficher le html
            // load : 1er argument : le template 
            // load : 2e argument : tableau associatif avec une clé, les éléments àç rtraiter et les éléments data (ce qu'on récupère via le premier appel ajax quand on appel le script au-dessus)
            $("#movies").load("tpl/movies.php", { items: data });

            console.log(data);
        

        });
        
});
