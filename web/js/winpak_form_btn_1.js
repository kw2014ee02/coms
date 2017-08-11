/*
 
 $(document).ready(function () {
 
 $("#new_order_btn").click(function (e) {
 alert("good");
 // $(this).css("background", "#63b77b ");
 
 });
 
 
 });
 
 */


$(document).ready(function () {

    var btn_create = document.getElementById("new_order_btn");

    btn_create.onclick = function () {
        
 
        if ($('#Customer_name').val().trim() === "" || $('#Product_description').val().trim() === "") {
            alert("Entry for field in red is required");
            return;
        }

        if (localStorage.user_department_signed_in === undefined || localStorage.user_department_signed_in === null) {
            alert("Sign in first");
            return;
        }


        

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
            url: window.global_ip + "create_folder",
            data: {
                folder_name: "61" + localStorage.user_department_signed_in + "0000",
                //pwd: "123456"
                para_1: localStorage.user_id_signed_in,
                para_2: localStorage.user_department_signed_in,
                para_3: tmp_date,
                para_4: "1",
                para_5: "61",
                para_6: localStorage.user_department_signed_in

                        //   folder_name: par1



            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
            beforeSend: function () {
                $("#new_folder_gif").show();
            },
            error: function () {
                alert('Can not retrieve jsonp data');
            },
            complete: function () {
                $("#new_folder_gif").hide();

            },
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (k, v) {
                    //    alert(v.new_order_real_path);
                    // alert(v.folder_name);
                    document.getElementById("new_order_number").value = v.folder_name;

                });
                alert("New folder created");
                $("#table_order_refresh").trigger("click");
            }
        });



    };
});
