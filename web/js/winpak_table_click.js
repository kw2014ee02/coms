

$(document).ready(function () {
    $("#table_order_number").on("click", "tr", function (e) {

        $("#new_order_btn").prop('value', 'Update');

        var cell_value = [];
        var cell = $(e.target).get(0);
        $('td', $(this)).each(function (i, td) {
            cell_value[i] = $(td).text();
            //  alert(cell_value[i]);
        });
        document.getElementById('menu_title_2').innerHTML = "Existing Order :  " + cell_value[0];

        //   $("#order_search").val(cell_value[0]);


        $("#Customer_name_1").val(cell_value[2]);
        $("#Item_number_1").val(cell_value[6]);

        $("#new_order_number").val(cell_value[0]);
        $("#datepicker_due_new").val(cell_value[1]);
        $("#Customer_name").val(cell_value[2]);
        $("#Product_description").val(cell_value[3]);
        $("#Customer_number").val(cell_value[4]);
        $("#Sale_number").val(cell_value[5]);
        $("#Item_number").val(cell_value[6]);

        $("#PO_NUMBER").val(cell_value[7]);
        $("#CA_FT_NPQ_NUMBER").val(cell_value[8]);

        $("#LOCK_FLAG").val(cell_value[9]);
        if (cell_value[10].trim() === "undefined") {
            $("#order_memo_area").val("Order memo ....");
        } else {
            $("#order_memo_area").val(cell_value[10]);
        }


        $("#order_locked").css("display", "none");
        $("#order_unlocked").css("display", "none");
        if (cell_value[9] === "0") {
            $("#order_locked").css("display", "block");

            $("#upload_btn").prop('disabled', false);
            $("#email_btn").prop('disabled', false);
            $("#file_browse_btn").prop('disabled', false);
            $("#email_list_btn").prop('disabled', false);
            $("#new_order_btn").prop('disabled', false);
            $(".primary_keys").prop('disabled', false);
            $("#datepicker_due_new").prop('disabled', false);
            $("#order_memo_area").prop('disabled', false);
            $("#datepicker_process").prop('disabled', false);


            $("#header").css("background-color", "#00A250");
            $("#footer").css("background-color", "#00A250");

        } else {
            $("#order_unlocked").css("display", "block");

            $("#upload_btn").prop('disabled', true);
            $("#email_btn").prop('disabled', true);
            $("#file_browse_btn").prop('disabled', true);
            $("#email_list_btn").prop('disabled', true);
            $("#new_order_btn").prop('disabled', true);
            $(".primary_keys").prop('disabled', true);
            $("#datepicker_due_new").prop('disabled', true);
            $("#order_memo_area").prop('disabled', true);
            $("#datepicker_process").prop('disabled', true);

            $("#header").css("background-color", "#EBEBE4");
            $("#footer").css("background-color", "#EBEBE4");
        }

        if (cell_value[11].trim() !== "undefined") {
            if (cell_value[9] === "0") {
                $("#locked_by").val("Released by: " + cell_value[11]);
            } else {
                $("#locked_by").val("Locked by: " + cell_value[11]);
            }
        } else {
            $("#locked_by").val("");
        }
        

// $('#h_1').attr('value', cell_value[0]);
        //alert($('#h_1').attr('value'));
        //   $("#varname").attr("value",'test');//填充内容 
        //  $("#varname").val("123123123");
        //    var test1112=$("#varname").val();
        /*
         alert($('input#varname').val());
         alert($('input[name=varname]').val());
         alert($('input[type=hidden]').val());
         alert($(':hidden#varname').val());
         alert($('input:hidden[name=varname]').val());
         
         var tet1111=$('input:hidden[name=varname]').val();
         var tet1112=$(':hidden#varname').val();
         */





        /*
         var temp_str_1=$("#type_select_menu").val().substring(0,10);
         if(temp_str_1==="Production"){
         document.getElementById("opt_2").text = "Production     ( " + cell_value[0] + " )";
         }
         */

        document.getElementById("opt_2").text = "Progress     ( " + cell_value[0] + " )";
        $("#type_select_menu").val(document.getElementById("opt_2").text).change();
        //$("#type_select_menu").val(document.getElementById("opt_1").text).change();

        /*
         var cell = $(e.target).get(0);
         var tr = $(this);
         $('td', tr).each(function (i, td) {
         alert($(td).text() + (td === cell ? ' [clicked]' : ''));
         });
         */

        //   alert($(this).text());
        //  alert($(this).index());
        //   alert( $(this).parent().siblings(":first").text());
        //     alert($(this).find('td').siblings(":first").text());
        //     alert($(this).find('td').siblings(":first").next().text());

        //   var t = document.getElementById('menu_title_2').innerHTML;
        // alert(t);

        //    document.getElementById('menu_title_2').innerHTML = t + "   test" + $(this).find('td').siblings(":first").text();


    });
});



/*
 $(document).ready(function () {
 var t = document.getElementById('tbl');
 t.onclick = function (event) {
 event = event || window.event; //IE8
 var target = event.target || event.srcElement;
 while (target && target.nodeName !== 'TR') { // find TR
 target = target.parentElement;
 }
 //if (!target) { return; } //tr should be always found
 var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
 //var cells = target.getElementsByTagName('td'); //alternative
 if (!cells.length || target.parentNode.nodeName === 'THEAD') {
 return;
 }
 
 
 var a1 = cells[2].innerHTML;
 alert(a1);
 
 //console.log(target.nodeName, event);
 };
 });
 */
 