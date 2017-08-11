<%-- 
    Document   : newjsp2
    Created on : 24-Jun-2016, 11:13:51 AM
    Author     : w15rdknl
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

        <script type="text/ecmascript" src="table_test/grid.locale-en.js"></script>
        <script type="text/ecmascript" src="table_test/jquery.jqGrid.min.js"></script>
        <link rel="stylesheet" type="text/css" media="screen" href="table_test/ui.jqgrid.css" />



        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="css/winpak_autocomplete.css">
        <link rel="stylesheet" href="css/winpak_login.css">
        <link rel="stylesheet" href="css/winpak_datepicker.css">
        <link rel="stylesheet" href="css/winpak_email.css">
        <link rel="stylesheet" href="css/winpak_upload.css">
        <link rel="stylesheet" href="css/winpak_order_list.css">
        <link rel="stylesheet" href="css/winpak_upload_table.css">

        <script src="js/winpak_1.js"></script>
        <script src="js/winpak_datepicker.js"></script>
        <script src="js/winpak_signin.js"></script>
        <script src="js/winpak_quick_search.js"></script>
        <%-- 
        <script src="js/winpak_browser_storage.js"></script>
        --%>
        <script src="js/winpak_form_btn.js"></script>
        <script src="js/winpak_email.js"></script>
        <script src="js/winpak_upload.js"></script>
        <script src="js/winpak_file_browse.js"></script>

        <script src="js/test_1_jsonp.js"></script>
        <script src="js/test_1_jsonp_1.js"></script>

        <script src="js/winpak_table_click.js"></script>
        <link rel="stylesheet" href="css/winpak_table.css">
        <%-- --%>  
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js" ></script>
        <script src="http://malsup.github.com/jquery.form.js" ></script>


        <style>
            #file_choose_btn{
                top: 10%;
            }
            #file_upload_btn{
                margin-left: 10%;
                margin-top: 10%;
            }

            .progress { position:relative; width:400px; border: 1px solid #ddd; padding: 1px; border-radius: 3px; }
            .bar { background-color: #B4F5B4; width:0%; height:20px; border-radius: 3px; }
            .percent { position:absolute; display:inline-block; top:3px; left:48%; }
        </style>

        <script>
            $(document).ready(function () {
                var bar = $('.bar');
                var percent = $('.percent');
                var status = $('#status');

                $('form').ajaxForm({
                    beforeSend: function () {
                        status.empty();
                        var percentVal = '0%';
                        bar.width(percentVal);
                        percent.html(percentVal);
                    },
                    uploadProgress: function (event, position, total, percentComplete) {
                        var percentVal = percentComplete + '%';
                        bar.width(percentVal);
                        percent.html(percentVal);
                        //console.log(percentVal, position, total);
                    },
                    success: function () {
                        var percentVal = '100%';
                        bar.width(percentVal);
                        percent.html(percentVal);
                    },
                    complete: function (xhr) {
                        status.html(xhr.responseText);
                    }
                });

            });
        </script>


    </head>
    <body>
        <h1>File Upload Progress Demo #2</h1>
        <code>&lt;input type="file" name="myfile[]" multiple></code>
        <form action="UploadFile" method="post" enctype="multipart/form-data">
            <input type="file" id="file_choose_btn" name="myfile[]" multiple><br>
            <input type="submit" id="file_upload_btn" value="Upload File to Server">
        </form>

        <div class="progress">
            <div class="bar"></div >
            <div class="percent">0%</div >
        </div>

        <div id="status"></div>



    </body>
</html>
