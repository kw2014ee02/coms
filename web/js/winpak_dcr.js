$(document).ready(function () {

    $("#dcr_div_btn_2").click(function (e) {
        var dcr_modal = document.getElementById('dcr_div_modal');
        dcr_modal.style.display = "none";

    });

    $("#dcr_div_btn_1").click(function (e) {

        /*
         if ($("#dcr_txt_1").val().length > 5)
         {
         alert("Memo can not be more than 5 words !");
         return;
         }
         */
        /*
         var order_number_email = document.getElementById('menu_title_2').innerHTML.trim().substring(18, document.getElementById('menu_title_2').innerHTML.trim().length);
         alert(order_number_email);
         */
        //var id = $("#dcr_div_modal").attr("file-path-and-name");


        // alert(id.match(/.*\\([^\.]+)\..*/)[1]);   // only file name, no extension
        // alert(id.match(/.+\\(.+)$/)[1]);  //file name with extension

        // alert(id.match(/^(.+)\\([^\\]+)$/)[2]); //file name with extension
        // alert(id.match(/^(.+)\\([^\\]+)$/)[1]);  // only path

        //alert($("#dcr_div_modal").attr("file-path-and-name").match(/^(.+)\\([^\\]+)$/)[1].match(/^(.+)\\([^\\]+)$/)[2]);  // parent directory

        var file_name = $("#dcr_div_modal").attr("file-path-and-name").match(/^(.+)\\([^\\]+)$/)[2];
        var file_parent = $("#dcr_div_modal").attr("file-path-and-name").match(/^(.+)\\([^\\]+)$/)[1].match(/^(.+)\\([^\\]+)$/)[2];

        var this_fn = $("#dcr_div_modal").attr("this-file-name");
        // alert(this_fn);
        //alert(file_parent + ">>>>" + file_name);
        //var memo=
        // alert($("#dcr_txt_1").val());

        $.ajax({
            type: "GET",
           // url: "add_memo",
            //url: "add_memo_update",
            url: "add_memo_update_again",
            data: {
                directory: file_parent,
                filename: file_name,
                memo: $("#dcr_txt_1").val()
            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
            beforeSend: function () {
                // $("#table_file_gif").show();

            },
            error: function () {
                alert('Can not add memo to database');
            },
            complete: function () {
                //  $("#table_file_gif").hide();
                change_memo_btn_color_now(this_fn);


            },
            success: function (data, textStatus, jqXHR) {
                //   alert(data);
                /*
                 if (data === 1) {
                 //alert('done adding memo to database');
                 var dcr_modal = document.getElementById('dcr_div_modal');
                 dcr_modal.style.display = "none";
                 } else {
                 alert('error adding memo');
                 }
                 */

                $.each(data, function (k, v) {
                    // alert(v.j_add_memo);
                    if (v.j_add_memo === "true") {
                        var dcr_modal = document.getElementById('dcr_div_modal');
                        dcr_modal.style.display = "none";
                    } else {
                        alert('error adding memo');
                    }
                });
            }
        });


    });

    function change_memo_btn_color_now(this_fn) {
        if ($("#dcr_txt_1").val().trim() === "") {
            //$('#table_file_list td:first-child:contains("' + this_fn + '")').next().next().css("color", "#878f8f");
            $("#table_file_list td:first-child").filter(function () {
                return $(this).text() === this_fn;
            }).next().next().css({"color":"#878f8f","transform":"scale(1, 1)"});
        } else {
            //$('#table_file_list td:first-child:contains("' + this_fn + '")').next().next().css("color", "#6666ff");
            $("#table_file_list td:first-child").filter(function () {
                return $(this).text() === this_fn;
            }).next().next().css({"color":"rgb(189, 107, 0)","transform":"scale(1.5, 1.5)"});
        }
    }

});