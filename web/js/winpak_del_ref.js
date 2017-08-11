$(document).ready(function () {

    var btn_delete = document.getElementById("table_file_list_del");

    btn_delete.onclick = function () {
        alert($("#table_file_list").index());
        alert("delete");
    };

    var btn_refresh = document.getElementById("table_order_refresh");

    btn_refresh.onclick = function () {

        var click_type = document.getElementById("order_search").value;
        if (click_type===""){
            click_type="default";
        }        

        if (localStorage.user_department_signed_in === undefined || localStorage.user_department_signed_in === null) {
            alert("Sign in first");
            $("#table_order_number tr").remove();
            return;
        }

        if (document.getElementById('table_order_number').rows.length > 0) {
            $("#table_order_number tr").remove();
        }


        //alert(document.getElementById("order_select_menu").value);
        var sort_by = document.getElementById("order_select_menu").value;
        $.ajax({
            type: "GET",
            // url: "Item_in_transit_by_jsonp",
            //url: window.global_ip + "order_number",
            url: "order_number",
            data: {
                //para_1: sort_by,
                para_1: sort_by,
                para_2: click_type
            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
            beforeSend: function () {
                $("#table_folder_gif").show();
            },
            error: function () {
                alert('Can not retrieve jsonp data: refresh');
            },
            complete: function () {
                $("#table_folder_gif").hide();
                // $("tr").not(':first').hover(

                $("#tbl tr").hover(
                        function () {
                            $(this).css("background", "#99ccff");
                            $(this).css("color", "white");
                        },
                        function () {
                            $(this).css("background", "");
                            $(this).css("color", "black");
                        }
                );
                $("#tbl tbody tr:odd").addClass("odd");
                $("#tbl tbody tr:even").addClass("even");



            },
            success: function (data, textStatus, jqXHR) {

                //  tableCreate(data);
                // alert("ggggggggggg");
                order_tableCreate(data);
                
                /*   */
                show_hide_column(2, false);
                show_hide_column(3, false);
                show_hide_column(4, false);
                show_hide_column(5, false);
                show_hide_column(6, false);
                show_hide_column(7, false);
                show_hide_column(8, false);
                show_hide_column(9, false);
                show_hide_column(10, false);
                show_hide_column(11, false);
                
                
                

            }
        });
    };



    function show_hide_column(col_no, do_show) {
        var rows = document.getElementById('table_order_number').rows;

        for (var row = 0; row < rows.length; row++) {
            var cols = rows[row].cells;
            if (col_no >= 0 && col_no < cols.length) {
                cols[col_no].style.display = do_show ? '' : 'none';
            }
        }
    }


});


function order_tableCreate(data) {

    var tbl = document.getElementById('table_order_number');

    /*
     var tbl_2 = document.getElementById('table_order_number');
     var orderArrayHeader = ["ID", "Name"];
     var thead = document.createElement('thead');
     tbl_2.appendChild(thead);
     for (var i = 0; i < orderArrayHeader.length; i++) {
     thead.appendChild(document.createElement("th")).
     appendChild(document.createTextNode(orderArrayHeader[i]));
     }
     */
    var tbdy = document.createElement('tbody');

    $.each(data, function (k, v) {
        var row = tbl.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        var cell10 = row.insertCell(10);
        var cell11 = row.insertCell(11);



//alert(v.DUE_DATE);
        cell0.innerHTML = v.FTP_NUMBER;
        cell1.innerHTML = v.DUE_DATE;
        cell2.innerHTML = v.CUSTOMER_NAME;
        cell3.innerHTML = v.PRODUCT_DESCRIPTION;
        cell4.innerHTML = v.CUSTOMER_NUMBER;
        cell5.innerHTML = v.SALE_NUMBER;
        cell6.innerHTML = v.ITEM_NUMBER;
        
        cell7.innerHTML = v.PO_NUMBER;
        cell8.innerHTML = v.CA_FT_NPQ_NUMBER;
        cell9.innerHTML = v.LOCK_FLAG;
        cell10.innerHTML = v.LOCK_TXT;
        cell11.innerHTML = v.LOCKED_BY;



    });


    tbl.appendChild(tbdy);

}



function tableCreate(data) {

    var tbl = document.getElementById('tbl');

    var tbl_2 = document.getElementById('tbl_header');


    var orderArrayHeader = ["", "ID", "Name", "Email"];
    var thead = document.createElement('thead');
    tbl_2.appendChild(thead);
    for (var i = 0; i < orderArrayHeader.length; i++) {
        thead.appendChild(document.createElement("th")).
                appendChild(document.createTextNode(orderArrayHeader[i]));
    }

    var tbdy = document.createElement('tbody');

    $.each(data, function (k, v) {
        var row = tbl.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell1.innerHTML = v.ID;
        cell2.innerHTML = v.NAME;
        cell3.innerHTML = v.EMAIL;


    });


    tbl.appendChild(tbdy);

}