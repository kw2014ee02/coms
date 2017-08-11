<%-- 
    Document   : newjsp1
    Created on : 14-Jun-2016, 10:06:53 AM
    Author     : w15rdknl
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/redmond/jquery-ui.css">       
        <%-- --%>  

        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js" type="text/javascript"></script>

        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

        <%-- --%>  
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
        <link rel="stylesheet" href="css/winpak_select_menu.css">
        <link rel="stylesheet" href="css/winpak_del_ref.css">

        <script src="js/winpak_1.js"></script>
        <script src="js/winpak_datepicker.js"></script>
        <script src="js/winpak_signin.js"></script>
        <script src="js/winpak_quick_search.js"></script>
        <%-- 
        <script src="js/winpak_browser_storage.js"></script>
        <script src="js/winpak_upload.js"></script>
        --%>
        <script src="js/winpak_form_btn.js"></script>
        <script src="js/winpak_email.js"></script>
        <script src="js/winpak_file_browse.js"></script>
        <script src="js/winpak_upload_selection.js"></script>
        <script src="js/winpak_select_menu.js"></script>
        <script src="js/winpak_del_ref.js"></script>


        <script src="js/test_1_jsonp.js"></script>
        <script src="js/test_1_jsonp_1.js"></script>

        <script src="js/winpak_table_click.js"></script>
        <link rel="stylesheet" href="css/winpak_table.css">



        <script type="text/javascript" src="js/jqgrid/jqgrid_test_1.js"></script>

        <%--  
            <link rel="stylesheet" type="text/css" href="js/jqgrid/ui.jqgrid.css" /> 
        
       <script type="text/javascript" src="js/jqgrid/jquery.min.js"></script>
       <script type="text/javascript" src="js/jqgrid/jquery-ui.min.js"></script>
       <script type="text/javascript" src="js/jqgrid/grid.locale-en.js"></script>
       <script type="text/javascript" src="js/jqgrid/jquery.jqGrid.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/jqgrid_test_1.js"></script>
       <link rel="stylesheet" type="text/css" href="js/jqgrid/jqgrid_test_1.css" />
        --%>

        <%-- 
            <link rel="stylesheet" type="text/css" href="js/jqgrid/ui.jqgrid.css" /> 
        
        <script type="text/ecmascript" src="table_test/grid.locale-en.js"></script>
        <script type="text/ecmascript" src="table_test/jquery.jqGrid.min.js"></script>
        <link rel="stylesheet" type="text/css" media="screen" href="table_test/jquery-ui.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="table_test/ui.jqgrid.css" />
        <script type="text/javascript" src="js/jqgrid/jqgrid_test_1.js"></script>
        <link rel="stylesheet" type="text/css" href="js/jqgrid/jqgrid_test_1.css" />
        --%>

        <script src="js/winpak_upload_file.js"></script>
        <script src="js/jquery.form.js" ></script>  <%-- http://malsup.github.com/jquery.form.js --%>


        <title>Winpak test</title>
        <link rel="icon"  type="image/png"  href="pic/favicon.ico">


        <%-- 
        <script>
            $(document).ready(function () {
                $('#type_select_menu').css("background-color", "purple");
                $('#type_select_menu').css("width", "200px");
                $('#type_select_menu').css("height", "100px");
            });
        </script>
        --%>

        <script>
            $(document).ready(function () {
                if (typeof (Storage) !== "undefined") {
                    //alert("Sorry! This web browser has Web Storage support..");
                    if (localStorage.user_id_signed_in) {
                        var u_name = localStorage.getItem("user_name_signed_in");
                        //alert(u_name);
                        $('#signed_user').text(u_name);
                        $("#sign_in").hide();
                        $("#signed_user").show();
                        $("#log_out").show();
                    } else {
                        //alert("no user");
                    }

                } else {
                    alert("Sorry! This web browser has no Web Storage support..");
                }
            });
        </script>


        <script>
            $(document).ready(function () {
                $("#myButton_jsonp2").trigger("click");
            });
        </script>

        <script>
            $(document).ready(function () {

            });
        </script>




    </head>
    <body>



        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">×</span>
                    <h2>Login Form</h2>
                </div>
                <div class="modal-body">                   
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="Ex -john123"/><br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="************"/><br/>

                    <p id="login_msg">Enter correct username and password! </p>

                </div>
                <div class="modal-footer">
                    <input type="button" id="loginbtn" value="Login"/>
                    <input type="button" id="cancel" value="Cancel"/>
                    <br/>
                </div>
            </div>
        </div>

        <div id="slogan">        
            <img src="pic/logo.PNG" alt="HTML5 Icon" style="width:200px;height:40px;" class="img1"> 
            <p id="slogan_1" class="slogan_1">Innovation, a print partnership</p>
            <p id="sign_in" class="sign_in">Sign in</p>
            <input title="Begin with a prefix: ino_" type="text" id="order_search" name="order_search" class="order_search" placeholder="Quick search (by Order ID)" />


            <p id="signed_user" class="signed_user">signed user</p>
            <p id="log_out" class="log_out">/ Log out</p>


        </div>

        <br>

        <div id="header">
            <div class="header_txt1"> login user1: username:1001, pwd:123456 /user2: username:1002, pwd:123 </div>

        </div>

        <div id="form_1" class="form_div">
            <div id="menu_title_1" class="menu_title_1">Create New Order</div>
            <input id="new_order_btn" type="button" value="Create" />
            <input title="new order number" type="text" id="new_order_number" name="new_order_number" class="new_order_number" placeholder="new_order_number" />
            <input type="text" id="datepicker_due_new" class="datepicker_due_new" placeholder="Due date">
        </div>



        <div id="form_2" class="form_div">
            <div id="menu_title_2" class="menu_title_2">Existing Order</div>
            <%-- 
            <a href="mailto:Kelvin.Lee@winpak.com?subject=First Time Print Project Email Test
               &body=Innovation and Winpak
               &cc=Kelvin.Lee@winpak.com
               &bcc=Kelvin.Lee@winpak.com"
               >Send</a>
            --%>

            <input title="Recipient" type="text" id="email_recipient" value="Kelvin.Lee@winpak.com" placeholder="Name" />

            <%--
            <textarea rows="5" cols="30" id="email_list" style="resize: none;">This is my statement one.&#13;&#10;This is my statement2</textarea>
            --%>

            <input type="button" id="email_list_btn" class='email_list_btn' value="Add">
            <div id="div_email_list">
                <table id="table_email_list">    </table>
            </div>

            <%--
            <textarea rows="5" cols="30" wrap='off' id="email_list" style="resize: none;"></textarea>
            --%>

            <%--
            <input type="button" id="email_btn" class='email_btn' value="Send" 
                   onclick="window.location.href =
                                   'mailto:Kelvin.Lee@winpak.com?subject=----First Time Print Project System Message----\n\
                                    &body=----------------Following info generated from First Time Print System-----------\n\
                                    &cc=Kelvin.Lee@winpak.com\n\
                                    &bcc=Kelvin.Lee@winpak.com'">
            --%>

            <input type="button" id="email_btn" class='email_btn' value="Send">


            <%-- right side --%>
            <%--
           <input type="file" id="fileLoader" name="files" title="Load File" />
            --%>

            <%--
          <input type="file" id="file_browse_btn" class="file_browse_btn">
          <div id="div_upload_list">
              <table id="table_upload_list">    </table>
          </div>
          <input type="button" id="upload_btn" class='upload_btn' value="upload">
            --%>

            <form action="UploadFile" method="post" enctype="multipart/form-data">
                <input type="file" id="file_browse_btn" name="myfile[]" multiple><br>
                <div id="div_upload_list">
                    <table id="table_upload_list">    </table>
                </div>
                <input type="submit" id="upload_btn" value="Upload File to Server">
            </form>

            <div class="progress">
                <div class="bar"></div >
                <div class="percent">0%</div >
            </div>
            <div id="status"></div>

        </div>


        <div id="form_3" class="form_div">


            <select name="type_select_menu" id="type_select_menu" class="type_select_menu">
                <option>Templates</option>
                <option selected="selected">Production</option>
            </select>
            <input id="table_file_list_del" type="button" value="Delete" />
            <table id="table_file_list">    </table>
        </div>

        <div id="form_4" class="form_div">
            <div id="table_div_header">
                <table id="tbl_header">    </table>
            </div>
            <div id="table_div">
                <table id="tbl" ></table>
            </div>

        </div>


        <div id="myDIV" style="background-color:beige">

        </div>

        <div id="middle"> 
            <%--  <div id="menu_1" class="box_menu">Order Process</div>--%> 

            <div id="middle_div_2" class="middle_div">

            </div>

            <div id="middle_div_1" class="middle_div"> 
                <%-- 
                <div id="middle_div_1_pic">                    
                    <img src="pic/start-button.jpg" alt="HTML5 Icon" style="width:99px;height:99px;" class="img2" onclick="clickhandler()">                    
                </div>
                --%> 
                <input type="text" id="datepicker_process" class="start" placeholder="Processing time">
                <input type="text" id="datepicker_due" class="end" placeholder="Due date">
            </div>

            <div id="middle_div_3" class="middle_div"></div>

        </div>

        <div id="footer">
            <div class="footer_1">winpak 1hgjyjy23</div>

        </div>


        <h1>Winpak test!</h1>
        <div class="ui-widget">
            <label for="tags">Tags: </label>
            <input id="tags" class="tags">
        </div>
        <a href="file://w15lan02/MovexPDF/Commercial Invoice/0626997.pdf" target="_blank">Click here</a>
        <a href="http://c1.novapdf.com/themes/novapdf/images/en/btn-search_en.png" target="_blank">Click here</a>
        <a href="pdf/0626997.pdf" target="_blank">Click here</a>
        <a href="file://w15lan02/MovexPDF/Commercial%20Invoice/0626997.pdf" target="_blank">Click here</a>
        <a href="file:///C:/0626997.pdf" target="_blank">Click here</a>
        <a href="\\w15lan02/MovexPDF/Commercial%20Invoice/0626997.pdf" target="_blank">Invoice#1</a>
        <a href="pdf/12.pdf" target="_blank">Click here</a>
        <input type="submit" id="test_1" name="test_1" class="test_1" placeholder="test" />
        <input id="myButton_jsonp" type="button" value="test2_jsonp" />
        <input id="myButton_jsonp2" type="button" value="test3_jsonp" />
        <div id="myDIV">
            <%--  <table id="tbl" class="scroll"></table>--%> 
        </div>

        <br>
        <br>
        <br>
        <%--  --%> 
        <table id="jqGrid" class="test_jqGrid"></table>
        <div id="jqGridPager"></div>

        <div  style="background-color:blue;padding:5px;display:table;">
            <%--   <table id="mytbl" class="scroll"></table>--%> 
        </div>




    </body>
</html>
