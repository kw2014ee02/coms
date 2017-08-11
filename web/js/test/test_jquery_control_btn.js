$(function () {
    $("#filter").click(function () {
        var name = "name";
        $.ajax({
            url: "Item_in_transit",
            type: "GET",
            data: {
                name:name
            },
            //dataType: "json",
            error: function () {
                alert("error occured!!!");
            },
            success: function (data) {
                //response(data);
                alert('clicked!');
                //  alert("Evaluating date now Using S.O.P Method"+data);
                alert(data);
            }
        });
    });
});

$(document).ready(function () {
    $("#myButton").click(function (e) {
        alert("gkkkkkkooooo");
        $.ajax({
            type: "POST",
            url: "Item_in_transit",
            data: dataString,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.success) {
                    alert("good");
                } else {
                    alert("no..........");
                }
            },
            //If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Something really bad happened " + textStatus);
                $("#ajaxResponse").html(jqXHR.responseText);
            }
        });
    });
});
/*
 $(function () {
 $("button:first")
 .button()
 .click(function (event) {
 event.preventDefault();
 //getposdata1();
 item_locations();
 
 });
 });
 */

divs = "mydiv";
$(function () {
    $("button").click(function (event) {
        var buttonID = event.target.id;
        /*
         $.get('Item_in_transit', {"button-id": buttonID},
         function (resp) { // on sucess
         if (buttonID === "bands")
         alert("gggggg");
         else if (buttonID === "login") {
         event.preventDefault();
         //getposdata1();
         item_locations();
         }
         })
         .fail(function () {
         alert("Request failed.");
         });
         */

        $.ajax({
            url: "Item_in_transit",
            type: "GET",
            data: {
                "button-id": buttonID
            },
            //  dataType: "json",
            error: function () {
                alert("error occured!!!");
            },
            success: function (data) {
                // response(data);
                //  alert("Evaluating date now Using S.O.P Method");


                if (buttonID === "bands")
                    //alert("gggggg");
                    getposdata1();
                else if (buttonID === "login") {
                    event.preventDefault();
                    $("#" + divs).html(data);
                    item_locations();
                }

            }

        });
    });
});