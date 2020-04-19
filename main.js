// var check = false;

function changeVal(el) {
    let qt = parseFloat(el.parent().children(".qt").html());
    let price = parseFloat(el.parent().children(".price").html());
    let eq = (price * qt * 100) / 100;

    el.parent().children(".full-price").html(eq + " TND");

    changeTotal();
}

function changeTotal() {

    var price = 0;

    $(".full-price").each(function(index) {
        price += parseFloat($(".full-price").eq(index).html());
    });

    price = Math.round(price * 100) / 100;
    var fullPrice = price;

    if (price == 0) {
        fullPrice = 0;
    }
    $(".total span").html(fullPrice);
}

$(document).ready(function() {

    $(".remove").click(function() {
        var el = $(this);
        el.parent().parent().addClass("removed");
        window.setTimeout(
            function() {
                el.parent().parent().slideUp('fast', function() {
                    el.parent().parent().remove();

                    changeTotal();
                });
            });
    });

    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);

        $(this).parent().children(".full-price").addClass("added");

        var el = $(this);
        window.setTimeout(function() {
            el.parent().children(".full-price").removeClass("added");
            changeVal(el);
        });
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

        var el = $(this);
        window.setTimeout(function() {
            el.parent().children(".full-price").removeClass("minused");
            changeVal(el);
        });
    });


    $(".btn").click(function() {
        check = true;
        $(".remove").click();
    });
});
$(".heart").dblclick(function() {
    $(this).parent().children(".heart").css("color", "red");
});
$(".heart").click(function() {
    $(this).parent().children(".heart").css("color", "rgb(223, 223, 223)");
});