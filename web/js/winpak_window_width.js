$(document).ready(function () {

    //  alert($(document).width());
//  alert($( window ).width());



    $("#form_2").css("top", "38%");
  //  $("input.datepicker_due_new").css("width", "7%");
  //  $("input.datepicker_due_new").css("margin-top", "8%");
    $("#form_1").css("top", "5%");
    $("#form_3").css("top", "5%");
    $("#form_4").css("top", "5%");


    $(window).resize(function () {

    });






    return;



    switch ($(document).width()) {
        case 1920:
            $("#form_2").css("margin-top", "12.5%");
            $("input.datepicker_due_new").css("width", "7%");
            $("input.datepicker_due_new").css("margin-top", "8%");
            $("#form_1").css("margin-top", "2%");
            $("#form_3").css("margin-top", "2%");
            $("#form_4").css("margin-top", "2%");
            break;
        case 1664:
            $("#form_2").css("margin-top", "14%");
            $("input.datepicker_due_new").css("width", "8%");
            $("input.datepicker_due_new").css("margin-top", "10%");
            $("#form_1").css("margin-top", "2%");
            $("#form_3").css("margin-top", "2%");
            $("#form_4").css("margin-top", "2%");
            break;
        default:  //1264
            $("#form_2").css("margin-top", "21%");
            $("input.datepicker_due_new").css("width", "10.5%");
            $("input.datepicker_due_new").css("margin-top", "10%");
            $("#form_1").css("margin-top", "5%");
            $("#form_3").css("margin-top", "5%");
            $("#form_4").css("margin-top", "5%");

    }

    $(window).resize(function () {

        switch ($(document).width()) {
            case 1920:
                $("#form_2").css("margin-top", "12.5%");
                $("input.datepicker_due_new").css("width", "7%");
                $("input.datepicker_due_new").css("margin-top", "8%");
                $("#form_1").css("margin-top", "2%");
                $("#form_3").css("margin-top", "2%");
                $("#form_4").css("margin-top", "2%");
                break;
            case 1664:
                $("#form_2").css("margin-top", "14%");
                $("input.datepicker_due_new").css("width", "8%");
                $("input.datepicker_due_new").css("margin-top", "10%");
                $("#form_1").css("margin-top", "2%");
                $("#form_3").css("margin-top", "2%");
                $("#form_4").css("margin-top", "2%");
                break;
            default:  //1264
                $("#form_2").css("margin-top", "21%");
                $("input.datepicker_due_new").css("width", "10.5%");
                $("input.datepicker_due_new").css("margin-top", "10%");
                $("#form_1").css("margin-top", "5%");
                $("#form_3").css("margin-top", "5%");
                $("#form_4").css("margin-top", "5%");

        }

    });


    return;

    if ($(document).width() === 1920) {
// alert("1920");
        $("#form_2").css("margin-top", "12.5%");
        $("input.datepicker_due_new").css("width", "7%");
        $("input.datepicker_due_new").css("margin-top", "8%");
        $("#form_1").css("margin-top", "2%");
        $("#form_3").css("margin-top", "2%");
        $("#form_4").css("margin-top", "2%");
    } else {
// alert("1264");
        $("#form_2").css("margin-top", "21%");
        $("input.datepicker_due_new").css("width", "10.5%");
        $("input.datepicker_due_new").css("margin-top", "10%");
        $("#form_1").css("margin-top", "5%");
        $("#form_3").css("margin-top", "5%");
        $("#form_4").css("margin-top", "5%");
    }

    $(window).resize(function () {
        if ($(document).width() === 1920) {
// alert("1920");
            $("#form_2").css("margin-top", "12.5%");
            $("input.datepicker_due_new").css("width", "7%");
            $("input.datepicker_due_new").css("margin-top", "8%");
            $("#form_1").css("margin-top", "2%");
            $("#form_3").css("margin-top", "2%");
            $("#form_4").css("margin-top", "2%");
        } else {
// alert("1264");
            $("#form_2").css("margin-top", "21%");
            $("input.datepicker_due_new").css("width", "10.5%");
            $("input.datepicker_due_new").css("margin-top", "10%");
            $("#form_1").css("margin-top", "5%");
            $("#form_3").css("margin-top", "5%");
            $("#form_4").css("margin-top", "5%");
        }
    });
    /*
     
     if ($(document).width() !== 1264) {
     // alert("1920");
     $("#form_2").css("margin-top", "12.5%");
     $("input.datepicker_due_new").css("width", "7%");
     $("input.datepicker_due_new").css("margin-top", "8%");
     $("#form_1").css("margin-top", "2%");
     $("#form_3").css("margin-top", "2%");
     $("#form_4").css("margin-top", "2%");
     } else {
     // alert("1264");
     $("#form_2").css("margin-top", "20%");
     $("input.datepicker_due_new").css("width", "10.5%");
     $("input.datepicker_due_new").css("margin-top", "10%");
     $("#form_1").css("margin-top", "5%");
     $("#form_3").css("margin-top", "5%");
     $("#form_4").css("margin-top", "5%");
     }
     
     $(window).resize(function () {
     
     if ($(document).width() !== 1264) {
     // alert("1920");
     $("#form_2").css("margin-top", "12.5%");
     $("input.datepicker_due_new").css("width", "7%");
     $("input.datepicker_due_new").css("margin-top", "8%");
     $("#form_1").css("margin-top", "2%");
     $("#form_3").css("margin-top", "2%");
     $("#form_4").css("margin-top", "2%");
     } else {
     // alert("1264");
     $("#form_2").css("margin-top", "20%");
     $("input.datepicker_due_new").css("width", "10.5%");
     $("input.datepicker_due_new").css("margin-top", "10%");
     $("#form_1").css("margin-top", "5%");
     $("#form_3").css("margin-top", "5%");
     $("#form_4").css("margin-top", "5%");
     }
     
     });
     
     */

});