<%-- 
    Document   : newjsp
    Created on : 8-Jun-2016, 3:55:03 PM
    Author     : w15rdknl
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">       
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <link rel="stylesheet" href="/resources/demos/style.css">

        <link rel="stylesheet" href="css/winpak_login.css">

        <script src="js/winpak_1.js"></script>
        <script src="js/winpak_signin.js"></script>
        <script src="js/winpak_quick_search.js"></script>
        <script src="js/winpak_menu.js"></script>
      
        <script src="js/test_1.js"></script>

        <script src="js/winpak_login.js"></script>

        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="css/winpak_autocomplete.css">

        

        <%-- 
                <link rel="stylesheet" href="smoothness_theme/jquery-ui.theme.css">
                <link rel="stylesheet" type="text/css" href="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/css/ui.jqgrid.css" />
                 <script src="//code.jquery.com/jquery-1.10.2.js"></script>
                <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
                <script type="text/javascript" src="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/js/i18n/grid.locale-en.js"></script>
                <script type="text/javascript" src="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/js/jquery.jqGrid.min.js"></script>
                <script type="text/javascript" src="js/jqgrid_test_1.js"></script>
        


        <link rel="stylesheet" href="smoothness_theme/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/css/ui.jqgrid.css" />
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        --%>

        <%-- 
                <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/redmond/jquery-ui.css" />
        --%>  

        <%--
        <link rel="stylesheet" type="text/css" href="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/css/ui.jqgrid.css" />
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
        <script type="text/javascript" src="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/js/i18n/grid.locale-en.js"></script>
        <script type="text/javascript" src="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-4.1.2/js/jquery.jqGrid.min.js"></script>
        <script type="text/javascript" src="js/jqgrid_test_1.js"></script>
        --%>
        <link rel="stylesheet" type="text/css" href="js/jqgrid/ui.jqgrid.css" /> 
        <script type="text/javascript" src="js/jqgrid/jquery.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/grid.locale-en.js"></script>
        <script type="text/javascript" src="js/jqgrid/jquery.jqGrid.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/jqgrid_test_1.js"></script>
        <link rel="stylesheet" type="text/css" href="js/jqgrid/jqgrid_test_1.css" />


        <script>
            $(document).ready(function () {
                $("#age").tooltip();

            });






        </script>

        <script>


        </script>

        <script>
            $(document).ready(function () {
                $(function () {
                    $("#datepicker").datepicker();
                });
            });
        </script>
        <%--
        <style>
            label {
                display: inline-block;
                width: 5em;
            }
        </style>
        --%> 

        <title>Winpak test</title>
        <link rel="icon"  type="image/png"  href="pic/favicon.ico">
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
                    <br/>

                    <br/>
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
            <input title="Begin with a prefix: ino_" type="text" id="order_search" name="order_search" class="order_search" placeholder="Qucik search (by Order ID)" />

        </div>

        <br>

        <div id="header">
            <div class="header_txt1">Prototype</div>

        </div>

        <p>Date: <input type="text" id="datepicker"></p>

        <div id="middle"> 
            <%--  <div id="menu_1" class="box_menu">Order Process</div>--%> 

            <div id="middle_div_2" class="middle_div"></div>

            <div id="middle_div_1" class="middle_div"> 
                <div id="middle_div_1_pic"> 
                    <img src="pic/start-button.jpg" alt="HTML5 Icon" style="width:99px;height:99px;" class="img2"> 

                </div>
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
        <input type="submit" id="test_1" name="test_1" class="test_1" placeholder="test" />

        <br>
        <br>
        <br>
        <table id="jqGrid" class="test_jqGrid"></table>
        <div id="jqGridPager"></div>







    </body>
</html>
