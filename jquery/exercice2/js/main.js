/*
CONSIGNE : Avec l'aide de jQuery, gérer l'affichage des onglets et du contenu associé

MENU 1 --> affiche le contenu 1 et ajoute la bordure sur Menu 1
MENU 2 --> affiche le contenu 2 et ajoute la bordure sur Menu 2
MENU 3 --> affiche le contenu 3 et ajoute la bordure sur Menu 3

*/
$(function () {
   $('li').on('click', function () {
       $('li').removeClass('active');
       $(this).toggleClass('active');

       $('li').each(function (index) {
            if ($(this).hasClass('active')) {
                $('.article').eq(index).show();
            } else {
                $('.article').eq(index).hide();
            }
       });

   });
});