$(document).ready(function () {

    $("#template_search").keyup(function (e) {

        switch (e.keyCode) {
            case 13:
                // alert("13");
                //  alert($(this).val());
                //var dda = $(this).val();
                //$("#type_select_menu").val(document.getElementById("opt_1").text).change();
                //simulate_click_table_4($(this).val());
                break;
            case 50:                  //按键盘上面的2，非数字区域那边 
                //alert("50");
                //$("#type_select_menu").val(document.getElementById("opt_1").text).change();
                //simulate_click_table();
                break;
            default:
        }
    });


    $(function () {
        $("#template_search").autocomplete({
            select: function (e, ui) {

                e.preventDefault();
                //   search_template_table(ui.item.label);

                /* */
                $("#type_select_menu").val(document.getElementById("opt_1").text).change();
                //     search_template_table_no_db_1();
                var myVar = checkVariable(ui.item.label);


                //  search_template_table_no_db(ui.item.label);
                $("#template_search").val(ui.item.label.substr(0, ui.item.label.lastIndexOf('.')));


              
                //alert($("#template_search").val());
                //$('#template_search').keyup();






            },
            source: function (request, response) {
                $.ajax({
                    //url: window.global_ip + "auto_input_box",
                    url: "auto_input_box",
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



function simulate_click_table_4(menu_name) {

    //alert("ggg");
    //return;
    var search = menu_name;
    $("td").filter(function () {
        return $(this).text().indexOf(search) !== -1;
    }).trigger("click");
    /*
     var search = menu_name;
     var tableRow = $("td").filter(function () {
     return $(this).text().indexOf(search) !== -1;
     }).closest("tr");
     
     alert(tableRow.index());
     
     $(this).closest("tr").trigger("mouseover");
     $('#form_3').scrollTop(tableRow.top);
     */
    /*  
     var search = menu_name;
     $("td").filter(function () {
     return $(this).text().indexOf(search) !== -1;
     }).css('color', 'red');
     */


    /*
     var search = menu_name;
     $("td").filter(function () {
     return $(this).text().indexOf(search) !== -1;
     }).each(function () {
     alert($(this).text());
     //$(this).find('td:first').trigger("click");
     $(this).trigger("mouseover");
     var rowpos = $(this).position();
     $('#form_3').scrollTop(rowpos.top);
     });
     */
}
function search_template_table(selected_item) {

    //alert(selected_item);
    $("#type_select_menu").val(document.getElementById("opt_1").text).change();

    /*   */
    var aa = "▪ " + selected_item;






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



function search_template_table_no_db_1() {

    if ($("#table_file_list > tbody > tr").length === 0) {
        return setTimeout(search_template_table_no_db_1, 500);
        //  window.setTimeout(search_template_table_no_db_1, 100);
    }

}

function search_template_table_no_db(selected_item) {

    //  $("#type_select_menu").val(document.getElementById("opt_1").text).change();

    /*   */
    var menu_name = "";
    var file_menu_name = "▪ " + selected_item;
    file_menu_name = file_menu_name.substr(0, file_menu_name.lastIndexOf('.'));

    /* */

    // search_template_table_no_db_1();


    var menu_row = new RegExp("^61");

    //  alert($("#table_file_list > tbody > tr").length);
    //alert($('#table_file_list').children().length);
    /* */
    $("#table_file_list tr").each(function () {
        if (menu_row.test($(this).find('td:first').text())) {   // Node Row    
            menu_name = $(this).find('td:first').text();
            return;  // continue;

        } else {
            if ($(this).find('td:first').text().trim() === file_menu_name) {
                //alert("11111111");
                $(this).css("background-color", "#99ccff");
                return false;  // break;
            } else {
                // alert("00000000000");
            }
        }
    });

    // alert($("#table_file_list > tbody > tr").length);

    $("#table_file_list tr").each(function () {
        if ($(this).find('td:first').text() === menu_name) {   // Node Row    

            $(this).find('td:first').trigger("click");
            return false;

        }

    });


}


function checkVariable(p1) {
    // alert(p1);
    if ($("#table_file_list > tbody > tr").length !== 0 && p1 !== "undefined")
    {
        //   alert(p1);
        computeVariable(p1, $("#table_file_list > tbody > tr").length);
    } else
    {
        setTimeout(checkVariable, 100, p1);
    }
}

function computeVariable(selected_item, myVar) {

    var menu_name = "";
    var file_menu_name = "▪ " + selected_item;
    file_menu_name = file_menu_name.substr(0, file_menu_name.lastIndexOf('.'));


    var rowpos = "";


    /* */

    // search_template_table_no_db_1();


    var menu_row = new RegExp("^61");

    $("#table_file_list tr").each(function () {
        if (menu_row.test($(this).find('td:first').text())) {   // Node Row    
            menu_name = $(this).find('td:first').text();
            return;  // continue;

        } else {
            if ($(this).find('td:first').text().trim() === file_menu_name) {
                //alert("11111111");
                $(this).css("background-color", "#99ccff");

                return false;  // break;
            } else {
                //  alert("00000000000");
            }
        }
    });

    // alert($("#table_file_list > tbody > tr").length);
    /* */
    $("#table_file_list tr").each(function () {
        if ($(this).find('td:first').text() === menu_name) {   // Node Row    
            $(this).find('td:first').trigger("click");
            return false;
        }
    });

    $("#table_file_list tr").each(function () {
        if ($(this).find('td:first').text().trim() === file_menu_name) {   // Node Row    
            rowpos = $(this).position();
            // alert($('#form_3').offset().top);
            //  alert(rowpos.top);
            //$('#form_3').scrollTop(rowpos.top - 300);  

            //     $('#form_3').scrollTop(rowpos.top - ($('#form_3').height()/2)); 

            $('#table_oder_div_2').animate({scrollTop: rowpos.top - ($('#table_oder_div_2').height() / 2)});

            return false;
        }
    });



}


