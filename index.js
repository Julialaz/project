/*global $*/
/*global google*/

$('a[href^="#"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 2000, 'swing', function() {
        window.location.hash = target;
    });
});

$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        if (($('#firstname').val() == '') ||
            ($('#secondname').val() == '') ||
            ($('#email').val() == '') ||
            ($('#message').val()) == '') {
            alert('Please fill in all required fields!');
            return;
        }
        $.ajax({
            url: "https://formspree.io/lazurkevich@yahoo.com",
            method: "POST",
            data: {
                firstname: $('#firstname').val(),
                secondname: $('#secondname').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h4><center>Thank you for reaching out! </br> Your message has been successfully sent. </br> I will contact you very soon!</center></h4>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });
    })
});


function initMap() {
    var lviv = {
        lat: 49.85,
        lng: 24.0166666667
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: lviv
    });
    var marker = new google.maps.Marker({
        position: lviv,
        map: map
    });
}

var num = 730;

$(window).bind('scroll', function() {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    }
    else {
        $('.menu').removeClass('fixed');
    }
});


