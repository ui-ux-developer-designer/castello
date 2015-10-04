$(document).ready(function () {


    //$(window).scroll(function (event) {
    //    event.preventDefault();
    //    document.write(14);
    //});


    $("nav a").click(function () {
        $(this).addClass("active").siblings("a").removeClass("active");

        var that = this;


        if ($("main").children().length) {

            $("main").removeClass().bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                $("main").removeClass().addClass("loading"),
                $("main").load("html/" + $(that).attr("data-name") + ".html", function (response, status, xhr) {
                    if (status == "error") {
                        $("main").removeClass().addClass("error")
                    }
                    if (status == "success") {
                        $("main").removeClass().addClass("success");
                    }
                }),
                $("main").unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")
            })

        }
        else {
            $("main").removeClass().addClass("loading"),
            $("main").load("html/" + $(that).attr("data-name") + ".html", function (response, status, xhr) {
                                    if (status == "error") {
                    $("main").removeClass().addClass("error")
                }
                if (status == "success") {
                    $("main").removeClass().addClass("success");
                }
            })


        }




    });

    $("header").click(function () {
        $("nav a").eq(0).click();
        $(this).parent("#content").toggleClass("active");
    });

    var randomNumberArray = Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

    $(randomNumberArray).each(function (key,value) {
    $("<img src='images/"+key+".jpg'>").load(function () {
        $("#slideshow figure").eq(key).css({
            "background-image": "url(images/"+key+".jpg)"
        });
        if ($('body').doesExist()) {

        }
        //$("#slideshow, #content, footer").fadeIn("fast");
        
    });
    
    //$("<img src='/images/2.jpg'>").load(function () {
    //    $("#slideshow figure").eq(1).css({
    //        "background-image": "url(/images/2.jpg)"
    //    });
    //});
    //$("<img src='/images/3.jpg'>").load(function () {
    //    $("#slideshow figure").eq(2).css({
    //        "background-image": "url(/images/3.jpg)"
    //    });
    //});
    });
    
    $(".left").click(function () {
        $("figure.deactive").removeClass("leftdeactive deactive");
        $("figure.leftdeactive").removeClass("leftdeactive deactive");

        if ($("figure.active").length || $("figure.leftactive").length) {
            $("figure.active, figure.leftactive").removeClass("active leftactive").addClass("leftdeactive").nextOrFirst("figure").addClass("leftactive");
        }
        else {
            $("figure").eq(0).addClass("active");
        }
        timer(10);
        
        timer(10);
    });

    $(".right").click(function () {
        $("figure.deactive").removeClass("leftdeactive deactive");
        $("figure.leftdeactive").removeClass("leftdeactive deactive");

        if ($("figure.active").length || $("figure.leftactive").length) {
            $("figure.active,figure.leftactive").removeClass("active leftactive").addClass("deactive").prevOrLast("figure").addClass("active");
        }
        else {
            $("figure").eq(0).addClass("active");
        }
        timer(10);
    });

    $('.right').trigger('click');

    //var delay = 100;
    //var i = 1;
    //// Set intervalls for adding "new" class(Delay helps css animation to apply one after each element)
    //setTimeout(function () {
    //    $(".progress span").text(i++);
    //}, delay);





});


// Next or first
jQuery.fn.nextOrFirst = function (selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
}
// Prev or last
jQuery.fn.prevOrLast = function (selector) {
    var prev = this.prev(selector);
    return (prev.length) ? prev : this.nextAll(selector).last();
}
// Element existance
$.fn.doesExist = function () {
    return jQuery(this).length > 0;
}
var counter;
//clearInterval(counter);
function timer(sec) {
    //var length = sec;
    if (counter) {
        clearInterval(counter);
    }
    counter = setInterval(function () {
        sec--;
        if (sec == 0) {
            clearInterval(counter);
            $('.right').trigger('click');
        }
    }, 1000);
}
