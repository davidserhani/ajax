$(function() {
    /* Go DOM is loaded !
    Writes some lines of jQuery, I know it's more than a passion for you :) */
    $.getJSON('ajax/movies.php', function (data) {
        console.log(data);
        $.ajax({
            type: 'POST',
            url: "tpl/movies.php",
            data: { items: data }
        }).done(function (response) {
            // console.log(response);
            // for (var i = 0; i < data.length; i++) {
            //     $('#movie').append(response);
            // }
        });
    });
});
