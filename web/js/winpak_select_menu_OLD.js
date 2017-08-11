$(document).ready(function () {

    $(function () {
        $("#order_select_menu").change(function () {
            $("#table_order_refresh").trigger("click");
        });

    });


    $(function () {
        $("#type_select_menu").change(function () {
            //$("#type_select_menu").css("background-color", "yellow");
            while (document.getElementById('table_file_list').rows.length > 0) {
                document.getElementById('table_file_list').deleteRow(0);
            }
            var q = $("#type_select_menu").val();
            if (q === "Templates") {
                $.ajax({
                    type: "GET",
                    // url: "Item_in_transit_by_jsonp",
                    //url: "http://128.1.10.116:8080/winpak/user_signin_2",
                    //url: "http://128.1.10.116:8080/winpak/get_file_list",
                    url: window.global_ip + "get_file_list",
                    data: {
                        folder_name: "pdf/original"
                                //pwd: "123456"
                    },
                    dataType: "jsonp",
                    jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                    //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                    //jsonpCallback: "myjsonpcallbacknameinalllowercase",
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

                        var f_name = "";
                        table_mannual("61001- Fast Track", "http://programs/fasttrack/", -1);
                        table_mannual("61002- Credit Application", "", -1);

                        f_name = "$61002A- Credit Application - English.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "$61002B- Credit Application - French.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "$61002C- Credit Application - Spanish.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);

                        table_mannual("61003- Die Drawing", "", -1);
                        f_name = "$61002A- Credit Application - English.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "$61002B- Credit Application - French.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "$61002C- Credit Application - Spanish.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);

                        //  table_link("61001- Fast Track");
                        // table_link("61002- Credit Application");                     
                        // table_link("61004- Item Request/MO Comment");


                        /*
                         table_link("▪ child menu 1");
                         table_link("▪ child menu 2");
                         table_link("▪ child menu 3");
                         table_link("▪ child menu 4");
                         */

                        //   table_file_templates(data);

                        /*
                         table_link("▪ child menu 5");
                         table_link("▪ child menu 6");
                         table_link("▪ child menu 7");
                         table_link("▪ child menu 8");
                         */

                        //  alert("folder succeeded");
                        show_hide_column(1, false);



                        //$('#table_file_list tr:contains("▪")').addClass('child-row-class');
                        //  $('#table_file_list tr:contains("$")').addClass('child-row-class');
                        //  $('#table_file_list td:first-child:contains("▪")').addClass('child-row-class');
                        $('#table_file_list tr:contains("$")').addClass('child-row-class');
                        $('.child-row-class').css('text-indent', '2.0em');
                        $('.child-row-class').css('background-color', 'rgba(204,255,255,0.3)');

                        var new_name = "";
                        $("#table_file_list td:first-child:contains('$')").each(function () {
                            new_name = $(this).html().replace(/\$/g, '▪ ');
                            $(this).html(new_name);
                            //$("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
                        });

                        /*
                         var test = $("#table_file_list td:first-child:contains('$')").html();
                         $("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
                         test = test.replace(/\$/g, '▪');
                         alert(test);
                         // alert(test);
                         //   $("#table_file_list td:contains('#')").html("new");
                         $("tr").each(function () {
                         $this = $(this);
                         var value = $this.find("td:first").html();
                         // $this.find("td:first").innerHTML.replace("#", "▪");
                         });
                         
                         */
                        

                    }
                });
            } else {
                if (q.substring(17, 25).trim() === "") {
                    alert("no order number");
                } else {
                    //  alert(q.substring(17, 25));
                    $.ajax({
                        type: "GET",
                        url: window.global_ip + "get_order_files",
                        data: {
                            // folder_name: "pdf/" + q.substring(17, 25)
                            //  folder_name_1: "pdf/",
                            //  folder_name_2: q.substring(17, 25),
                            folder_name: "pdf/" + q.substring(17, 25)

                        },
                        dataType: "jsonp",
                        jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                        //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                        //jsonpCallback: "myjsonpcallbacknameinalllowercase",
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
                            if (data.length === 0) {
                                alert("No file under this FTP number");
                                return;
                            }
                            table_file(data);
                            show_hide_column(1, false);
                        }
                    });
                }
            }


        });

    });

    /*
     var q = $("#type_select_menu").val();
     $("#type_select_menu").selectmenu({
     change: function (event, ui) {
     q = $(this).val();
     alert(q);
     
     
     $.ajax({
     url: 'searchtestphp.php',
     data: 'q=' + q,
     success: function (data) {
     $('#txtHint').html(data);
     }
     }).error(function () {
     alert('An error occured');
     });
     
     }
     });
     */

    function get_path(name, data) {
        var file_path;
        $.each(data, function (k, v) {
            if (v.file_name === name) {
                file_path = v.file_path;
            }
        });
        return file_path;
    }


    function table_mannual(name, path, row) {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');


        var row_file_list = tbl_file_list.insertRow(tbl_file_list.rows.length);
        var cell0_file_list = row_file_list.insertCell(0);
        var cell1_file_list = row_file_list.insertCell(1);

        cell0_file_list.innerHTML = name;
        cell1_file_list.innerHTML = path;

        tbl_file_list.appendChild(tbdy_file_list);

        //  alert(v.full_file);
        //  alert(v.file_name);
        //  alert(v.file_path);
        //  table_file(v.file_name);

    }

    function table_link(data) {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');


        var row_file_list = tbl_file_list.insertRow(-1);
        var cell0_file_list = row_file_list.insertCell(0);
        var cell1_file_list = row_file_list.insertCell(1);

        cell0_file_list.innerHTML = data;
        cell1_file_list.innerHTML = "http://programs/fasttrack/";

        tbl_file_list.appendChild(tbdy_file_list);

        //  alert(v.full_file);
        //  alert(v.file_name);
        //  alert(v.file_path);
        //  table_file(v.file_name);

    }

    function table_file_templates(data) {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');

        $.each(data, function (k, v) {
            var row_file_list = tbl_file_list.insertRow(-1);
            var cell0_file_list = row_file_list.insertCell(0);
            var cell1_file_list = row_file_list.insertCell(1);

            cell0_file_list.innerHTML = v.file_name;
            cell1_file_list.innerHTML = v.file_path;

            tbl_file_list.appendChild(tbdy_file_list);

            //  alert(v.full_file);
            //  alert(v.file_name);
            //  alert(v.file_path);
            //  table_file(v.file_name);
        });
    }

    function table_file(data) {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');

        $.each(data, function (k, v) {
            var row_file_list = tbl_file_list.insertRow(-1);
            var cell0_file_list = row_file_list.insertCell(0);
            var cell1_file_list = row_file_list.insertCell(1);
            var cell2_file_list = row_file_list.insertCell(2);

            cell0_file_list.innerHTML = v.file_name;
            cell1_file_list.innerHTML = v.file_path;
            cell2_file_list.innerHTML = "X";

            tbl_file_list.appendChild(tbdy_file_list);

            //  alert(v.full_file);
            //  alert(v.file_name);
            //  alert(v.file_path);
            //  table_file(v.file_name);
        });
    }


//this is to hide column or cell
    function show_hide_column(col_no, do_show) {
        var rows = document.getElementById('table_file_list').rows;

        for (var row = 0; row < rows.length; row++) {
            var cols = rows[row].cells;
            if (col_no >= 0 && col_no < cols.length) {
                cols[col_no].style.display = do_show ? '' : 'none';
            }
        }
    }
});