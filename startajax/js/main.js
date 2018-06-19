// document.addEventListener("DOMContentLoaded", function () {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function () {
//         // 0 -> UNSENT requête non envoyée
//         // 1 -> OPENED requête envoyée, méthode open() appelée
//         // 2 -> HEADER_REVEIVED, méthode send() appelé
//         // 3 -> LOADING, requête en attente de réception de la réponse
//         // 4 -> DONE, la requête est terminée la réponse est disponible
//         console.log(this.readyState);
//         if (this.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE = 4
//             console.log(this.responseText);
//         }
//     };
//     httpRequest.open("GET", "http://date.jsontest.com", true);
//     httpRequest.send(null);
// });

$(function () {
   $.ajax({
       type: "POST", //  GET par defaut ou POST
       url: "tpl/test.php", // page à interroger
       data: {title: "Ma fenêtre modale en AJAX"}
   }).done(function (response) { // méthode done() equivaut a la méthode success()
       // console.log(response);
       $("#modal").html(response);
   });
    // en une ligne $("#modal").load("tpl/test.php", {title: "Ma fenêtre modale en AJAX"});
   // méthode fail() ou error() s'execute losque la requête n'a pas abouti, ou erreur renvoyée
   // méthode complete() ou always() s'executera toujours quel que soit le résultat de la requête AJAX
   $.ajax({
       dataType: 'json',
       url: 'http://date.jsontest.com/'
   }).done(function (data) {
      $('#welcome').text('Bienvenue, nous somme le ' + data.date + ' et il est ' + data['time'] );
   });
   // $.getJSON('http://date.jsontest.com/', function (data) {
   //     $('#welcome').text('Bienvenue, nous somme le ' + data.date + ' et il est ' + data['time'] );
   // });

   $.getJSON('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port', function (data) {
        console.log(data);

       for (var i = 0; i < data['features'].length; i++) {
           $('#features').append('<li>' + data.features[i].properties.label + '</li>');
       }

       for (let address of data.features) {
           console.log(address.properties.label);
       }
    });

   $.getJSON('ajax/test.php', function (data) {
      console.log(data);
   });

   $('form').on('submit', function (e) {
       e.preventDefault();
       var datas = $(this).serialize();
       console.log(datas);
       $.ajax({
           type: 'POST',
           data: 'formData',
           url: 'tpl/checkform.php'
       });
   })
});