<%-- 
    Document   : index
    Created on : May 9, 2016, 10:01:21 PM
    Author     : Administrator
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui.min.js"></script>       
        <link rel="stylesheet" type="text/css" href="js/trirand/jquery-ui_redmond.css" />
        <script type="text/javascript" src="js/test_jquery_autocomplete.js"></script>
        <script type="text/javascript" src="js/test_jquery_map.js"></script>
        <script type="text/javascript" src="js/test_jquery_table.js"></script>
        <script type="text/javascript" src="js/test_jquery_datepicker.js"></script>
        <script type="text/javascript" src="js/test_1.js"></script>
        <script type="text/javascript" src="js/test_1_jsonp.js"></script>
        <script type="text/javascript" src="js/test_jquery_label.js"></script>

        <link rel="stylesheet" href="css/css_autocomplete.css">
        <link rel="stylesheet" href="css/css_map.css">
        <link rel="stylesheet" href="css/css_layout.css">
        <link rel="stylesheet" href="css/css_table.css"> 
        <link rel="stylesheet" href="css/css_datepicker.css">
        <link rel="stylesheet" href="css/css_login.css">


        <link rel="stylesheet" type="text/css" href="js/jqgrid/ui.jqgrid.css" /> 

        <script type="text/javascript" src="js/jqgrid/jquery.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/grid.locale-en.js"></script>
        <script type="text/javascript" src="js/jqgrid/jquery.jqGrid.min.js"></script>
        <script type="text/javascript" src="js/jqgrid/jqgrid_test_1.js"></script>
        <link rel="stylesheet" type="text/css" href="js/jqgrid/jqgrid_test_1.css" />




        <style>
            #myDIV {
                height: 200px;
                width: 500px;
                overflow: auto;
                margin-right: auto;
                margin-left: auto;
            }

            #gt {
                height: 300px;
                width: 600px;

            }




        </style>
        <style>

        </style>

        <script>


        </script>
        <script>

            $(document).ready(function () {
                //     document.getElementById('label_city_from').style.color = '#84563c'; //set label text color
                $("#signup").click(function () {
                    $(this).slideUp();

                });
            });
        </script>

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjkSZcMt086MCp3N-SijWVXWr9ww09Kr0&signed_in=false&callback=initMap"
                async defer>
        </script>
        <title>JSP Page</title>
    </head>
    <body>
        <div id="header">
            <p>
                <input type="text" name="user" id="login_username" class="login_username" placeholder="username">
                <input type="password" name="password" id="login_password" class="login_password" placeholder="password">
                <button id="login_test" class="login_button">Login test</button>
                <button id="signup" class="login_signup">Sign Up</button>
                <%--  <p id="signup" class="log_in_signup"> Sign Up</p>--%>
            </p>
            <div class="bottomright">
                <%--<button id="login222">Log test</button>--%>
                <%--<button>Log in</button>--%>
                <button id="login">Log in</button>
                <br><br>
                <button id="bands" type="button">Show bands!</button>
            </div>
        </div>
        <input type="button" id="filter" name="filter" value="Filter" />
        <p>
            <input id="myButton" type="button" value="test1" />
            <input id="myButton_jsonp" type="button" value="test2_jsonp" />
        </p>
        <div id="main_map">
            <div id="map" class="map"></div>
        </div>
        <br>
        <div class="ui-widget">
            <label for="tags">Tags: </label>
            <input id="tags">
        </div>
        <br>
        <div id="main_action"> 
            <div class="ui-widget"> 
                <div id="label_city_from" class="box_menu">Departure</div>
                <div id="label_city_to" class="box_menu">Arrival</div>
                <div id="label_date_start" class="box_menu">Start date</div>
                <div id="label_date_end" class="box_menu">End date</div>

                <%--
                <div id="city_to_search" class="box_menu">Arrival</div>
                <div id="start_datepicker" class="box_menu">Start date</div>
                <div id="end_datepicker" class="box_menu">End date</div>
                --%>   
                <%--
                                        <label for="city_from_search" id="label_city_from" class="label_cityfrom" >Departure </label>
                                        <label for="city_to_search" id="label_city_to" class="label_cityto">Destination: </label>
                                        <label for="start_datepicker" id="label_date_start" class="label_datestart">Start date: </label>
                                        <label for="end_datepicker" id="label_date_end" class="label_dateend">End date: </label>
                --%>                       
                <br>
                <br>

                <input type="text" id="city_from_search" name="city_from_search" class="city_from_search" />
                <input type="text" id="city_to_search" name="city_to_search" class="city_to_search" />
                <input type="text" id="start_datepicker" name="start_datepicker" class="start_datepicker" placeholder="mm/dd/yyyy">
                <input type="text" id="end_datepicker" name="end_datepicker" class="end_datepicker" placeholder="mm/dd/yyyy">

                <%--
                <input type="text" id="city_to_search" name="city_to_search" class="city_to_search" />
                <input type="text" id="start_datepicker" name="start_datepicker" class="start_datepicker">
                <input type="text" id="end_datepicker" name="end_datepicker" class="end_datepicker">
                --%>   
            </div>

        </div>

        <br>
        <br>
        <br>
        <br>

        <table id="jqGrid" class="test_jqGrid"></table>
        <div id="jqGridPager"></div>

        <br>
        <br>     
        <br>
        <br>
        <div id="main"> 
            <p>now is for main</p>
            <div class="main_item">商品分类(cat)
                <h1>No.</h1>
                <h1>Lat</h1>
                <h1>Lon</h1>
            </div> 
            <div class="main_delivery">商品分类(cat)</div> 




            <div id="myDIV">
                <table id="tbl" class="scroll"></table>
            </div>

        </div>
        <br>
        <div id="footer">底部（footer）</div>




        <br>
        <br>
        <br>






        <div id="container_data">

            <h1>contact!</h1>
            <p id="mydiv"></p>

        </div>  







        <table id="gt" class="scroll">
            <thead>
                <tr>
                    <th>Head 1</th>
                    <th>Hdfsdfsead 2</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>

                </tr>
                <tr>
                    <td>Content 1</td>
                    <td>Lorem ipsum dolor sit amet.</td>

                </tr>
                <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>

                </tr>
                <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>

                </tr>
                <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>

                </tr>
                <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>

                </tr>
                <tr>
                    <td>Content 1</td>
                    <td>Content 2</td>

                </tr>
            </tbody>
        </table>



        <script>
            function myFunction() {
                $('table').table_scroll();
                var elmnt = document.getElementById("myDIV");
                //  var x = elmnt.scrollLeft;
                //  var y = elmnt.scrollTop;
                //  document.getElementById("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
            }
        </script>

    </body>
</html>
