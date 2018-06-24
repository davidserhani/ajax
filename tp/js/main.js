$(function() {
    
    // Affichage de la navbar complète dès que l'on dépasse 100px au scroll
    $(document).scroll(function() {
        $('.navbar').toggleClass('navbar-fixed-top fixed', $(document).scrollTop() >= 100);
    });
    
    $.getJSON("ajax/recipes.php", function(data) {
        
        $("#list-recipes .container").load( "tpl/recipes.php", { "items": data }, function() {
            $("#list-recipes .container").slideDown("slow");
        });

    });

    // Evénément click sur les boutons de sélection d'une boisson
    $(document).on("click", ".btn-selection", function() {
        // Si le bouton est actif
        if(!$(this).hasClass("disabled")) {
            // Je récupère le nom de la boisson dans la balise h3
            var recipeName = $(this).parents(".caption").children("h3").text();
            // Et l'ajoute à l'endroit désiré dans l'encart your-choice
            $("#your-choice dd").text(recipeName);   
        }
    });

    // Evénément click sur les boutons de filtrage des recettes
    $(".btn-packaging").on("click", function() {
        
        // Remise à zéro des recettes non disponible
        var elements = $('.not-available .caption');
        $('.description', elements).each(function() {
            $(this).html($(this).data("description"));
        });
        $('.btn-selection', elements).each(function() {
            $(this).removeClass("disabled");
        });
        $(".not-available").removeClass("not-available");
        
        // Ajout du texte non disponible sur les recettes concernées plus "désactivation" du bouton de sélection
        elements = $(".thumbnail[data-"+$(this).attr("id")+"='0']");
        console.log(elements);
        elements.addClass("not-available");
        $('.caption .description', elements).each(function() {
            $(this).html("Non disponible. Modifiez votre sélection pour sélectionner cette recette.");
        });
        $('.caption .btn-selection', elements).each(function() {
            $(this).addClass("disabled");
        });
    });
    
    // Chargement et lecture de la vidéo
    $("video source").each(function() {
        var sourceFile = $(this).attr("data-src");
        $(this).attr("src", sourceFile)
        var video = this.parentElement;
        video.load();
        video.play();   
    });
});