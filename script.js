$(document).ready(function () {
    var tabs = $('.tabs');
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();
    var itemPos = activeItem.position();
    $(".selector").css({
        "left": itemPos.left + "px",
        "width": activeWidth + "px"
    });

    $(".tabs").on("click", "a", function (e) {
        e.preventDefault();
        $('.tabs a').removeClass("active");
        $(this).addClass('active');
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        $(".selector").css({
            "left": itemPos.left + "px",
            "width": activeWidth + "px"
        });
    });
});

