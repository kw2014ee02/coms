$(document).ready(function () {

    $(function () {
        $("#order_select_menu").change(function () {
            $("#table_order_refresh").trigger("click");
        });

    });


    $(function () {
        $("#type_select_menu").change(function () {
            //$("#type_select_menu").css("background-color", "yellow");
            /*
             while (document.getElementById('table_file_list').rows.length > 0) {
             document.getElementById('table_file_list').deleteRow(0);
             }
             */

            if (document.getElementById('table_file_list').rows.length > 0) {
                //$("#table_file_list tr").remove();
                $("#table_file_list").empty();
            }

            var q = $("#type_select_menu").val();
            if (q === "Templates") {
                $.ajax({
                    type: "GET",
                    // url: "Item_in_transit_by_jsonp",
                    //url: "http://128.1.10.116:8080/winpak/user_signin_2",
                    //url: "http://128.1.10.116:8080/winpak/get_file_list",
                    //url: window.global_ip + "get_file_list",
                    url: "get_file_list",
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

                        table_mannual("61001- CRM", "https://crm2.winpak.com//crm/eware.dll/US", -1);
                        table_mannual("61002- Credit Application", "", -1);
                        f_name = "61002 Credit Application - English.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61002 Credit Application - French.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61002 Credit Application - Spanish.pdf";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61003- New Customer Set-up Form", "", -1);
                        f_name = "61003 New Customer Set-up Form.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61004- Working Art Files", "", -1);
                        table_mannual("61005- Die Drawing", "", -1);
                        table_mannual("61006- File Assessment", "", -1);
                        //f_name = "$Temp_File.xlsm";
                        //table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61007- Chemical Analysis", "", -1);
                        f_name = "61007 Chemical Analysis - Pouch Quote Request.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61007 Chemical Analysis - Rollstock Quote Request.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61007 Chemical Analysis - Medical Packaging - New Application Questionnaire.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61008- Fast Track Submit", "http://programs/fasttrack/", -1);

                        table_mannual("61009- Pouch Check – Temporary", "", -1);
                        f_name = "61009 Pouch Check-in.docx";
                        table_mannual(f_name, get_path(f_name, data), -1);


                        table_mannual("61010- R & D Print Review", "", -1);
                        table_mannual("61011- Costing Review", "", -1);
                        table_mannual("61012- Fast Track Recommendation", "http://programs/fasttrack/", -1);
                        table_mannual("61013- Fast Track Quote", "http://programs/fasttrack/", -1);
                        table_mannual("61014- Quote Item Request Forms", "", -1);
                        f_name = "61014 01 Plain 3 Side Seal Pouch - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 02 Printed 3 Side Seal Pouch - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 03, 07, 23, 27 Plain Rollstock - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 04, 08, 24, 28 Printed Rollstock - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 21 Plain Zipper - Gusset Pouch - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 22 Printed Zipper - Gusset Pouch - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 21S Plain Zipper - Side Gusset Pouch - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 22S Printed Zipper - Side Gusset Pouch - Quote.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61014 Multiple Quote Item Request.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61015- Graphics Quote Request", "", -1);
                        // f_name = "$Graphics Quote Request.xltm";
                        //f_name = "61015 Graphics Quote Request.xlsm";
                        f_name = "61015 Graphics Quote Request (Date, Wt, Design Description).xlsm";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61016- Graphics Quote", "", -1);
                        /*
                         f_name = "61016 Graphics Quote.xltm";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61016 365test.xlsm";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         */

                        table_mannual("61017- Costing Templates", "", -1);
                        /*
                         f_name = "61017 Quote Plain Pouch.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61017 Quote Plain Rollstock.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61017 Quote Plain Zipper.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61017 Quote Printed Pouch.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61017 Quote Printed Rollstock.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61017 Quote Printed Zipper.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         */
                        /*
                        table_mannual("61018- Blank Quote Templates", "", -1);
                        
                         //f_name = "$Blank quote template order.xlsx";
                         //table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 3 Side Seal Pouch Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 3 Side Seal Pouch Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 3 Side Seal Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination 3 Side Seal Pouch Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination 3 Side Seal Pouch Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination 3 Side Seal Pouch Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination KI Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Roll Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Roll Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Roll Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Zipper (Folded) Gusset Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Zipper (Folded) Gusset Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Zipper (Folded) Gusset Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Zipper (Side) Gusset Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Zipper (Side) Gusset Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Combination Zipper (Side) Gusset Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KFT - Quote Tempate - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KFT - Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KFT - Roll Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KI - Quote Tempate - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KI - Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KI - Roll Quote Templatte - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KM - Quote Tempate - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KM - Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KM - Roll Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KSI - Quote Tempate - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KSI - Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 KSI - Roll Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 RL - Quote Tempate - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 RL - Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 RL - Roll Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper (Folded) Gusset Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper (Folded) Gusset Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper (Side) Gusset Quote Template - French.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper (Side) Gusset Quote Template - Spanish.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper Gusset (Folded) Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper Gusset (Side) Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         f_name = "61018 Zipper Pouch Quote Template - English.xls";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         */
                        table_mannual("61019- Sample Order Verification", "", -1);
                        table_mannual("61020- Purchase Order", "", -1);
                        table_mannual("61021- Sales Order", "", -1);
                        f_name = "61021 INC 1st Time Sales Order Form.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61021 INC Artwork Only Order Form.doc";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61021 INC Repeat Sales Order Form.doc";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61021 LTD 1st Time Sales Order Form.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61021 LTD Artwork Only Order Form.doc";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61021 LTD Repeat Sales Order Form FRENCH.doc";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61021 LTD Repeat Sales Order Form.doc";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61022- Credit Order Review (email) Template", "", -1);
                        f_name = "61022 Order Review Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        /*
                         table_mannual("61023- Printed Eyespot/Dieline Review", "", -1);
                         f_name = "61023 Printed Eyespot and-or Die Line Review Template.oft";
                         table_mannual(f_name, get_path(f_name, data), -1);
                         */
                        table_mannual("61024- Eyespot/Die Line Review (email) Template", "", -1);
                        f_name = "61024 Printed Eyespot and-or Die Line Review Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61025- Graphic Checklist", "", -1);
                        f_name = "61025 Checklist - 3 Side Seal - Zipper.xlsm";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61025 Checklist - Rollstock.xlsm";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61025 Checklist - Zipper Gusset.xlsm";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61026- Ink Draw Down", "", -1);
                        //f_name = "61026 Blank Ink Request.xls";
                        f_name = "61026 BLANK DRAW DOWN REQUEST.xlsm";
                        table_mannual(f_name, get_path(f_name, data), -1);



                        table_mannual("61027- Graphics PDF", "", -1);
                        table_mannual("61028- Graphics Approval Templates", "", -1);
                        f_name = "61028 Content Proof PDF Approval for Process Artwork.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61028 Content Proof PDF Approval.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61028 Content Proof.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61028 Contract Proof CDN.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61028 Contract Proof US.xls";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61028 Dedicated Print Coordinator.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61029- Press Approval Waiver Or Approval", "", -1);
                        f_name = "61029 Press Approval Waiver.DOC";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61030- Graphics Artwork Invoice", "", -1);
                        //  f_name = "$Graphics Artwork Invoice.xltm";
                        //  table_mannual(f_name, get_path(f_name, data), -1);

                        table_mannual("61031- Graphics Artwork Invoice to date", "", -1);
                        //  f_name = "$Graphics Artwork Invoice to date.xltm";
                        //    table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61032- Item Request/MO Comment", "", -1);
                        f_name = "61032 01 Plain 3 Side Seal Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 02 Printed 3 Side Seal Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 03 Plain Rollstock.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 04 Printed Rollstock.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 07 Plain Purchased Rollstock.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 08 Printed Purchased Rollstock.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 21 Plain Zipper - Gusset Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 21S Plain Zipper - Side Gusset Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 22 Printed Zipper - Gusset Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 22B Printed Box Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 22S Printed Zipper - Side Gusset Pouch.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 23 Plain Liquid Packaging.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 24 Printed Liquid Packaging.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 27 Plain Medical.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 28 Printed Medical.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 Sample Item to Manufactured Item Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 Sample Item to New Customer Account Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 Repeat with Change Item Request and MO Comment Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        f_name = "61032 Item Request (email) Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61033- R & D Print Checklist Review", "", -1);
                        //f_name = "$Print Tech signoff.docx";
                        //table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61034- Blue Sheet", "", -1);
                        f_name = "61034 Graphics Spec Sheet Template.xlsx";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        //f_name = "61034 Pouchstock Spec Sheet LC7 Copy V2.0.xlsx";
                        //table_mannual(f_name, get_path(f_name, data), -1);
                        //f_name = "61034 Rollstock Spec Sheet LC7 Copy V2.0.xlsx";
                        //table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61035- High Profile CO (email) Template", "", -1);
                        f_name = "61035 CO Template - High Profile.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61036- CO Template", "", -1);
                        f_name = "61036 CO Template.oft";
                        table_mannual(f_name, get_path(f_name, data), -1);
                        table_mannual("61037- Press Approval Template", "", -1);
                        f_name = "61037 Press Approval - Plant Tour - Customer Visitation Notice.oft";
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


                        //替换 $('#table_file_list tr:contains("(T)")').addClass('child-row-class');  ---结束
                        //var regex = new RegExp(/\b(T)\b/); // expression here     -- 正则表达式：/\b(T)\b/用于判断是否含(T)
                        var regex = new RegExp(/^.*\.(jpg|JPG|gif|GIF|doc|DOC|docx|DOCX|pdf|PDF|xlsx|XLSX|xls|XLS|xlsm|XLSM|oft|OFT|xltm|XLTM)$/);  //-- 正则表达式：判断是否含所列出的文件名
                        $("#table_file_list tr").filter(function () {
                            return regex.test($(this).text());
                        }).addClass('child-row-class');
                        //替换 $('#table_file_list tr:contains("(T)")').addClass('child-row-class');  ---结束

                        //$('#table_file_list tr:contains("(T)")').addClass('child-row-class');
                        //$('#table_file_list tr:contains("$")').addClass('child-row-class');
                        $('.child-row-class').css('text-indent', '2.0em');
                        $('.child-row-class').css('font-weight', '600');
                        if (!msieversion()) {
                            $('.child-row-class').css('display', 'none');
                        } else {
                            //$('.child-row-class').toggle();
                            // $('.child-row-class').css('display', 'table-row');
                        }
                        //$('.child-row-class').css('display', 'none');
                        //$('.child-row-class').css('background-color', 'rgba(204,255,255,0.3)');

                        //很重要， 这是替换$符号成▪  --- 开始                 
                        /*
                         var new_name = "";
                         $("#table_file_list td:first-child:contains('$')").each(function () {
                         new_name = $(this).html().replace(/\$/g, '▪ ');
                         $(this).html(new_name);
                         //$("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
                         //$(this).toggle();
                         });
                         */
                        //很重要， 这是替换$符号成▪  --- 结束

                        //很重要， 这是替换$符号成▪  --- 开始  第二次
                        /*
                         var new_name = "";
                         $("#table_file_list td:first-child:contains('(T)')").each(function () {
                         //new_name = $(this).html().replace(/\$/g, '▪ ');
                         //$(this).html(new_name);
                         
                         new_name = '▪ ' + $(this).html();
                         $(this).html(new_name);
                         
                         //$("#table_file_list td:first-child:contains('$')").html().replace(/\$/g, '▪');
                         //$(this).toggle();
                         });
                         */
                        //很重要， 这是替换$符号成▪  --- 结束  第二次


                        var new_name = "";
                        var regex = new RegExp(/^.*\.(jpg|JPG|gif|GIF|doc|DOC|docx|DOCX|pdf|PDF|xlsx|XLSX|xls|XLS|xlsm|XLSM|oft|OFT|xltm|XLTM)$/);  //-- 正则表达式：判断是否含所列出的文件名
                        $("#table_file_list tr").filter(function () {
                            return regex.test($(this).text());
                        }).each(function () {
                            //alert($(this).find('td:first').text());
                            new_name = '▪ ' + $(this).find('td:first').text();
                            $(this).find('td:first').html(new_name);
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

                        /* new
                         var arr_text = ["61002- Credit Application", "61004- Quote Item Request Forms",
                         , "61005- Item Request/MO Comment",
                         "61006- Print Checklist", "61007- Sales Order", "61008- File Assessment",
                         "61009- Graphic Quote Request (page 1)", "61010- Graphic Quote (page 2)",
                         "61012- Quote Templates", "61014- Blue Sheet", "61015- Chemical Analysis",
                         "61016- Graphic Checklist"];
                         */

                        /* old 
                         var arr_text = ["61002- Credit Application", "61004- Item Request/MO Comment",
                         "61005- Print Checklist", "61006- Sales Order", "61007- File Assessment",
                         "61008- Graphic Quote Request (page 1)", "61009- Graphic Quote (page 2)",
                         "61011- Quote Templates", "61013- Blue Sheet", "61014- Chemical Analysis",
                         "61015- Graphic Checklist"];
                         */
                        if (msieversion()) {
                            $("#table_file_list tr").each(function () {
                                if (jQuery.inArray($(this).find('td:first').text(), arr_text) !== -1) {   // Node Row
                                    //alert($(this).find('td:first').text());
                                    //     $('#table_file_list td').trigger('click');
                                    // alert("trigger");
                                    $(this).find('td:first').trigger("click");



                                }

                                var aa1 = $(this).find('td:first').text();
                                if (aa1.indexOf('▪') > -1) {
                                    // setInterval("$(this).toggle()",3000);
                                    // setInterval(function(){ $(this).toggle(); }, 3000);
                                    //  alert(aa1);
                                    //  $(this).toggle();
                                    //$(this).trigger('click');
                                    // $(this).find('td:first').trigger('click');

                                    //$(this).css('display', 'table-row');



                                } else {
                                    //alert("nnn");
                                }


                                if ($(this).is(":visible")) {
//                                    /alert($(this).text());
                                    //  $(this).hide();
                                    //  $(this).toggle();                                
                                }
                            });
                        }


                    }
                });
            } else {
                if (q.trim().match(/\d+/)[0] === "") {
                    alert("No order number");
                } else {
                    //create_list_1();
                    //  alert(q.substring(17, 25));
                    //  alert(q.trim().match(/\d+/)[0]);
                    $.ajax({
                        type: "GET",
                        //url: window.global_ip + "get_order_files",
                        url: "get_order_files",
                        data: {
                            // folder_name: "pdf/" + q.substring(17, 25)
                            //  folder_name_1: "pdf/",
                            //  folder_name_2: q.substring(17, 25),
                            folder_name: "pdf/" + q.trim().match(/\d+/)[0]

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
                            change_memo_btn_color();
                            change_step_color();
                        },
                        success: function (data, textStatus, jqXHR) {
                            if (data.length === 0) {
                                //alert("No file under this FTP number");
                                return;
                            }

                            if (false) {
                                table_file_23(data);
                                show_hide_column(1, false);
                                // show_hide_column(2, false);
                            } else {
                                create_list_1();
                                table_file(data);
                                show_hide_column(1, false);
                                //$('.child-row-class').toggle();
                                if (msieversion()) {    // IE
                                    //show_hide_column(0, false);
                                    $('.child-row-class').toggle();
                                } else {
                                    $('.child-row-class').toggle();
                                }
                            }

                            if (msieversion()) {    // IE
                                //show_hide_column(0, false);
                            }


//var reg_test_2=/(?=61\d{3})/;
                            // $('#table_file_list tr[/(?=61\d{3})/]').addClass('child-row-class');
                            // $('#table_file_list tr[/(?=61\d{3})/]').addClass('child-row-class');

                            /*
                             $("#table_file_list tr:contains('610')").addClass('child-row-class');
                             
                             $('.child-row-class').css('text-indent', '2.0em');
                             $('.child-row-class').css('font-weight', '600');
                             */
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

        if (jQuery.inArray(name, arr_text) !== -1 || jQuery.inArray(name, arr_link) !== -1) {   // Node or Link
            cell0_file_list.innerHTML = name;
        } else {                                        // Not Node

            var extension = name.substr(0, name.lastIndexOf('.'));
            cell0_file_list.innerHTML = extension;
        }
        cell1_file_list.innerHTML = path;

        /*
         if (msieversion()) {    // IE
         cell0_file_list.innerHTML = name;
         cell1_file_list.innerHTML = path;          
         } else {                 // NOT IE
         if (jQuery.inArray(name, arr_text) !== -1 || jQuery.inArray(name, arr_link) !== -1) {   // Node or Link
         cell0_file_list.innerHTML = name;
         } else {                                        // Not Node
         
         var extension = name.substr(0, name.lastIndexOf('.'));
         cell0_file_list.innerHTML = extension;
         }
         cell1_file_list.innerHTML = path;
         }
         */

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

        var menu_name_1 = "";
        var append_rowIndex = -1;

        $.each(data, function (k, v) {

            /**/
            var reg_test_1 = new RegExp(/(?=61\d{3})/);
            if (reg_test_1.test(v.file_name)) {
                if (menu_name_1 !== v.file_name.substring(0, 5)) {   // new menu row
                    //去掉自动改变step的颜色
                    /*   */
                    //  var test11 = $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr");
                    // change tr color has file(s)
                    // $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").addClass('menu-row-class-2');
                    $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").addClass('menu-row-class-2');
                    // $('.child-row-class').css('text-indent', '2.0em');
                    $('.menu-row-class-2').css('font-weight', '200');
                    //$('.menu-row-class-2').css('background', '#66CC66');
                    $('.menu-row-class-2').css('background', 'rgb(218, 223, 232)');
                    $('.menu-row-class-2').css('color', 'rgb(0, 0, 0)');

                    //$('.menu-row-class-2').css('background', 'linear-gradient(to bottom, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 24%, rgba(181,198,208,1) 41%, rgba(181,198,208,1) 60%, rgba(224,239,249,1) 100%)');
                    //$('.menu-row-class-2').css('color', 'rgb(0, 0, 0)');

                    //$('.menu-row-class-2').css('background-attachment', 'fixed');

                    //end of  去掉自动改变step的颜色


                    //var tt11 = $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").parent().index();
                    //alert(tt11 + ">>>>" + v.file_name);

                    if (msieversion()) {    // IE
                        if ($("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").parent().index() === 0) {
                            //  alert(v.file_name.substring(0, 5));
                            //  alert($("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").index());
                            append_rowIndex = $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").index() + 1;
                        } else {
                            append_rowIndex = $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").index() + 2;
                        }
                    } else {
                        append_rowIndex = $("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").index() + 1;
                    }
                } else {    // current menu row
                    append_rowIndex = append_rowIndex + 1;
                }

                // insert file to appr. row
                // alert(append_rowIndex + ">>>>" + v.file_name);
                row_file_list = tbl_file_list.insertRow(append_rowIndex);
                cell0_file_list = row_file_list.insertCell(0);
                cell1_file_list = row_file_list.insertCell(1);
                cell2_file_list = row_file_list.insertCell(2);

                // cell0_file_list.innerHTML = v.file_name.substring(5, v.file_name.length);
                cell0_file_list.innerHTML = v.file_name;
                cell1_file_list.innerHTML = v.file_path;
                //cell2_file_list.innerHTML = "X";

                cell2_file_list.innerHTML = "&#9997;";

                row_file_list.className = "child-row-class";
                $('.child-row-class').css('text-indent', '2.0em');
                // $('.child-row-class').css('font-weight', '600');
                $('.child-row-class').css('color', 'rgb(0, 115, 87)');

                tbl_file_list.appendChild(tbdy_file_list);

                //$("#table_file_list td:first-child:contains(" + v.file_name.substring(0, 5) + ")").closest("tr").after();



                menu_name_1 = v.file_name.substring(0, 5);

                /*
                 //add new menu, like 61000
                 
                 var row_file_list = tbl_file_list.insertRow(-1);
                 var cell0_file_list = row_file_list.insertCell(0);
                 var cell1_file_list = row_file_list.insertCell(1);
                 var cell2_file_list = row_file_list.insertCell(2);
                 
                 //alert(v.file_name.substring(5, v.file_name.length));
                 cell0_file_list.innerHTML = v.file_name.substring(0, 5);
                 cell1_file_list.innerHTML = "null";
                 cell2_file_list.innerHTML = " ";
                 
                 row_file_list.className = "menu-row-class";
                 // $('.menu-row-class').css('text-indent', '1.0em');
                 $('.menu-row-class').css('background', '#66CC66');
                 $('.menu-row-class').css('font-weight', '600');
                 $('.menu-row-class').css('color', 'white');
                 
                 tbl_file_list.appendChild(tbdy_file_list);
                 
                 menu_name_1 = v.file_name.substring(0, 5);
                 */



                /*
                 //add real file list
                 
                 row_file_list = tbl_file_list.insertRow(-1);
                 cell0_file_list = row_file_list.insertCell(0);
                 cell1_file_list = row_file_list.insertCell(1);
                 cell2_file_list = row_file_list.insertCell(2);
                 
                 // cell0_file_list.innerHTML = v.file_name.substring(5, v.file_name.length);
                 cell0_file_list.innerHTML = v.file_name;
                 cell1_file_list.innerHTML = v.file_path;
                 cell2_file_list.innerHTML = "X";
                 
                 row_file_list.className = "child-row-class";
                 $('.child-row-class').css('text-indent', '2.0em');
                 // $('.child-row-class').css('font-weight', '600');
                 $('.child-row-class').css('color', '#339933');
                 
                 tbl_file_list.appendChild(tbdy_file_list);
                 */
            } else {

                var row_file_list = tbl_file_list.insertRow(-1);
                var cell0_file_list = row_file_list.insertCell(0);
                var cell1_file_list = row_file_list.insertCell(1);
                var cell2_file_list = row_file_list.insertCell(2);


                cell0_file_list.innerHTML = v.file_name;
                cell1_file_list.innerHTML = v.file_path;
                // cell2_file_list.innerHTML = "X";

                cell2_file_list.innerHTML = "&#9997;";


                tbl_file_list.appendChild(tbdy_file_list);

            }


            /*  
             var row_file_list = tbl_file_list.insertRow(-1);
             var cell0_file_list = row_file_list.insertCell(0);
             var cell1_file_list = row_file_list.insertCell(1);
             var cell2_file_list = row_file_list.insertCell(2);
             
             //cell0_file_list.innerHTML = v.file_name.substring(5, v.file_name.length);
             cell0_file_list.innerHTML = v.file_name;
             cell1_file_list.innerHTML = v.file_path;
             cell2_file_list.innerHTML = "X";
             
             tbl_file_list.appendChild(tbdy_file_list);
             
             //  alert(v.full_file);
             //  alert(v.file_name);
             //  alert(v.file_path);
             //  table_file(v.file_name);
             */
        });
    }

// backup 
    function table_file_backup(data) {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');


        var menu_name_1 = "";

        $.each(data, function (k, v) {

            /**/
            var reg_test_1 = new RegExp(/(?=61\d{3})/);
            if (reg_test_1.test(v.file_name)) {

                if (menu_name_1 !== v.file_name.substring(0, 5)) {

                    //add new menu, like 61000

                    var row_file_list = tbl_file_list.insertRow(-1);
                    var cell0_file_list = row_file_list.insertCell(0);
                    var cell1_file_list = row_file_list.insertCell(1);
                    var cell2_file_list = row_file_list.insertCell(2);

                    //alert(v.file_name.substring(5, v.file_name.length));
                    cell0_file_list.innerHTML = v.file_name.substring(0, 5);
                    cell1_file_list.innerHTML = "null";
                    cell2_file_list.innerHTML = " ";

                    row_file_list.className = "menu-row-class";
                    // $('.menu-row-class').css('text-indent', '1.0em');
                    $('.menu-row-class').css('background', '#66CC66');
                    $('.menu-row-class').css('font-weight', '600');
                    $('.menu-row-class').css('color', 'white');

                    tbl_file_list.appendChild(tbdy_file_list);

                    menu_name_1 = v.file_name.substring(0, 5);
                }

                //add real file list

                row_file_list = tbl_file_list.insertRow(-1);
                cell0_file_list = row_file_list.insertCell(0);
                cell1_file_list = row_file_list.insertCell(1);
                cell2_file_list = row_file_list.insertCell(2);

                // cell0_file_list.innerHTML = v.file_name.substring(5, v.file_name.length);
                cell0_file_list.innerHTML = v.file_name;
                cell1_file_list.innerHTML = v.file_path;
                cell2_file_list.innerHTML = "X";

                row_file_list.className = "child-row-class";
                $('.child-row-class').css('text-indent', '2.0em');
                // $('.child-row-class').css('font-weight', '600');
                $('.child-row-class').css('color', '#339933');

                tbl_file_list.appendChild(tbdy_file_list);

            } else {

                var row_file_list = tbl_file_list.insertRow(-1);
                var cell0_file_list = row_file_list.insertCell(0);
                var cell1_file_list = row_file_list.insertCell(1);
                var cell2_file_list = row_file_list.insertCell(2);


                cell0_file_list.innerHTML = v.file_name;
                cell1_file_list.innerHTML = v.file_path;
                cell2_file_list.innerHTML = "X";

                tbl_file_list.appendChild(tbdy_file_list);

            }


            /*  
             var row_file_list = tbl_file_list.insertRow(-1);
             var cell0_file_list = row_file_list.insertCell(0);
             var cell1_file_list = row_file_list.insertCell(1);
             var cell2_file_list = row_file_list.insertCell(2);
             
             //cell0_file_list.innerHTML = v.file_name.substring(5, v.file_name.length);
             cell0_file_list.innerHTML = v.file_name;
             cell1_file_list.innerHTML = v.file_path;
             cell2_file_list.innerHTML = "X";
             
             tbl_file_list.appendChild(tbdy_file_list);
             
             //  alert(v.full_file);
             //  alert(v.file_name);
             //  alert(v.file_path);
             //  table_file(v.file_name);
             */
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


    //

    function create_list_1() {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');

        /*
         if (msieversion()) {    // IE
         var row_file_list = tbl_file_list.insertRow(-1);
         var cell0_file_list = row_file_list.insertCell(0);
         var cell1_file_list = row_file_list.insertCell(1);
         var cell2_file_list = row_file_list.insertCell(2);
         
         cell0_file_list.innerHTML = "61000- IE";
         cell1_file_list.innerHTML = "null";
         cell2_file_list.innerHTML = " ";
         
         
         tbl_file_list.appendChild(tbdy_file_list);
         }
         */

        jQuery.each(arr_text_p, function (i, val) {

            var row_file_list = tbl_file_list.insertRow(-1);
            var cell0_file_list = row_file_list.insertCell(0);
            var cell1_file_list = row_file_list.insertCell(1);
            var cell2_file_list = row_file_list.insertCell(2);

            //alert(val);
            cell0_file_list.innerHTML = val;
            cell1_file_list.innerHTML = "null";
            cell2_file_list.innerHTML = " ";


            /*
             cell0_file_list.innerHTML = i.toString().trim();
             cell1_file_list.innerHTML = "";
             cell2_file_list.innerHTML = val;
             */
            tbl_file_list.appendChild(tbdy_file_list);
        });

    }




    function table_file_23(data) {
        var tbl_file_list = document.getElementById('table_file_list');
        var tbdy_file_list = document.createElement('tbody');


        $.each(data, function (k, v) {

            /*   */
            var row_file_list = tbl_file_list.insertRow(-1);
            var cell0_file_list = row_file_list.insertCell(0);
            var cell1_file_list = row_file_list.insertCell(1);
            var cell2_file_list = row_file_list.insertCell(2);

            //cell0_file_list.innerHTML = v.file_name.substring(5, v.file_name.length);
            cell0_file_list.innerHTML = v.file_name;
            cell1_file_list.innerHTML = v.file_path;
            //cell2_file_list.innerHTML = "X";

            cell2_file_list.innerHTML = "@";

            tbl_file_list.appendChild(tbdy_file_list);

            //  alert(v.full_file);
            //  alert(v.file_name);
            //  alert(v.file_path);
            //  table_file(v.file_name);

        });
    }




    function change_memo_btn_color() {
        //$('#table_file_list td:last-child:contains("@")').each(function () {
        $('#table_file_list td:last-child:contains(\'✍\')').each(function () {
            //alert($(this).prev().text());

            //get file name and directory
            var file_name = $(this).prev().text().match(/^(.+)\\([^\\]+)$/)[2];
            var file_parent = $(this).prev().text().match(/^(.+)\\([^\\]+)$/)[1].match(/^(.+)\\([^\\]+)$/)[2];

            var this_to_last_td = $(this);

            // alert(file_parent);

            //aa1(file_name, file_parent);

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
                jsonp: "jsonp_test",
                beforeSend: function () {
                    // $("#table_file_gif").show();

                },
                /*
                 error: function (e) {
                 alert('Can not get memo from database' + e);
                 },
                 */
                error: function (xhr, ajaxOptions, thrownError) {
                    alert('Change memo button color: can not get memo from database');
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function () {
                    //  $("#table_file_gif").hide();

                },
                success: function (data, textStatus, jqXHR) {
                    $.each(data, function (k, v) {
                        //alert(v.j_memo);

                        /*
                         if (v.j_memo.trim() === "") {
                         alert("no memo");
                         }else {
                         alert("yes");
                         }                            
                         */

                        if (v.j_memo.trim() !== "") {

                            //$(this).css("color","#BD0300");
                            //alert("yes");

                            //alert(this_to_last_td.text());

                            $(this_to_last_td).css("color", "rgb(189, 107, 0)");
                            $(this_to_last_td).css('transform', 'scale(1.5, 1.5)');


                        }
                    });
                }
            });


        });
    }

    function change_step_color() {
        $.ajax({
            type: "GET",
            url: "change_color_step",
            data: {
                ftp_number: $("#type_select_menu").val().trim().match(/\d+/)[0]
            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
            beforeSend: function () {
            },
            error: function () {
                alert('Can not do step color..');
            },
            complete: function () {
                // change_memo_btn_color_now(this_fn);
            },
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (k, v) {
                    if (v.ftp_number === "000000") {
                        alert("error getting step color. ");
                    } else {
                        $("#table_file_list tbody tr").filter(function () {
                            return $.trim($(this).find('td').eq(0).text()) === v.filename;
                        }).css("background-color", v.color);
                    }
                });
            }
        });
    }




});