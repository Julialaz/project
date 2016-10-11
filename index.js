/*global $*/

$(document).ready(function(){

	// = Добавляем ссылку наверх к заголовку
	//$('h2').append('<a href="#header"></a>');

	// = Вешаем событие прокрутки к нужному месту
	//	 на все ссылки якорь которых начинается на #
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 2500, 'swing', function () {
			window.location.hash = target;
		});
	});

});

$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/lazurkevich@yahoo.com", 
            method: "POST",
            data: {
            	firstname: $('#firstname').val(),
            	secondname: $('#secondname').val(),
                email: $('#email').val(),
                message: $('#massage').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h4><center>Thank you for reaching out! </br> Your message has been successfully sent. </br> I will contact you very soon!</center></h4>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});


