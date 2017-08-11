$(document).ready(function () {

    function moveCaretToEnd(el) {
        if (typeof el.selectionStart === "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
        } else if (typeof el.createTextRange !== "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    }

    $('#order_memo_area').focus(function () {

        if (msieversion()) {    // IE
            moveCaretToEnd(this);
        }



        $.ajax({
            type: "GET",
            url: "get_order_memo_sync",
            data: {
                p_ftp_number: document.getElementById("new_order_number").value
                        // p_order_memo_area: document.getElementById("order_memo_area").value
            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            beforeSend: function () {
                //  $("#new_folder_gif").show();
            },
            error: function () {
                alert('Can not retrieve jsonp data: update order memo ');
            },
            complete: function () {
                //   $("#new_folder_gif").hide();

            },
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (k, v) {
                    if (v.j_memo_sync !== null) {

                        /* */
                        $("#table_order_number td:first-child").filter(function () {
                            return $(this).text() === document.getElementById("new_order_number").value;
                        }).siblings(":last").html(v.j_memo_sync);

                        //alert(v.j_memo_sync.trim());

                        $("#order_memo_area").val(v.j_memo_sync);

                    } else {
                        alert('error syncing order memo');
                    }
                });
            }
        });


        /*
         //第一步，这是为了当文本框获得焦点的时候，去数据库获取最近的memo
         $("#table_order_refresh").trigger("click");
         
         
         //第二步, 现在要去取得表中刚更新的字段的值        
         
         //用最新数据库的memo来填充table表的memo字段
         
         
         //第三步， 用文本框的内容来更新table表的memo字段
         $("#table_order_number td:first-child").filter(function () {
         return $(this).text() === document.getElementById("new_order_number").value;
         }).siblings(":last").html(document.getElementById("order_memo_area").value);
         */

    });


    var timeoutId;
    $('#order_memo_area').on('input propertychange change', function () {
        console.log('Textarea Change');




        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            // Runs 1 second (1000 ms) after the last change    
            saveToDB();
            //alert("saved");
        }, 1000);


    });

    function saveToDB()
    {
        var d = new Date();
        $('.auto_save_message').html('Saved at: ' + d.toLocaleTimeString());


        $.ajax({
            type: "GET",
            url: "auto_save",
            data: {
                p_ftp_number: document.getElementById("new_order_number").value,
                p_order_memo_area: document.getElementById("order_memo_area").value
            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
            beforeSend: function () {
                //  $("#new_folder_gif").show();
            },
            error: function () {
                alert('Can not retrieve jsonp data: update order memo 2');
            },
            complete: function () {
                //   $("#new_folder_gif").hide();

            },
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (k, v) {
                    if (v.j_modify_memo === "true") {
                        //$("#table_order_refresh").trigger("click");
                        //alert('Order updated');

                        /*
                         $("#table_order_number td:first-child").filter(function () {
                         return $(this).text() === document.getElementById("new_order_number").value;
                         }).next().next().next().next().next().next().next().next().next().next().html(document.getElementById("order_memo_area").value);
                         */
                        // alert($("#table_order_number td:last-child").text());

                        $("#table_order_number td:first-child").filter(function () {
                            return $(this).text() === document.getElementById("new_order_number").value;
                        }).siblings(":last").html(document.getElementById("order_memo_area").value);

                    } else {
                        alert('error auto-saving memo');
                    }
                });
            }
        });



    }

});

