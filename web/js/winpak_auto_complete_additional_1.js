$(document).ready(function () {

    $("#template_search").keyup(function (e) {

        switch (e.keyCode) {
            case 13:
                //  alert("13");
                //   $("#type_select_menu").val(document.getElementById("opt_1").text).change();
                //    simulate_click_table();
                break;
            case 50:
                alert("50");
                $("#type_select_menu").val(document.getElementById("opt_1").text).change();
                simulate_click_table();
                break;
            default:
        }
    });


    $(function () {
        $("#template_search").autocomplete({
            select: function (e, ui) {

                // e.preventDefault();
                search_template_table(ui.item.label);



            },
            source: function (request, response) {
                $.ajax({
                    url: window.global_ip + "auto_input_box",
                    type: "GET",
                    data: {
                        term: request.term,
                        p1: "template_search"
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
            }
            /*,
             focus: function (event, ui) {
             
             alert($("#template_search").val(ui.item.label));
             return false;
             }
             */
        });
    });
});


function simulate_click_table(menu_name) {
    
    

    if ($("#table_file_list > tbody > tr").length === 0) {
        return setTimeout(simulate_click_table, 500);
    }


    $("#table_file_list tr").each(function () {
        //alert($(this).find('td:first').text() + "     >>>     " + menu_name);
        if ($(this).find('td:first').text() === menu_name) {   // Node Row  
            
            $(this).find('td:first').trigger("click");

            var rowpos = $(this).position();
            $('#form_3').scrollTop(rowpos.top);
            
        }
    });

    /*
     if ($("#table_file_list > tbody > tr").length === 0) {
     return setTimeout(simulate_click_table, 500);
     }
     $("#table_file_list tr").each(function () {
     if ($(this).find('td:first').text() === "61004- Credit Application") {   // Node Row          
     $(this).find('td:first').trigger("click");
     //  $(this).css("background-color", "#99ccff");;
     //  alert($(this).text());
     }
     });
     */
}

function simulate_click_table_2(menu_name) {
    
    
//alert(menu_name);
    if ($("#table_file_list > tbody > tr").length === 0) {
        return setTimeout(simulate_click_table, 500);
    }
    
 //   alert(menu_name);
    var no_extension = menu_name.substr(0, menu_name.lastIndexOf('.'));
    $("#table_file_list tr").each(function () {
        //alert($(this).find('td:first').text() + "     >>>     " + menu_name);
        if ($(this).find('td:first').text() === no_extension) {   // Node Row  
         //   alert("here");
            alert($(this).text());
            //$(this).find('td:first').trigger("click");
            $(this).trigger("mouseover");

            var rowpos = $(this).position();
            $('#form_3').scrollTop(rowpos.top);
        }
    });

    /*
     if ($("#table_file_list > tbody > tr").length === 0) {
     return setTimeout(simulate_click_table, 500);
     }
     $("#table_file_list tr").each(function () {
     if ($(this).find('td:first').text() === "61004- Credit Application") {   // Node Row          
     $(this).find('td:first').trigger("click");
     //  $(this).css("background-color", "#99ccff");;
     //  alert($(this).text());
     }
     });
     */
}


function search_template_table(selected_item) {

    //alert(selected_item);
    $("#type_select_menu").val(document.getElementById("opt_1").text).change();
    
     /*   */
     var aa="▪ " + selected_item;

     
     
   
   
   
    /*  */

    $.ajax({
        type: "GET",
        url: window.global_ip + "search_template",
        data: {
            para_1: selected_item
        },
        dataType: "jsonp",
        jsonp: "jsonp_test",
        beforeSend: function () {

        },
        error: function () {
            alert('Can not retrieve jsonp data');
        },
        complete: function () {
            //$("#table_folder_gif").hide();
        },
        success: function (data, textStatus, jqXHR) {
            $.each(data, function (k, v) {
                simulate_click_table(v.MENU_NAME);
            });
        }
    });



    /*
     var e = jQuery.Event("keyup");
     //     e.which = 50; //choose the one you want
     e.keyCode = 50;
     $("#template_search").trigger(e);
     */
    
    simulate_click_table_2(aa);
}


