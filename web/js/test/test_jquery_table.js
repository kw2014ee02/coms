$(document).ready(function () {
    $("#gt tr").not(':first').hover(
            function () {
                $(this).css("background", "purple");
            },
            function () {
                $(this).css("background", "");
            }
    );

    $(function () {

        var pressed = false;
        var start = undefined;
        var startX, startWidth;

        $("#gt th").mousedown(function (e) {

            start = $(this);
            pressed = true;
            startX = e.pageX;
            startWidth = $(this).width();
            $(start).addClass("resizing");

        });

        $(document).mousemove(function (e) {
            if (pressed) {
                $(start).width(startWidth + (e.pageX - startX));
                //alert(startWidth);
            }
        });

        $(document).mouseup(function () {
            if (pressed) {
                $(start).removeClass("resizing");
                pressed = false;
            }
        });
    });


});