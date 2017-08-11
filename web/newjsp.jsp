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
        <%--
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/redmond/jquery-ui.css">       
        

        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        --%>  

        <script src="js/winpak_jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="js/winpak_jquery-ui.js"></script>
        <link rel="stylesheet" href="redmond_theme/jquery-ui.css"> 

        <link href='http://fonts.googleapis.com/css?family=Black+Ops+One|Luckiest+Guy|Sonsie+One|Shojumaru&effect=3d|3d-float|anaglyph|brick-sign|canvas-print|
              crackle|decaying|destruction|distressed|distressed-wood|emboss|fire|fire-animation|fragile|grass|ice|mitosis|neon|outline|putting-green|
              scuffed-steel|shadow-multiple|splintered|static|stonewash|vintage|wallpaper' 
              rel='stylesheet' type='text/css'>


        <%--   --%>  
        <script type="text/ecmascript" src="table_test/grid.locale-en.js"></script>
        <script type="text/ecmascript" src="table_test/jquery.jqGrid.min.js"></script>
        <link rel="stylesheet" type="text/css" media="screen" href="table_test/ui.jqgrid.css" />



        <link rel="stylesheet" href="css/layout.css">
        <link rel="stylesheet" href="css/winpak_autocomplete_1.css">
        <link rel="stylesheet" href="css/winpak_login.css">
        <link rel="stylesheet" href="css/winpak_datepicker.css">
        <link rel="stylesheet" href="css/winpak_email.css">
        <link rel="stylesheet" href="css/winpak_upload.css">
        <link rel="stylesheet" href="css/winpak_order_list.css">
        <link rel="stylesheet" href="css/winpak_upload_table.css">
        <link rel="stylesheet" href="css/winpak_select_menu.css">
        <link rel="stylesheet" href="css/winpak_del_ref.css">
        <link rel="stylesheet" href="css/winpak_order_table.css">
        <link rel="stylesheet" href="css/winpak_additional.css">
        <link rel="stylesheet" href="css/winpak_toolip.css">
        <link rel="stylesheet" href="css/winpak_dcr.css">
        <link rel="stylesheet" href="css/winpak_lock.css">
        <link rel="stylesheet" href="css/winpak_order_memo.css">
        <link rel="stylesheet" href="css/winpak_ilde_page.css">
        <link rel="stylesheet" href="css/winpak_selectbox.css">


        <script src="js/winpak_1.js"></script>
        <script src="js/winpak_datepicker.js"></script>
        <script src="js/winpak_signin.js"></script>
        <script src="js/winpak_quick_search.js"></script>
        <%-- 
        <script src="js/winpak_browser_storage.js"></script>
        <script src="js/winpak_upload.js"></script>
        <script src="js/winpak_jQuery-file-exists.js"></script>
        --%>
        <script src="js/winpak_form_btn.js"></script>
        <script src="js/winpak_email.js"></script>
        <script src="js/winpak_file_browse.js"></script>
        <script src="js/winpak_upload_selection.js"></script>
        <script src="js/winpak_select_menu.js"></script>
        <script src="js/winpak_del_ref.js"></script>
        <script src="js/winpak_table_file_list.js"></script>
        <script src="js/winpak_auto_complete.js"></script>
        <script src="js/winpak_placeholder.js"></script>
        <script src="js/winpak_window_width.js"></script>
        <script src="js/winpak_global.js"></script>
        <script src="js/winpak_auto_complete_additional.js"></script>
        <script src="js/winpak_dcr.js"></script>
        <script src="js/winpak_lock.js"></script>
        <script src="js/winpak_order_memo.js"></script>
        <script src="js/winpak_idle_page.js"></script>

        <script src="js/winpak_word_count.js"></script>


        <script src="js/test_1_jsonp.js"></script>
        <script src="js/test_1_jsonp_1.js"></script>

        <script src="js/winpak_table_click.js"></script>
        <link rel="stylesheet" href="css/winpak_table.css">



        <script type="text/javascript" src="js/jqgrid/jqgrid_test_1.js"></script>

        <%-- --%>
        <script type="text/javascript" src="js/winpak_training.js"></script>

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


        <title>Winpak Templates</title>
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

            /* */
            $(function () {
                $(document).tooltip({
                    position: {
                        my: "center bottom-20",
                        at: "center top",
                        using: function (position, feedback) {
                            $(this).css(position);
                            $("<div>")
                                    .addClass("arrow")
                                    .addClass(feedback.vertical)
                                    .addClass(feedback.horizontal)
                                    .appendTo(this);
                        }
                    }
                });
            });


        </script>

        <script>
            $(document).ready(function () {
                //   window.global_path = "http://128.1.10.116:8080/winpak/user_signin_2";
                //   window.global_ip = "http://128.1.10.116:8080/winpak/";

                window.global_path = "http://128.1.8.132:8080/winpak/user_signin_2";
                window.global_ip = "http://128.1.8.132:8080/winpak/";
            });
        </script>

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
                        window.location.replace("http://" + window.location.href.trim().match(/\/\/(.*?)\//)[1] + "/login");
                    }

                } else {
                    alert("Sorry! This web browser has no Web Storage support..");
                }
                $(".animation_gif").hide();

            });
        </script>


        <script>
            $(document).ready(function () {
                //   $("#myButton_jsonp2").trigger("click");

                //    $("#table_order_refresh").trigger("click");

                $("input, select, textarea").attr("autocomplete", "off");
            });
        </script>

        <script>
            $(document).ready(function () {
                function getUserName() {
                    var wshNetwork = new ActiveXObject("WScript.Network");
                    var userName = wshNetwork.UserName;
                    return userName;
                }

            });
        </script>


        <style>
            .footer_text:hover{
                background-color:  #27b7ec;
            }
        </style>

        <style>
            .child-row-class{
                <%--
                background-color:  rgba(204,255,255,0.3);
                 
                display:none;
                --%>
            }
        </style>
        <script>
            function msieversion() {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");
                var if_ie;

                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
                {
                    //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
                    if_ie = 1;   // browser is IE
                } else  // If another browser, return 0
                {
                    //alert('otherbrowser');
                    if_ie = 0;    // not IE
                }
                //return false;
                return if_ie;
            }
        </script>




        <script>
            $(document).ready(function () {


                if (msieversion()) {    // IE 

                    /* 
                     $('#sign_in').css('display', 'none');
                     $('#signed_user').css('display', 'none');
                     $('#log_out').css('display', 'none');
                     
                     $('#mask').css('display', 'block');
                     //  $('#mask').css('display', 'none');
                     //$('#mask').css('background-image', 'url(pic/123.png)');
                     $('#mask video').css('position', 'absolute');
                     $('#mask video').css('left', 20 + '%');
                     $('#mask video').css('top', 10 + '%');
                     $('#order_search').css('display', 'none');
                     $('#sign_in').css('display', 'none');
                     $('#type_select_menu').css('display', 'none');
                     
                     
                     // 1. Create the button
                     var button_template = document.createElement("button");
                     button_template.innerHTML = "Templates";
                     
                     
                     // 2. Append somewhere
                     var body_template = document.getElementsByTagName("body")[0];
                     body_template.appendChild(button_template);
                     
                     // 3. Add event handler
                     button_template.addEventListener("click", function () {
                     $("#type_select_menu").val(document.getElementById("opt_1").text).change();
                     });
                     
                     $(button_template).css('color', '#007357');
                     $(button_template).css('font-weight', 600);
                     $(button_template).css('background-color', 'Transparent');
                     $(button_template).css('border', '1px solid #00A250');
                     $(button_template).css('width', 110 + "px");
                     $(button_template).css('position', 'absolute');
                     $(button_template).css('z-index', 1);
                     
                     
                     switch ($(document).width()) {
                     case 1920:
                     $(button_template).css('margin-left', 88 + "%");
                     $(button_template).css('margin-top', 2.7 + "%");
                     $(button_template).css('height', 30 + "px");
                     break;
                     case 1664:
                     $(button_template).css('margin-left', 68 + "%");
                     $(button_template).css('margin-top', 3 + "%");
                     break;
                     default:  //1264
                     $(button_template).css('margin-left', 86 + "%");
                     $(button_template).css('margin-top', 3.6 + "%");
                     $(button_template).css('height', 22 + "px");
                     
                     }
                     $(window).resize(function () {
                     switch ($(document).width()) {
                     case 1920:
                     //    alert($(document).width());
                     $(button_template).css('margin-left', 88 + "%");
                     $(button_template).css('margin-top', 2.7 + "%");
                     $(button_template).css('height', 30 + "px");
                     break;
                     case 1664:
                     $(button_template).css('margin-left', 68 + "%");
                     $(button_template).css('margin-top', 3 + "%");
                     break;
                     default:  //1264
                     $(button_template).css('margin-left', 86 + "%");
                     $(button_template).css('margin-top', 3.6 + "%");
                     $(button_template).css('height', 22 + "px");
                     }
                     });
                     */
                    //   $('#mask').css('display', 'none');
                } else {
                    //   $('#mask').css('display', 'none');
                    // $('#type_select_menu').find('option:nth-child(1)').prop('selected',true).trigger('change');
                }


                /*
                 $('#mask').css('display', 'none');
                 // $('#type_select_menu').find('option:nth-child(1)').prop('selected',true).trigger('change');
                 */
            });
        </script> 

        <script>
            $(document).ready(function () {
                tab_refresh = 0;
                $(window).focus(function () {
                    // alert(!localStorage.user_name_signed_in);
                    if ((tab_refresh === 1) && (!localStorage.user_name_signed_in)) {
                        location.reload();
                        tab_refresh = 0;
                    }
                });
                $(window).blur(function () {
                    tab_refresh = 1;
                });
            });
        </script>
    </head>
    <body>

        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">×</span>                 
                    <h2>COMS Login</h2>  
                    <img id="slogan_gif" class="slogan_gif" src="pic/squares.gif" style="width:60px;height:60px;">                   
                </div>
                <div class="modal-body">                   
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="Ex: w15xyabc(Your Windows name)" autofocus/><br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="******(Your Windows password)"/><br/>

                    <p id="login_msg">Enter correct username and password! </p>

                    <div id="select_1" class="select">
                        <select>
                            <option>FTP</option>
                            <option>DCR</option>
                            <option>PROMS</option>

                        </select>
                        <div class="select__arrow"></div>
                    </div>

                </div>
                <div class="modal-footer">
                    <input type="button" id="loginbtn" value="Login"/>
                    <input type="button" id="cancel" value="Cancel"/>
                    <br/>
                </div>
            </div>
        </div>

        <div id="slogan">   

            <%--
             <div class="onoffswitch">
                 <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
                 <label class="onoffswitch-label" for="myonoffswitch">
                     <span class="onoffswitch-inner"></span>
                     <span class="onoffswitch-switch"></span>
                 </label>
             </div>
            
            --%> 
            <%--
                       <span class="toggle">
                           <input type="checkbox" id="myonoffswitch" checked>
                           <label data-off="DCR" data-on="FTP"></label>
                       </span>
            --%> 

            <%--  
           <img id="spinning_gif" class="spinning_gif" src="pic/spinning.gif" style="width:60px;height:60px;">
            <img src="pic/WPK vertical.png" alt="HTML5 Icon" style="width:80px;height:50px;" class="img1"> 
            --%> 
            <img src="pic/logo3.jpg" alt="HTML5 Icon" style="width:148px;height:30px;" class="img1" id="training_1"> 
            <p id="slogan_1" class="slogan_1">Winpak Template</p>       


            <p id="sign_in" class="sign_in">Sign in</p>
            <%--  
            <input title="Begin with a prefix: ino_" type="text" id="order_search" name="order_search" class="order_search" placeholder="Quick search (by Order ID)" />
            <input title="Order No." type="text" id="test_order" class="test_order" placeholder="Order No." />
            --%> 

            <p id="signed_user" class="signed_user">signed user</p>
            <p id="log_out" class="log_out">/ Log out</p>


        </div>


        <br>

        <div id="header">
            <%--  
            <a class="" href="pdf/original/$21 Plain Zipper - Gusset Pouch.xlsx" download='test.xlsx'>Download</a>
            --%> 
            <div id="idle_page">
                You will be auto logged out in <span id="SecondsUntilExpire"></span> seconds.
            </div>

            <input type="text" id="Customer_name_1" class="primary_keys" autocomplete="off" readonly/>
            <input type="text" id="Item_number_1" class="primary_keys"  autocomplete="off" readonly/>

            <input type="text" id="order_search" name="order_search" class="order_search" autocomplete="off"/>

            <%--  
            <div class="header_txt1">login user1: username:1001, pwd:123456 /user2: username:1002, pwd:123 </div>
            --%> 


        </div>

        <div id="mask"> 
            <%--  
            <video margin-left="200" width="620" height="440" autoplay loop>
                <source src="pic/WinPak.mov.mp4" type="video/mp4">
            </video>
            --%>
            <img id="mask_img" class="mask_img" src="pic/111.png" style="margin-left:30%;margin-top:8%;width:38%;height:60%;">

        </div>
        <div id="middle"> 


            <div id="form_1" class="form_div">
                <div id="menu_title_1" class="menu_title_1">Primary Keys ( field in red is mandatory )</div>
                <input id="new_order_btn_1" type="button" value="Create" />

                <div id="select_code" class="select" style="left:5%;top:38%; width: 10%;position:absolute; ">
                    <select style="color:black;height:30px;border:1px  #cccccc solid; " title="Choose a product group code">
                        <option value="" selected disabled>Code</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option> 
                        <option>04</option> 
                        <option>07</option> 
                        <option>08</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>                               
                        <option>27</option>
                        <option>28</option>
                        <option>Box Pouch</option>
                        <option>DCR</option>
                    </select>
                    <div class="select_common"></div>
                </div>

                <input id="new_order_btn" type="button" value="Save" />

                <%-- 
                <input title="Customer name" type="text" id="Customer_name" name="Customer_name" class="primary_keys" />
                <input title="new order number" type="text" id="new_order_number" name="new_order_number" class="primary_keys" placeholder="New order number" readonly/>
                <input title="Product description" type="text" id="Product_description" name="Product_description" class="primary_keys" placeholder="Product description"/>
                <input title="Customer number" type="text" id="Customer_number" name="Customer_number" class="primary_keys" placeholder="Customer number"/>
                <input title="Sale number" type="text" id="Sale_number" name="Sale_number" class="primary_keys" placeholder="Sale number"/>
                <input title="Item number" type="text" id="Item_number" name="Item_number" class="primary_keys" placeholder="Item number"/>
                --%> 
                <input type="text" id="Customer_name" name="Customer_name" class="primary_keys" title="Customer name" autocomplete="off"/>

                <input type="text" id="Product_description" name="Product_description" class="primary_keys" title="Product description" autocomplete="off"/>
                <input type="text" id="Customer_number" name="Customer_number" class="primary_keys" title="Customer number" autocomplete="off"/>
                <input type="text" id="Sale_number" name="Sale_number" class="primary_keys" title="CO number" autocomplete="off"/>
                <input type="text" id="Item_number" name="Item_number" class="primary_keys" title="Item number" autocomplete="off"/>

                <input type="text" id="PO_NUMBER" name="PO_NUMBER" class="primary_keys" title="Graphics PO#" autocomplete="off"/>
                <input type="text" id="CA_FT_NPQ_NUMBER" name="CA_FT_NPQ_NUMBER" class="primary_keys" title="CA_FT_NPQ #" autocomplete="off"/>
                <%--
                <input type="text" id="LOCK_FLAG" name="LOCK_FLAG" class="LOCK_FLAG" />
                --%>
                <input type="text" id="datepicker_due_new" class="datepicker_due_new" title="due date" autocomplete="off">
                <img id="new_folder_gif" class="animation_gif" src="pic/ring-alt.gif" style="width:60px;height:60px;">



            </div>






            <div id="form_2" class="form_div">

                <input type="text" id="new_order_number" name="new_order_number" class="new_order_number" readonly autocomplete="off"/>
                <input type="text" id="locked_by" readonly autocomplete="off"/>
                <input type="button" id="order_locked" class="order_lock" title="Click to lock this order" />
                <input type="button" id="order_unlocked" class="order_lock" title="Unlock this order"/> 
                <textarea id="order_memo_area" rows="4" cols="50" autocomplete="off" >Order memo ..... </textarea>
                <div id="auto_save_message" class="auto_save_message"></div>

                <div id="menu_title_2" class="menu_title_2">Existing Order</div>
                <input type="text" id="email_recipient"/>
                <input type="button" id="email_list_btn" class='email_list_btn' value="Add">
                <div id="div_email_list">
                    <table id="table_email_list">    </table>
                </div>

                <input type="text" id="datepicker_process" class="start">
                <input type="button" id="email_btn" class='email_btn' value="Email via Outlook">



                <%-- 
                <form action="UploadFile" method="post" enctype="multipart/form-data">
                
                --%> 
                <form id="myFormId" action="UploadFile" method="post">
                    <input type="file" id="file_browse_btn" name="myfile[]" multiple><br>
                    <input type="hidden" id="varname" name="varname"  value="12345" />
                    <div id="div_upload_list">
                        <table id="table_upload_list">    </table>
                    </div>
                    <input type="submit" id="upload_btn" value="Upload File to Server" title="File name: 61000 abc.doc">


                    <%--  this for dcr test   --%> 
                    <div id="dcr_div_modal">
                        <div id="dcr_div_1">
                            <%--
                            <textarea id="dcr_txt_area" rows="4" cols="50">Add your word.....</textarea>
                            --%> 
                            <div class="paper">
                                <div class="paper-content">
                                    <textarea id="dcr_txt_1" autofocus></textarea>                                    
                                </div>
                                <div id="dcr_word_cnt" class="font-effect-scuffed-steel">
                                    Total word count: <span id="display_count">0</span> words. Words left: <span id="word_left">100</span>
                                </div>
                            </div>

                            <input id="dcr_div_btn_1" class="dcr_div_btn" type="button" value="OK" />
                            <input id="dcr_div_btn_2" class="dcr_div_btn" type="button" value="Cancel" />
                        </div>

                    </div>

                </form>

                <div class="progress">
                    <div class="bar"></div >
                    <div class="percent">0%</div >
                </div>
                <div id="status"></div>

            </div>

            <input type="text" id="template_search" name="template_search" class="template_search" placeholder=" Template search type here ..."/>
            <div id="form_3" class="form_div">

                <select name="type_select_menu" id="type_select_menu" class="type_select_menu">
                    <option id="opt_1">Templates</option>
                    <option selected="selected" id="opt_2">Progress</option>
                </select>
                <input id="table_file_list_del" type="button" value="Delete" />
                <div id="table_oder_div_2">
                    <table id="table_file_list">    </table>
                </div>
                <img id="table_file_gif" class="animation_gif" src="pic/ring-alt.gif" style="width:60px;height:60px;">
            </div>


            <div id="form_4" class="form_div">
                <select name="order_select_menu" id="order_select_menu" class="order_select_menu">
                    <option selected="selected">Order Number</option>
                    <option>Due Date</option>
                </select>
                <input type="button" id="table_order_refresh" value="Refresh">
                <img id="table_folder_gif" class="animation_gif" src="pic/ring-alt.gif" style="width:60px;height:60px;">
                <%--  
               <div id="table_div_header">
                   <table id="tbl_header">    </table>
               </div>
               <div id="table_div">
                   <table id="tbl" ></table>
               </div>
                --%>
                <div id="table_oder_div">
                    <table id="table_order_number" >

                    </table>
                </div>
            </div>
        </div>

        <div id="footer">

            <div id="footer_text_1" class="footer_text">
                <br>System Support:<br>
                <br>Kelvin Lee
                <br>Tel: 5435
                <br>Email: Kelvin.Lee@winpak.com
            </div>
            <div id="footer_text_2" class="footer_text">
                <br>Business Support:<br>
                <br>Ash Andrews
                <br>Tel: 5426
                <br>Email: Ash.Andrews@winpak.com
            </div>
            <div id="footer_text_3" class="footer_text">
                <br>Network/Computer Support:<br>
                <br>Danny Gonza
                <br>Tel: 5109
                <br>Email: Danny.Gonza@winpak.com
            </div>
        </div>


        <%-- 
                <a href="H:/MK/Marketing Forms/Marketing" target="_blank">Click here</a>
                <a href="http://c1.novapdf.com/themes/novapdf/images/en/btn-search_en.png" target="_blank">Click here</a>
                <a href="pdf/0626997.pdf" target="_blank">Click here</a>
                <a href="file://w15lan02/MovexPDF/Commercial%20Invoice/0626997.pdf" target="_blank">Click here</a>
                <a href="file:///C:/0626997.pdf" target="_blank">Click here</a>
                <a href="\\w15lan02/MovexPDF/Commercial%20Invoice/0626997.pdf" target="_blank">Invoice#1</a>
                <a href="pdf/original/Sample Item to Manufactured Item Template.oft" target="_blank">Click here</a>
                <input type="submit" id="test_1" name="test_1" class="test_1" placeholder="test" />
                <input id="myButton_jsonp" type="button" value="test2_jsonp" />
                <input id="myButton_jsonp2" type="button" value="test3_jsonp" />
        --%>
        <div id="myDIV">
            <%--  <table id="tbl" class="scroll"></table>--%> 
        </div>









        <%-- 
               <script>
                   $(document).ready(function () {
                       if (msieversion()) {    // IE 
                          
                           var button_template = document.createElement("button");
                           button_template.innerHTML = "Do Something";


                    // 2. Append somewhere
                    var body_template = document.getElementsById("form_4");
                    body_template.appendChild(button_template);

                    // 3. Add event handler
                    button_template.addEventListener("click", function () {
                        $("#type_select_menu").val(document.getElementById("opt_1").text).change();
                    });

                    $(button_template).css('margin-left', 60 + "%");

                } 
            });
        </script> 



        --%> 





    </body>
</html>
