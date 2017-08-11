/*
 
 $(document).ready(function () {
 
 $("#new_order_btn").click(function (e) {
 alert("good");
 // $(this).css("background", "#63b77b ");
 
 });
 
 
 });
 
 */


$(document).ready(function () {

    $("#Item_number").blur(function () {
        $("#Item_number_1").val($("#Item_number").val());
    });
    $("#Customer_name").blur(function () {
        $("#Customer_name_1").val($("#Customer_name").val());
    });

    var btn_create = document.getElementById("new_order_btn");    //save button
    var btn_create_1 = document.getElementById("new_order_btn_1");

    btn_create_1.onclick = function () {
        $('#Customer_name').val("");
        $('#new_order_number').val("");
        $('#Product_description').val("");
        $('#Customer_number').val("");
        $('#Sale_number').val("");
        $('#Item_number').val("");

        $('#PO_NUMBER').val("");
        $('#CA_FT_NPQ_NUMBER').val("");

        $("#datepicker_due_new").val("");

        $("#order_locked").css("display", "none");
        $("#order_unlocked").css("display", "none");

        $("#new_order_btn").prop('value', 'Save');


        $("#upload_btn").prop('disabled', false);
        $("#email_btn").prop('disabled', false);
        $("#file_browse_btn").prop('disabled', false);
        $("#email_list_btn").prop('disabled', false);
        $("#new_order_btn").prop('disabled', false);
        $(".primary_keys").prop('disabled', false);
        $("#datepicker_due_new").prop('disabled', false);

        $("#header").css("background-color", "#00A250");
        $("#footer").css("background-color", "#00A250");

        $("#table_order_refresh").trigger("click");
        $('#Customer_name').focus();


    };






    btn_create.onclick = function () {



        if ($("#new_order_btn").val() === "Save") {

            if ($("#select_code option:selected").text() === "Code") {
                alert("Select a product code.");
                // $('#select_code').trigger("click");
                // $('#select_code').focus().select();
                return;
            }




            // var test=getUserName();

            //   var wshNetwork = new ActiveXObject("WScript.Network");
            //             var userName = wshNetwork.UserName;

            //var x = location.hostname;
            //alert(x);
            //return;


            if ($('#Customer_name').val().trim() === "" || $('#Product_description').val().trim() === "") {
                alert("Entry for field in red is required");
                return;
            }

            if (localStorage.user_department_signed_in === undefined || localStorage.user_department_signed_in === null) {
                alert("Sign in first");
                return;
            }

            if ($("#Customer_name").val().length > 36)
            {
                alert("Customer name can not be more than 36 characters !");
                return;
            }
            if ($("#Product_description").val().length > 60)
            {
                alert("Product description can not be more than 60 characters !");
                return;
            }
            if ($("#Customer_number").val().length > 5)
            {
                alert("Customer number can not be more than 5 characters !");
                return;
            }
            if ($("#Sale_number").val().length > 7)
            {
                alert("Sale number can not be more than 7 characters !");
                return;
            }
            if ($("#Item_number").val().length > 15)
            {
                alert("Item number can not be more than 15 characters !");
                return;
            }


            //    alert(document.getElementById("Customer_name").value);
            //   return;

//         alert("create");

            //    var par1 = "61" + localStorage.user_department_signed_in + "0000";
            //   var par2 = localStorage.user_id_signed_in;
            //   var par3 = localStorage.user_department_signed_in;
            //   var par4 = document.getElementById("datepicker_due_new").value;

            var tmp_date = document.getElementById("datepicker_due_new").value;
            if (tmp_date.trim() === "") {
                //tmp_date = "2016-09-02";
                var d = new Date();
                d.setDate(d.getDate() + 30);
                var curr_date = d.getDate();
                var curr_month = d.getMonth();
                curr_month++;
                var curr_year = d.getFullYear();
                if (curr_date < 10) {
                    curr_date = "0" + curr_date;
                }
                if (curr_month < 10) {
                    curr_month = "0" + curr_month;
                }
                tmp_date = curr_year + "-" + curr_month + "-" + curr_date;
                alert("Default due date is :  " + tmp_date);
                // return;
            }

            /*
             $.get('http://128.1.10.116:8080/winpak/create_folder', function (data) {
             alert(data);
             });
             */

            /*
             var name = "dad";
             $.ajax({
             type: "GET",
             // url: "Item_in_transit_by_jsonp",
             url: "http://128.1.10.116:8080/winpak/create_folder",
             data: {
             folder_name: "folder_1001"
             // pwd: "123456"
             },
             dataType: "jsonp",
             jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
             //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
             jsonpCallback: "myjsonpcallbacknameinalllowercase",
             beforeSend: function () {
             $(".loading").html("数据加载中.");
             },
             error: function (XHR, textStatus, errorThrown) {
             alert('Can not retrieve jsonp data');
             alert("error: " + textStatus);
             alert("error: " + errorThrown);
             },
             complete: function () {
             
             alert("folder completed");
             
             },
             success: function (data, textStatus, jqXHR) {
             alert(data);
             alert("folder succeeded");
             }
             });
             */


            $.ajax({
                type: "GET",
                //url: "http://128.1.10.116:8080/winpak/create_folder",
                // url: window.global_ip + "create_folder",
                url: "create_folder",
                data: {
                    folder_name: "61" + localStorage.user_department_signed_in + "0000",
                    //pwd: "123456"
                    para_1: localStorage.user_id_signed_in,
                    para_2: localStorage.user_department_signed_in,
                    para_3: tmp_date,
                    para_4: "1",
                    para_5: "61",
                    para_6: localStorage.user_department_signed_in,
                    //   folder_name: par1

                    /*
                     p_auto_1: document.getElementById("Customer_name").value,
                     p_auto_2: $('#Product_description').val().trim(),
                     p_auto_3: $('#Customer_number').val().trim(),
                     p_auto_4: $('#Sale_number').val().trim(),
                     p_auto_5: $('#Item_number').val().trim()
                     */
                    p_auto_1: document.getElementById("Customer_name").value,
                    p_auto_2: document.getElementById("Product_description").value,
                    p_auto_3: document.getElementById("Customer_number").value,
                    p_auto_4: document.getElementById("Sale_number").value,
                    p_auto_5: document.getElementById("Item_number").value,
                    p_auto_6: document.getElementById("PO_NUMBER").value,
                    p_auto_7: document.getElementById("CA_FT_NPQ_NUMBER").value

                },
                dataType: "jsonp",
                jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                //jsonpCallback: "myjsonpcallbacknameinalllowercase",
                beforeSend: function () {
                    $("#new_folder_gif").show();
                },
                error: function () {
                    alert('Can not retrieve jsonp data: create new order button');
                },
                complete: function () {
                    $("#new_folder_gif").hide();

                },
                success: function (data, textStatus, jqXHR) {
                    $.each(data, function (k, v) {
                        //    alert(v.new_order_real_path);
                        // alert(v.folder_name);
                        document.getElementById("new_order_number").value = v.folder_name;
                        $("#order_locked").css("display", "block");

                    });
                    alert("New folder created");
                    $("#table_order_refresh").trigger("click");
                }
            });


        } else {     // update current order
            if ($('#Customer_name').val().trim() === "" || $('#Product_description').val().trim() === "") {
                alert("Entry for field in red is required");
                return;
            }

            if (localStorage.user_department_signed_in === undefined || localStorage.user_department_signed_in === null) {
                alert("Sign in first");
                return;
            }

            if ($("#Customer_name").val().length > 36)
            {
                alert("Customer name can not be more than 36 characters !");
                return;
            }
            if ($("#Product_description").val().length > 60)
            {
                alert("Product description can not be more than 60 characters !");
                return;
            }
            if ($("#Customer_number").val().length > 5)
            {
                alert("Customer number can not be more than 5 characters !");
                return;
            }
            if ($("#Sale_number").val().length > 7)
            {
                alert("Sale number can not be more than 7 characters !");
                return;
            }
            if ($("#Item_number").val().length > 15)
            {
                alert("Item number can not be more than 15 characters !");
                return;
            }



            /*
             var tmp_date = document.getElementById("datepicker_due_new").value;
             if (tmp_date.trim() === "") {
             //tmp_date = "2016-09-02";
             var d = new Date();
             d.setDate(d.getDate() + 30);
             var curr_date = d.getDate();
             var curr_month = d.getMonth();
             curr_month++;
             var curr_year = d.getFullYear();
             if (curr_date < 10) {
             curr_date = "0" + curr_date;
             }
             if (curr_month < 10) {
             curr_month = "0" + curr_month;
             }
             tmp_date = curr_year + "-" + curr_month + "-" + curr_date;
             alert("Default due date is :  " + tmp_date);
             // return;
             }
             */

            $.ajax({
                type: "GET",
                url: "modify_order",
                data: {
                    p_cus_name: document.getElementById("Customer_name").value,
                    p_pro_desc: document.getElementById("Product_description").value,
                    p_date: document.getElementById("datepicker_due_new").value,
                    p_gr_po: document.getElementById("PO_NUMBER").value,
                    p_cus_number: document.getElementById("Customer_number").value,
                    p_sale_number: document.getElementById("Sale_number").value,
                    p_item_number: document.getElementById("Item_number").value,
                    p_ca_ft_npq: document.getElementById("CA_FT_NPQ_NUMBER").value,
                    p_ftp_number: document.getElementById("new_order_number").value,
                    p_order_memo_area: document.getElementById("order_memo_area").value
                },
                dataType: "jsonp",
                jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                //jsonpCallback: "myjsonpcallbacknameinalllowercase",
                beforeSend: function () {
                    $("#new_folder_gif").show();
                },
                error: function () {
                    alert('Can not retrieve jsonp data: update order ');
                },
                complete: function () {
                    $("#new_folder_gif").hide();

                },
                success: function (data, textStatus, jqXHR) {
                    $.each(data, function (k, v) {
                        if (v.j_modify_memo === "true") {
                            $("#table_order_refresh").trigger("click");
                            alert('Order updated');

                        } else {
                            alert('error adding memo');
                        }
                    });
                }
            });

        }
    };
});
