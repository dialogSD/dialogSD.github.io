/*------------------
//
//  main app js file
//
//---------------*/
$(function() {
    function scaleVideoContainer() {
        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
      //  $('.homepage-hero-module').css('height', unitHeight);
    }

    function initBannerVideoSize(element) {
        $(element).each(function() {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });
        scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element) {
            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    }

    $('.carousel').carousel({
        interval: 2500,
        wrap: true,
        keyboard: true
    })

    $('#gallaryId').carousel({
        interval: 2500,
        wrap: true,
        keyboard: true
    })

    $('#dialogCarousel').carousel({
        interval: 2500
    })
    if ($('.responsive-calendar').responsiveCalendar) {
        $('.responsive-calendar').responsiveCalendar();
    }

    var from, to, subject, text;
    $("#send_email").click(function() {
        to = $("#to").val();
        subject = $("#subject").val();

        text = $("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send", {
            to: to,
            subject: subject,
            text: text
        }, function(data) {
            if (data == "sent") {
                $("#message").empty().html("Email is been sent at " + to + ".Please check inbox!");
            }

        });
    });

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


})

$(window).load(function() {
    $('#landingVideo').get(0).play();
    $('#bodyVideo').get(0).play();
})

$('#landingVideo').load(function() {

})
var checkScroll = function(event) {
    var scrollPos = document.body.scrollTop;
    var nextPos = 0;
    debugger
    if (scrollPos < window.innerHeight) {
        $(".landPageContainer").scroll(completeScroll);
    }else{
      document.getElementById('mainNavbar').style.opacity = 1
    }
}.bind(this)

var completeScroll = function(event) {
    var scrollPos = document.body.scrollTop;
    var nextPos = 0;
    if (scrollPos < window.innerHeight && isScrollComplete) {
      isScrollComplete= false
        nextPos = window.innerHeight
        $("html, body").stop().animate({
            scrollTop: nextPos
        }, '150', 'swing')
        $(".landPageContainer").stop().animate({
            scrollTop: 0
        }, '150', 'swing', function() {
            document.getElementById('mainNavbar').style.opacity = 1
              $(".landPageContainer").scroll(checkScroll)
              isScrollComplete = true
        })
        event.preventDefault()
        event.stopPropagation()
    }
}.bind(this)

$(".toMainPartButton").click(function() {
    $(".landPageContainer").stop().animate({
        scrollTop: window.innerHeight
    }, '300', 'swing')
})
var isScrollComplete = true;
$(".landPageContainer").scroll(checkScroll);
