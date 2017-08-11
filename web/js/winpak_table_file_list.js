$(document).ready(function () {

    $("#table_file_list").on("mousedown", "td", function (event) {
        document.oncontextmenu = function () {
            return false;
        };
        event.preventDefault();

        if ($("#type_select_menu").val().trim() !== 'Templates') {


            switch (event.which) {
                case 1:
                    //alert('Left Mouse button pressed.');
                    break;
                case 2:
                    //alert('Middle Mouse button pressed.');
                    break;
                case 3:
                    //alert($(this).text());
                    //alert($(this).closest("tr").css("background-color"));
                    //alert($(this).closest("tr").css("background-color"));
                    //alert($("#type_select_menu").val().trim().match(/\d+/)[0]);
                    //alert($(this).text());


                    if (jQuery.inArray($(this).text(), arr_text_p) !== -1) {   // Node Row                       
                        var change_color = $(this).closest("tr").css("background-color");
                        switch (change_color) {
                            case "rgb(255, 128, 128)": //pink
                                $(this).closest("tr").css("background-color", "rgb(255, 255, 128)");
                                $(this).closest("tr").css("color", "rgb(0, 0, 0)");
                                break;
                            case "rgb(255, 255, 128)": //yellow
                                $(this).closest("tr").css("background-color", "rgb(102, 204, 102)");
                                $(this).closest("tr").css("color", "rgb(0, 0, 0)");
                                //$(this).closest("tr").css("font-weight", "900");
                                break;
                            case "rgb(102, 204, 102)":  //green
                                $(this).closest("tr").css("background-color", "transparent");
                                $(this).closest("tr").css("color", "rgb(0, 0, 0)");
                                $(this).closest("tr").css("font-weight", "200");
                                break;
                            case "rgba(0, 0, 0, 0)":  // transparent
                                $(this).closest("tr").css("background-color", "rgb(255, 128, 128)");
                                $(this).closest("tr").css("color", "rgb(0, 0, 0)");
                                break;
                                // case "rgb(153, 204, 255)":  // transparent
                                // break;
                            default:
                                $(this).closest("tr").css("background-color", "rgb(255, 128, 128)");
                                $(this).closest("tr").css("color", "rgb(0, 0, 0)");
                                break;
                                //alert('You have a strange Mouse!');
                        }

                        change_color = $(this).closest("tr").css("background-color");

                        $.ajax({
                            type: "GET",
                            url: "change_color",
                            data: {
                                ftp_number: $("#type_select_menu").val().trim().match(/\d+/)[0],
                                filename: $(this).text(),
                                color: $(this).closest("tr").css("background-color")
                            },
                            dataType: "jsonp",
                            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
                            beforeSend: function () {
                            },
                            error: function () {
                                alert('Can not do color..');
                            },
                            complete: function () {
                                // change_memo_btn_color_now(this_fn);
                            },
                            success: function (data, textStatus, jqXHR) {
                                $.each(data, function (k, v) {
                                    if (v.j_modify_color === "false") {
                                        alert("error: " + v.j_modify_color);
                                    }
                                });
                            }
                        });

                    }
                    break;
                default:
                    //alert('You have a strange Mouse!');
            }
        }

    });

    $("#table_file_list").on("click", "tr", function () {

        /*
         var cell_value = [];
         var cell = $(e.target).get(0);        
         //  alert(cell);
         $('td', $(this)).each(function (i, td) {
         cell_value[i] = $(td).text();
         //alert(cell_value[i]);
         if ($(td).text() === "X") {
         alert(cell_value[2]);
         }
         
         });
         */
        return;
        //   $(this).css("background", "#99ccff");
        //  $(this).css("color", "white");

        // document.getElementById('table_file_list').deleteRow($(this).index());

        // window.open("pdf/0626997.pdf");
        //    window.open("C:/Users/w15rdknl/Documents/NetBeansProjects/winpak/build/web/pdf/0626997.pdf");
        // window.open($(this).find('td').siblings(":first").text());

        // var opt_selected = $('#type_select_menu').find(":selected").val();            

        var opt_selected = document.getElementById('type_select_menu').value;
        // alert(opt_selected);
        if (opt_selected.length < 10) {   // Templates is selected
            if ($(this).index() === 0) {
                window.open($(this).find('td').siblings(":first").text());
            } else {
                window.open("pdf/original/" + $(this).find('td:first').text());
            }
        } else {
// alert("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).find('td:first').text());
            //  window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).find('td:first').text());
            window.open("pdf/" + opt_selected.trim().match(/\d+/)[0] + "/" + $(this).find('td:first').text());
        }

//   window.open("pdf/original/" + $(this).find('td:first').text());

    });
    $("#table_file_list").on("click", "td", function (event) {
        event.preventDefault();

        //alert(msieversion());
        /**/
        var opt_selected = document.getElementById('type_select_menu').value;
        // var arr = [1, 6, 22, 24, 26];  //toggle row /parent row    
        /* new
         var arr_text = ["61002- Credit Application", "61004- Quote Item Request Forms",
         , "61005- Item Request/MO Comment",
         "61006- Print Checklist", "61007- Sales Order", "61008- File Assessment",
         "61009- Graphic Quote Request (page 1)", "61010- Graphic Quote (page 2)",
         "61012- Quote Templates", "61014- Blue Sheet", "61015- Chemical Analysis",
         "61016- Graphic Checklist"];
         
         var arr_link = ["61001- Fast Track", "61003- Die Drawing"
         , "61011- Art Work", "61013- Purchase Order"];
         */

        /*  old
         var arr = [1, 6, 22, 24, 26];  //toggle row /parent row       
         var arr_text = ["61002- Credit Application", "61004- Item Request/MO Comment",
         "61005- Print Checklist", "61006- Sales Order", "61007- File Assessment",
         "61008- Graphic Quote Request (page 1)", "61009- Graphic Quote (page 2)",
         "61011- Quote Templates", "61013- Blue Sheet", "61014- Chemical Analysis",
         "61015- Graphic Checklist"];
         
         var arr_link = ["61001- Fast Track", "61003- Die Drawing"
         , "61010- Art Work", "61012- Purchase Order"];
         */
        /*
         $("#table_file_list tr:not(.child-row-class)").each(function () {
         
         // alert($(this).html());
         // alert($(this).parent().parent().index());
         //$("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
         });
         $("#table_file_list").find('tr:not(.child-row-class)').each(function () {
         //  alert($(this).parent().parent().index());
         //   alert($(this).html());
         //$("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
         });
         */


        if (msieversion()) {    // IE
            if (opt_selected.length < 10) {  // Templates is selected
// alert($(this).parent().parent().find('td:first').text());
                if (jQuery.inArray($(this).parent().parent().find('td:first').text(), arr_text) !== -1) {   // Node Row
// alert($(this).parent().parent().nextUntil('tr:not(.child-row-class)').index());
//alert($(this).parent().parent().nextUntil('tr:not(.child-row-class)').length);
// $(this).parent().parent().nextUntil('tr:not(.child-row-class)').toggle();
//  $(this).parent().parent().nextUntil('tr:not(.child-row-class)').toggle();
//   alert($(this).parent().parent().index());                   
// $('.child-row-class').toggle().siblings('.child-row-class').hide();
// $('.child-row-class').toggle();
//     alert(err_1);
//  $('#table_file_list tr').eq($(this).parent().parent().index()).siblings('.child-row-class').toggle();
//     $(this).parent().parent().siblings('.child-row-class').toggle();
//  $(this).parent().parent().next().toggle();

//$(this).parent().parent().nextUntil('tr:not(.child-row-class)').toggle();
//    alert($(this).parent().parent().next().index());

//  alert($this.find('td:first').text());


//alert($(this).parent().parent().find('td:first').text());
//alert($(this).parent().parent().next().text());

                    /*
                     alert($(this).parent().parent().text());
                     alert($(this).parent().parent().next().text());
                     
                     alert($(this).parent().text());
                     alert($(this).parent().next().text());
                     $(this).parent().parent().next().toggle();
                     */






                    var toggle_1 = $(this).parent().parent().next();
                    while (toggle_1.find('tr.child-row-class').text() !== "") {
//  alert(toggle_1.is(":visible")+"&&&&"+toggle_1.text());
//  alert(toggle_1.is(":visible"));

                        /*
                         if (toggle_1.is(":visible")) {
                         toggle_1.css('display', 'none');
                         } else {
                         toggle_1.css('display', 'table-row');
                         }
                         */
                        toggle_1.toggle();
                        toggle_1 = toggle_1.next();
                    }



                    /* 
                     
                     var toggle_1 = $(this).parent().parent().next();
                     
                     
                     while (toggle_1.find('tr.child-row-class').text() !== "") {
                     //  alert(toggle_1.is(":visible"));
                     if (toggle_1.is(":visible")) {
                     //     alert("to hide");
                     toggle_1.css('display', 'none');
                     } else {
                     //  alert("to show"+toggle_1.find('tr.child-row-class').text());
                     // toggle_1.css('display', 'table-row');
                     toggle_1.toggle(true);
                     }
                     
                     toggle_1 = toggle_1.next();
                     
                     //    toggle_1.toggle();
                     //    toggle_1 = toggle_1.next();
                     }
                     */

                    /*  
                     var toggle_1 = $(this).parent().parent().next();
                     
                     while (toggle_1.find('tr.child-row-class').text() !== "") {
                     
                     // alert(toggle_1.find('tr.child-row-class').text());
                     
                     
                     //toggle_1.toggle($('.child-row-class').css('display') === 'none');
                     toggle_1.toggle();
                     // alert(toggle_1.find('tr.child-row-class').text());
                     //alert(toggle_1.find('td:first').text());
                     toggle_1 = toggle_1.next();
                     }
                     */
// return;

                    /*
                     $("#table_file_list tr.child-row-class").each(function () {
                     // alert($(this).html());
                     //  alert($(this).parent().prevAll().index());
                     //   var toggle_index = $(this).parent().prevAll().index() + 1;
                     //  toggle_index=toggle_index % ($('#table_file_list tr').length + 1);
                     var toggle_index = $(this).parent().prevAll().length;
                     toggle_index = toggle_index % ($('#table_file_list tr').length);
                     // alert($(this).html() + toggle_index);
                     // alert($(this).text());
                     //$("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
                     });
                     */

                } else {

                    if ($(this).index() === 0) {                                                   // first td /cell clicked                        
                        var child_row = new RegExp('^▪ ');
                        if (child_row.test($(this).parent().parent().find('td:first').text())) {   // Child row
                            var old_name = $(this).text();


                            // 下面这句是把▪替换回$，版本4
                            //old_name = old_name.replace(/\▪./g, '$');

                            // 新版本，直接去掉额外的▪和空格
                            old_name = old_name.substring(2);

                            // alert("pdf/original/" + old_name);
                            //   window.open("pdf/original/" + old_name);


                            var extension = $(this).next().text().substr(($(this).next().text().lastIndexOf('.') + 1));
                            //alert("pdf/original/" + old_name + '.' +extension);
                            window.open("pdf/original/" + old_name + '.' + extension);
                            //window.location.assign("pdf/original/" + old_name);
                            //  tes1="//128.1.10.116:8080/winpak/pdf/original/" + old_name;
                            //  alert(tes1);

                            // var win = window.open();
                            //  win.document.write('<iframe width="560" height="315" src=tes1 frameborder="0" allowfullscreen></iframe>')

                        } else {                                                                   // not child row
//window.open($(this).next().text());

                            if (jQuery.inArray($(this).parent().parent().find('td:first').text(), arr_link) !== -1) {    //row is a link
                                if ($(this).next().text().trim() === "") {
                                    alert("An upload action required");
                                } else {
// alert($(this).next().text());
                                    window.open($(this).next().text());
                                }
                            } else {                                                                           //row is a file
                                alert("here");
                                window.open("pdf/original/" + $(this).text());
                            }
                        }
                    } else {
                    }

                    /*
                     if ($(this).index() === 0) {
                     if (err_1 === 0 || err_1 === 5) {
                     // if ($(this).text() === "61001- Fast Track") {
                     window.open($(this).next().text());
                     } else {
                     var old_name = $(this).text();
                     old_name = old_name.replace(/\▪./g, '$');
                     
                     // window.open("pdf/original/" + $(this).text());
                     window.open("pdf/original/" + old_name);
                     }
                     }
                     */
                }
            } else {                    // Production is selected  222
                if ($(this).index() === 0) {
                    //window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).text());
                    // alert($(this).text() + "next()>>" + $(this).next().text());
                    if ($(this).next().text() === "null") {   // menu row


                        //  alert($(this).parent().parent().children().index($(this).parent()));  // correct row index in IE


                        if ($(this).text() === arr_text_p[0]) {

                            // alert($("#table_file_list tr:eq(1)").find('td:first').text());
                            var i_index = 1;
                            while ($("#table_file_list tr:eq(" + i_index + ")").find('td:first').text().substr(0, 5) === arr_text_p[0].substring(0, 5)) {
                                $("#table_file_list tr:eq(" + i_index + ")").toggle();
                                i_index = i_index + 1;
                            }


                            /*
                             var toggle_2 = $(this).parent().parent().next();
                             while (toggle_2.find('tr.child-row-class').text() !== "") {
                             toggle_2.toggle();
                             toggle_2 = toggle_2.next();
                             }
                             */

                            //$(this).parent().nextUntil('tr:not(.child-row-class)').toggle();

                            /*
                             alert($(this).text());
                             
                             var toggle_2 = $(this).parent().parent().next();
                             alert(toggle_2.index());
                             alert(toggle_2.find('td:first').text());
                             //alert(toggle_2.find('td:first').text().substr(0,5));
                             //alert(arr_link[0].substring(0,5));
                             if(toggle_2.find('td:first').text().substr(0,5)==="61000- IE"){
                             alert(toggle_2.find('td:first').text().substr(0,5));
                             toggle_2.show();
                             }
                             */



                            //var ttt1 = toggle_2.find('tr.child-row-class').text();
                            // alert("ttt1 |||||||||||| " + ttt1);
                            //    alert(toggle_2 + ">>>" + $(this).parent().parent().find('td:first').text());
                            //alert(toggle_2 + ">>>" + $(this).parent().parent().children().index($(this).parent()).find('td:first').text());
                            // toggle_2 = toggle_2.next();

                            //  alert(toggle_2);

                            /*   
                             $('#table_file_list tr').each(function () {
                             if ($(this).find('tr.child-row-class' !== "")) {
                             alert($(this).find('tr.child-row-class').text());
                             }
                             });
                             */

                            /*
                             
                             alert($(this).text());
                             alert($(this).parent().index());
                             //$("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").index();
                             var toggle_2 = $(this).parent().index() + 1;
                             alert(toggle_2.find('tr.child-row-class').text());
                             while (toggle_2.find('tr.child-row-class').text() !== "") {
                             toggle_2.toggle();
                             toggle_2 = toggle_2.next();
                             }
                             */
                        } else {
                            $(this).parent().nextUntil('tr:not(.child-row-class)').toggle();
                        }
                    } else {
                        // alert($(this).text());
                        // window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).text());
                        window.open("pdf/" + opt_selected.trim().match(/\d+/)[0] + "/" + $(this).text());
                    }
                } else if ($(this).index() === 2) {

                    //clear textarea
                    $("#dcr_txt_1").val("");

                    //get file name and directory
                    var file_name = $(this).prev().text().match(/^(.+)\\([^\\]+)$/)[2];
                    var file_parent = $(this).prev().text().match(/^(.+)\\([^\\]+)$/)[1].match(/^(.+)\\([^\\]+)$/)[2];

                    // get existing memo
                    $.ajax({
                        async: false,
                        type: "GET",
                        url: "get_memo",
                        data: {
                            directory: file_parent,
                            filename: file_name
                        },
                        dataType: "jsonp",
                        jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                        //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                        //jsonpCallback: "myjsonpcallbacknameinalllowercase",
                        beforeSend: function () {
                            // $("#table_file_gif").show();

                        },
                        /*
                         error: function (e) {
                         alert('Can not get memo from database' + e);
                         },
                         */
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert('Can not get memo from database');
                            alert(xhr.status);
                            alert(thrownError);
                        },
                        complete: function () {
                            //  $("#table_file_gif").hide();

                        },
                        success: function (data, textStatus, jqXHR) {
                            $.each(data, function (k, v) {
                                // alert(v.j_memo);
                                $("#dcr_txt_1").val(v.j_memo);
                            });
                        }
                    });


                    // pass filename to pop-up memo window
                    $("#dcr_div_modal").attr("file-path-and-name", $(this).prev().text());
                    $("#dcr_div_modal").attr("this-file-name", $(this).prev().prev().text());
                    //end of pass filename to pop-up memo window

                    var dcr_modal = document.getElementById('dcr_div_modal');
                    dcr_modal.style.display = "block";

                    var dcr_words_in_textarea = wordCount($('#dcr_txt_1').val());
                    $('#display_count').text(dcr_words_in_textarea.words);
                    $('#word_left').text(100 - dcr_words_in_textarea.words);

                    /*
                     if (localStorage.user_department_signed_in !== "12" &&
                     localStorage.user_department_signed_in !== "23") {
                     alert("Delete is not permitted");
                     return;
                     }
                     //alert("Please contact support for delete permission");
                     
                     var clicked_value = $(this).prev().prev().text();
                     var table_loop = 0;
                     $("#table_file_list  tr").each(function () {
                     if ($(this).find('td:first').text() === clicked_value) {
                     return false;
                     }
                     table_loop++;
                     });
                     //var clicked_row = $(this).closest('tr').index();         
                     $.ajax({
                     type: "GET",
                     //url: window.global_ip + "delete_file",
                     url: "delete_file",
                     data: {
                     file_path: $(this).prev().text()
                     },
                     dataType: "jsonp",
                     jsonp: "jsonp_test",
                     beforeSend: function () {
                     $("#table_file_gif").show();
                     },
                     error: function () {
                     alert('Can not retrieve jsonp data');
                     },
                     complete: function () {
                     $("#table_file_gif").hide();
                     },
                     success: function (data, textStatus, jqXHR) {
                     //alert(data);
                     $.each(data, function (k, v) {
                     if (v.DELETE_FLAG === "true") {
                     document.getElementById("table_file_list").deleteRow(table_loop);
                     //  alert("file deleted");
                     } else {
                     alert("can not delete file");
                     }
                     });
                     }
                     });
                     //alert($(this).prev().text());
                     */
                }
            }
        } else {    // Not IE
            if (opt_selected.length < 10) {  // Templates is selected
//if (jQuery.inArray($(this).parent().index(), arr) !== -1) {
                if (jQuery.inArray($(this).parent().find('td:first').text(), arr_text) !== -1) {

//  alert($(this).parent().find('td:first').text());
//  alert($(this).parent().next().text());

                    $(this).parent().nextUntil('tr:not(.child-row-class)').toggle();
                } else {
                    if ($(this).index() === 0) {                                                   // first td /cell clicked                        
                        var child_row = new RegExp('^▪ ');
                        if (child_row.test($(this).text())) {                                       // Child row
                            var old_name = $(this).text();

                            // 下面这句是把▪替换回$，版本4
                            //old_name = old_name.replace(/\▪./g, '$');

                            // 新版本，直接去掉额外的▪和空格
                            old_name = old_name.substring(2);

                            //   alert("pdf/original/" + old_name);
                            //   alert($(this).text() + " next is : " + $(this).next().text());
                            // var extension = $(this).next().text().substr( ($(this).next().text().lastIndexOf('\\') +1) );
                            // alert(extension);
                            var extension = $(this).next().text().substr(($(this).next().text().lastIndexOf('.') + 1));
                            //alert("pdf/original/" + old_name + '.' +extension);
                            window.open("pdf/original/" + old_name + '.' + extension);
                        } else {                                                                   // not child row
                            if (jQuery.inArray($(this).parent().find('td:first').text(), arr_link) !== -1) {    //row is a link
                                if ($(this).next().text().trim() === "") {
                                    alert("An upload action required");
                                } else {
// alert($(this).next().text());
                                    window.open($(this).next().text());
                                }
                            } else {                                                                           //row is a file
// alert($(this).text());
                                window.open("pdf/original/" + $(this).text());
                            }
                        }
                    } else {
                    }
                    /*
                     if ($(this).index() === 0) {
                     if ($(this).parent().index() === 0 || $(this).parent().index() === 5) {
                     // if ($(this).text() === "61001- Fast Track") {
                     window.open($(this).next().text());
                     } else {
                     var old_name = $(this).text();
                     old_name = old_name.replace(/\▪./g, '$');
                     
                     // window.open("pdf/original/" + $(this).text());
                     window.open("pdf/original/" + old_name);
                     }
                     }
                     */
                }
            } else {                    // Production is selected  NOT IE   do here 
                if ($(this).index() === 0) {
                    /*  */
//alert($(this).next().text());
                    if ($(this).next().text() === "null") {
//  alert("610000");
                        $(this).parent().nextUntil('tr:not(.child-row-class)').toggle();
                    } else {
//  alert($(this).text());
                        //window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).text());
                        window.open("pdf/" + opt_selected.trim().match(/\d+/)[0] + "/" + $(this).text());
                    }

                } else if ($(this).index() === 2) {

                    //clear textarea
                    $("#dcr_txt_1").val("");

                    //get file name and directory
                    var file_name = $(this).prev().text().match(/^(.+)\\([^\\]+)$/)[2];
                    var file_parent = $(this).prev().text().match(/^(.+)\\([^\\]+)$/)[1].match(/^(.+)\\([^\\]+)$/)[2];

                    // get existing memo
                    $.ajax({
                        async: false,
                        type: "GET",
                        url: "get_memo",
                        data: {
                            directory: file_parent,
                            filename: file_name
                        },
                        dataType: "jsonp",
                        jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                        //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                        //jsonpCallback: "myjsonpcallbacknameinalllowercase",
                        beforeSend: function () {
                            // $("#table_file_gif").show();

                        },
                        /*
                         error: function (e) {
                         alert('Can not get memo from database' + e);
                         },
                         */
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert('Can not get memo from database');
                            alert(xhr.status);
                            alert(thrownError);
                        },
                        complete: function () {
                            //  $("#table_file_gif").hide();

                        },
                        success: function (data, textStatus, jqXHR) {
                            $.each(data, function (k, v) {
                                // alert(v.j_memo);
                                $("#dcr_txt_1").val(v.j_memo);



                            });
                        }
                    });


                    // pass filename to pop-up memo window
                    $("#dcr_div_modal").attr("file-path-and-name", $(this).prev().text());
                    $("#dcr_div_modal").attr("this-file-name", $(this).prev().prev().text());

                    //end of pass filename to pop-up memo window

                    var dcr_modal = document.getElementById('dcr_div_modal');
                    dcr_modal.style.display = "block";



                    // var v = wordCount($('#dcr_txt_1').val());
                    //alert(v.words);

                    var dcr_words_in_textarea = wordCount($('#dcr_txt_1').val());
                    $('#display_count').text(dcr_words_in_textarea.words);
                    $('#word_left').text(100 - dcr_words_in_textarea.words);



                    /*
                     if (localStorage.user_department_signed_in !== "12" &&
                     localStorage.user_department_signed_in !== "23") {
                     alert("Delete is not permitted");
                     return;
                     }
                     //  alert("Please contact support for delete permission");
                     //  alert($(this).prev().text());
                     var clicked_row = $(this).closest('tr').index();
                     //return;
                     
                     $.ajax({
                     type: "GET",
                     //url: window.global_ip + "delete_file",
                     url: "delete_file",
                     data: {
                     file_path: $(this).prev().text()
                     },
                     dataType: "jsonp",
                     jsonp: "jsonp_test",
                     beforeSend: function () {
                     $("#table_file_gif").show();
                     },
                     error: function () {
                     alert('Can not retrieve jsonp data');
                     },
                     complete: function () {
                     $("#table_file_gif").hide();
                     },
                     success: function (data, textStatus, jqXHR) {
                     //alert(data);
                     $.each(data, function (k, v) {
                     if (v.DELETE_FLAG === "true") {
                     document.getElementById("table_file_list").deleteRow(clicked_row);
                     //alert("file deleted");
                     } else {
                     alert("can not delete file");
                     }
                     });
                     }
                     });
                     //alert($(this).prev().text());
                     */
                }
            }
        }


        /*
         if (opt_selected.length < 10) {  // Templates is selected
         if (jQuery.inArray($(this).parent().index(), arr) !== -1) {
         $(this).parent().nextUntil('tr:not(.child-row-class)').toggle();
         } else {
         
         if ($(this).index() === 0) {
         if ($(this).parent().index() === 0 || $(this).parent().index() === 5) {
         // if ($(this).text() === "61001- Fast Track") {
         window.open($(this).next().text());
         } else {
         var old_name = $(this).text();
         old_name = old_name.replace(/\▪./g, '$');
         
         // window.open("pdf/original/" + $(this).text());
         window.open("pdf/original/" + old_name);
         }
         }
         }
         } else {                    // Production is selected
         if ($(this).index() === 0) {
         window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).text());
         } else if ($(this).index() === 2) {
         alert("going to delete");
         }
         }
         */

//  alert($(this).index());



// alert($(this).find('td:first').text());
// alert($(this).find('td').siblings(":first").text());
//  alert($(this).find('td').siblings(":first").next().text());
    });


});





