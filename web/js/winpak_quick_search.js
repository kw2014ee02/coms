$(document).ready(function () {

    $(function () {
        $("#order_search").autocomplete({
            source: function (request, response) {
                $.ajax({
                    //url: window.global_ip + "auto_input_box",
                    url: "auto_input_box",
                    type: "GET",
                    data: {
                        term: request.term,
                        p1: "primary_key"
                    },
                    dataType: "jsonp",
                    jsonp: "jsonp_test",
                    error: function () {
                        alert('Can not retrieve jsonp data');
                    },
                    success: function (data) {
                        //alert(data);
                        response(data);

                    }
                });
            },
            focus: function (event, ui) {
                $("#order_search").val(ui.item.label.substring(0, 8).trim());
                return false;
            },
            select: function (e, ui) {
                var slelcted_auto = $(this).val();
                ui.item.value = slelcted_auto.substring(0, 8).trim();
                // $("#order_search").val("$$$$$$$");
                //   alert(slelcted_auto.substring(0, 8).trim());
                $("#table_order_refresh").trigger("click");
            },
            change: function (e, ui) {
                //  var slelcted_auto = $(this).val();
                // $("#order_search").val(slelcted_auto.substring(0, 8).trim());
                // alert("changed!");
            }

        });
        // $("#city_from_search").attr("placeholder", "city where from, country");

    });


    /*
     $(function () {
     $("#order_search").autocomplete({
     minLength: 4,
     source: function (request, response) {
     $.ajax({
     url: window.global_ip + "auto_complete_order_number",
     type: "GET",
     data: {
     term: request.term
     },
     dataType: "jsonp",
     jsonp: "jsonp_test",
     error: function () {
     alert('Can not retrieve jsonp data');
     },
     success: function (data) {
     //alert(data);
     response(data);
     
     }
     });
     },
     focus: function (event, ui) {
     $("#order_search").val(ui.item.label);
     return false;
     }
     });
     // $("#city_from_search").attr("placeholder", "city where from, country");
     
     });
     */






    /*
     $("#order_search").click(function (e) {
     alert("fsdgrehretre");
     });
     */

    /*
     document.getElementById("order_search")
     .addEventListener("keyup", function (event) {
     event.preventDefault();
     if (event.keyCode === 13) {
     //document.getElementById("sign_in").click();
     alert("daa");
     }
     });
     
     
     $(function () {
     $("#order_search").autocomplete({
     source: function (request, response) {
     $.ajax({
     url: window.global_ip + "auto_complete_email",
     type: "GET",
     data: {
     term: request.term
     },
     dataType: "jsonp",
     jsonp: "jsonp_test",
     error: function () {
     alert('Can not retrieve jsonp data');
     },
     success: function (data) {
     //alert(data);
     response(data);
     
     }
     });
     },
     focus: function (event, ui) {
     $("#order_search").val(ui.item.label);
     return false;
     }
     });
     // $("#city_from_search").attr("placeholder", "city where from, country");
     
     });
     */


});


