$(document).ready(function () {


    $("#form_1").css("display", "none");
    $("#form_2").css("display", "none");
    $("#form_4").css("display", "none");

    $("#Customer_name_1").css("display", "none");
    $("#Item_number_1").css("display", "none");
    $("#order_search").css("display", "none");

    $('#mask').css('display', 'block');

    /*
     var btn_training = document.getElementById("training_1");
     btn_training.onclick = function () {
     $("#slogan_1").text("Winpak COMS, internal test version");
     
     $("#form_1").css("display", "block");
     $("#form_2").css("display", "block");
     $("#form_4").css("display", "block");
     
     $("#Customer_name_1").css("display", "block");
     $("#Item_number_1").css("display", "block");
     $("#order_search").css("display", "block");
     
     $('#mask').css('display', 'none');
     };
     */


  ;

//$("#training_1").dblclick(function () {
    $("#training_1").click(function () {
        // $("#slogan_1").text("Winpak COMS, internal test version");

        $("#form_1").toggle();
        $("#form_2").toggle();
        $("#form_4").toggle();

        $("#Customer_name_1").toggle();
        $("#Item_number_1").toggle();
        $("#order_search").toggle();

        $('#mask').toggle();
        
        if($('#mask').css('display') === 'none'){
            $("#slogan_1").text("Winpak COMS, internal test version");
        }
        else{
            $("#slogan_1").text("Winpak Template");
        }


       

    });



    /*
     $('#training_1').mousedown(function (event) {
     switch (event.which) {
     case 1:
     //alert('Left Mouse button pressed.');
     break;
     case 2:
     // alert('Middle Mouse button pressed.');
     break;
     case 3:
     $("#slogan_1").text("Winpak COMS, internal test version");
     
     $("#form_1").css("display", "block");
     $("#form_2").css("display", "block");
     $("#form_4").css("display", "block");
     
     $("#Customer_name_1").css("display", "block");
     $("#Item_number_1").css("display", "block");
     $("#order_search").css("display", "block");
     
     $('#mask').css('display', 'none');
     break;
     default:
     alert('You have a strange Mouse!');
     }
     });
     
     */
});