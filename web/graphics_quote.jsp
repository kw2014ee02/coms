<%-- 
    Document   : graphics_quote
    Created on : 5-Apr-2017, 4:28:42 PM
    Author     : w15rdknl
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Graphics Quote</title>

        <link rel="stylesheet" href="redmond_theme/jquery-ui.css">       
        <script src="js/winpak_jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="js/winpak_jquery-ui.js"></script>
        <%-- 
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">    
        <link rel="stylesheet" href="/resources/demos/style.css">
        --%>   

        <link rel="stylesheet" href="css/winpak_selectbox.css">
        <link rel="stylesheet" href="css/winpak_checkbox.css">
        <link rel="stylesheet" href="css/winpak_autocomplete_1.css">



        <script src="js/winpak_template.js"></script>
        <link rel="stylesheet" href="css/winpak_datepicker.css">




        <style>

            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;

                /*
                background-color: rgba(46, 168, 242, 0.3);
                font: 100pt "Tahoma";
                */
                font-family: "Tahoma";
                background-color: rgba(0, 0, 0, 0.7);

            }
            * {
                /*
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                */
            }

            .page {
                /* width: 410mm; */
                /*
                width: 210mm;
                height: 277.5mm;
                */
                width: 260mm;
                height: 377mm;

                padding: 0mm;                
                margin: 0mm auto;

                border: 1px white solid;
                border-radius: 0px;
                background-color:  white;
                /*
                box-shadow: 0 0 58px rgba(0, 0, 0, 0.8);
                */

                margin-top: 2px;

                position:relative;

            }


            @media print {
                .no-print, .no-print *
                {
                    display: none !important;
                }

                body{
                    background-color: white;
                }

            }

        </style>

        <script>
            function bigImg(x) {
                x.style.height = "64px";
                x.style.width = "64px";
            }

            function normalImg(x) {
                x.style.height = "60px";
                x.style.width = "60px";
            }
        </script>

        <style>
            #btn_1_panel_search{
                font-family: Roboto;
                font-weight: bolder;
                font-size: 100%;    
                text-align: center; 
                position: absolute;
                border-top: 0px solid #3399ff;
                border-left: 0px solid #3399ff;
                border-right: 0px solid #3399ff;
                border-bottom: 0px solid rgba(192,192,192,1);
                border-radius: 2px 0 0 2px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;    
                outline: none;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                text-align: center; 
                background-color: rgba(0,119,90,0.8);
                color: white;
            }
            #btn_2_panel_search{
                font-family: Roboto;
                font-weight: bolder;
                font-size: 100%;    
                text-align: center; 
                position: absolute;
                border-top: 0px solid #3399ff;
                border-left: 0px solid #3399ff;
                border-right: 0px solid #3399ff;
                border-bottom: 0px solid rgba(192,192,192,1);
                border-radius: 2px 0 0 2px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;    
                outline: none;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                text-align: center; 
                background-color: rgba(0,119,90,0.8);
                color: white;
            }
            #btn_1_panel_search:hover{
                background-color: rgba(0,119,90,0.6);
            }
            #btn_2_panel_search:hover{
                background-color: rgba(0,119,90,0.6);
            }
            #btn_1_panel_search:focus{
                background-color: rgba(0,119,90,0.6);
            }
            #btn_2_panel_search:focus{
                background-color: rgba(0,119,90,0.6);
            }
        </style>

    </head>
    <body>
        <div id="section-to-print_1" class="page" style="border:0px black solid;">

            <div id="div_logo_1" class="no-print" style="border-bottom: 1px #00A250 solid;
                 width: 100%;
                 height:60px;
                 position: absolute;
                 left: 0%;
                 top:1%;">

                <img src="pic/logo3.jpg" alt="HTML5 Icon" 
                     style="display: block;position:absolute;
                     top:22%;left:0.6%;
                     opacity: 0.6;
                     display:block;                     
                     ">

                <input type="text" class="input_filename"  autocomplete="off" readonly style="width:20%;height:26px;float:right;right:2px;top:8%;position:absolute;
                       text-align:right;border:0px #cccccc solid;color:#999999;font-size:16pt;"/>

                <p style="position:absolute;font-size:16pt;font-weight:bold;
                   top:16%;float:right;right:20px;display:block;color:rgba(159,204,190,1.0);">COMS</p>

            </div>

            <div id="div_footer_1" class="no-print" style="border-top: 2px #cccccc solid;width: 100%;height:60px;position: absolute;left: 0%;top:96%;display:none;">
                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:46%;display:block;color: #999999;">Page 1 of 2</p>

            </div>

            <div id="flex_1" style="border:0px red solid;position: absolute;top:6%;left:0%;width:100%;height: 90%;">

                <div id="box" style="position: absolute;left:0px;top:0px;background-color:black; width:300px;height:60px; 
                     border: 1px #999999 solid;vertical-align: middle;text-align: center;">                   
                    <p align="center" style="font-size:14pt;color:white;font-weight:bolder;">GRAPHICS QUOTE REQUEST</p>
                </div>

                <%--
                <div id="box" style="position: absolute;left:320px;top:8px;background-color:transparent; width:180px;height:40px; 
                     border: 2px red solid;vertical-align: middle;text-align: center;line-height: 1px;">
                    <p align="center" style="font-size:14pt;color:red;font-weight:bolder;">CONTROLLED</p>
                </div>
                --%>

                <label id="label_page_1_gr_inv" for="input_page_1_gr_inv" style="font-size:11pt;float:right;right:110px;top:30px;position:absolute;"> GR INV#: </label>
                <input type="text" id="input_page_1_gr_inv" autocomplete="off" style="width:10%;height:26px;float:right;right:2px;top:26px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_po" for="input_page_1_po" style="font-size:11pt;float:right;right:406px;top:30px;position:absolute;"> PO#: </label>
                <input type="text" id="input_page_1_po" autocomplete="off" style="width:20%;height:26px;float:right;right:190px;top:26px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_so" for="input_page_1_so" style="font-size:11pt;float:right;right:406px;top:64px;position:absolute;"> SO#: </label>
                <input type="text" id="input_page_1_so" autocomplete="off" style="width:20%;height:26px;float:right;right:190px;top:60px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_1_quote_number" for="input_page_1_quote_number" style="font-size:11pt;float:right;right:896px;top:80px;position:absolute;"> Quote #: </label>
                <input type="text" id="input_page_1_quote_number" autocomplete="off" style="width:20%;height:26px;float:right;right:690px;top:76px;position:absolute;
                       text-align:left;border:1px black solid;font-size:14pt;"/>
                <label id="label_page_1_quote_date" for="input_page_1_quote_date" style="font-size:11pt;float:right;right:900px;top:130px;position:absolute;"> Quote Date: </label>
                <input type="text" id="input_page_1_quote_date" autocomplete="off" style="width:20%;height:26px;float:right;right:690px;top:126px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_coordinator" for="input_page_1_coordinator" style="font-size:11pt;float:right;right:600px;top:130px;position:absolute;"> Coordinator: </label>
                <input type="text" id="input_page_1_coordinator" autocomplete="off" style="width:20%;height:26px;float:right;right:390px;top:126px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_sale_rep" for="input_page_1_sale_rep" style="font-size:11pt;float:right;right:296px;top:130px;position:absolute;"> Sales Rep. #: </label>
                <input type="text" id="input_page_1_sale_rep" autocomplete="off" style="width:10%;height:26px;float:right;right:190px;top:126px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_quoted_by" for="input_page_1_quoted_by" style="font-size:11pt;float:right;right:108px;top:130px;position:absolute;"> Quoted By: </label>                         
                <div id="select_page_1_quoted_by" class="select" style="float:right;right:2px;top:126px;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;width:100px;">
                        <option value="" selected></option>
                        <option>LC</option>
                        <option>ST</option>  
                        <option>TC</option>
                        <option>LH</option>  
                        <option>SL</option>
                        <option>BH</option>  
                        <option>VH</option>
                        <option>IW</option>  
                        <option>PB</option>
                        <option>EP</option>  
                    </select>            
                </div>

                <label id="label_page_1_customer_number" for="input_page_1_customer_number" style="font-size:11pt;float:right;right:900px;top:164px;position:absolute;"> Customer #: </label>
                <input type="text" id="input_page_1_customer_number" autocomplete="off" style="width:20%;height:26px;float:right;right:690px;top:160px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_customer" for="input_page_1_customer" style="font-size:11pt;float:right;right:600px;top:164px;position:absolute;"> Customer: </label>
                <input type="text" id="input_page_1_customer" autocomplete="off" style="width:59.5%;height:26px;float:right;right:2px;top:160px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_design" for="input_page_1_design" style="font-size:11pt;float:right;right:900px;top:198px;position:absolute;"> Design: </label>
                <input type="text" id="input_page_1_design" autocomplete="off" style="width:70.9%;height:26px;float:right;right:190px;top:194px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_new_rwc" for="select_page_1_new_rwc" style="font-size:11pt;float:right;right:110px;top:198px;position:absolute;"> New/RWC: </label>
                <div id="select_page_1_new_rwc" class="select" style="float:right;right:2px;top:194px; width: 10%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>New</option>
                        <option>RWC</option>                        
                    </select>
                    <div class="select_common"></div>
                </div>
                <label id="label_page_1_movex" for="input_page_1_movex" style="font-size:11pt;float:right;right:900px;top:232px;position:absolute;"> Movex #: </label>
                <input type="text" id="input_page_1_movex" autocomplete="off" style="width:30.2%;height:26px;float:right;right:590px;top:228px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <%--
                <label id="label_page_1_sub_contracted" for="input_page_1_sub_contracted" style="font-size:11pt;float:right;right:580px;top:232px;position:absolute;display:none;"> Subcontracted: </label>
                <input type="text" id="input_page_1_sub_contracted" autocomplete="off" style="width:20%;height:26px;float:right;right:370px;top:228px;position:absolute;
                       text-align:left;border:1px black solid;display:none;" value="N/A"/>
                --%>
                <label id="label_page_1_random_registered" for="select_page_1_random_registered" style="font-size:11pt;float:right;right:448px;top:232px;position:absolute;"> Random/Registered: </label>              
                <div id="select_page_1_random_registered" class="select" style="float:right;right:340px;top:228px; width: 10%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>Random</option>
                        <option>Registered</option>
                    </select>
                    <div class="select_common"></div>
                </div>
                <label id="label_page_1_structure" for="input_page_1_structure" style="font-size:11pt;float:right;right:220px;top:232px;position:absolute;"> Structure: </label>
                <input type="text" id="input_page_1_structure" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:228px;position:absolute;
                       text-align:left;border:1px black solid;" value="TBA"/>

                <%--
                <input type="text" id="input_page_1_structure_sub" autocomplete="off" style="width:2%;height:26px;float:right;right:418px;top:262px;position:absolute;
                       text-align:left;border:1px red solid; display: none;" value="&#x25BC;" readonly="true"/>
                --%>

                <label id="label_page_1_pouch_size" for="input_page_1_pouch_size" style="font-size:11pt;float:right;right:610px;top:266px;position:absolute;"> Pouch Size: </label>
                <input type="text" id="input_page_1_pouch_size" autocomplete="off" style="width:10%;height:26px;float:right;right:500px;top:262px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_od_id" for="select_page_1_od_id" style="font-size:11pt;float:right;right:450px;top:266px;position:absolute;"> OD/ID: </label>
                <div id="select_page_1_od_id" class="select" style="float:right;right:340px;top:262px; width: 10%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>OD</option>
                        <option>ID</option>
                    </select>
                    <div class="select_common"></div>
                </div>

                <label id="label_page_1_separate_gusset" for="select_page_1_separate_gusset" style="font-size:11pt;float:right;right:210px;top:266px;position:absolute;"> Sep. Gusset Info: </label>
                <div id="select_page_1_separate_gusset" class="select" style="float:right;right:2px;top:262px; width: 20.2%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>Same structure</option>
                        <option>Different structure</option>
                    </select>
                    <div class="select_common"></div>
                </div>

                <%-- --%>
                <input id="checkbox_external_charge" type="checkbox">
                <label id="label_external_charge" class="checkbox" for="checkbox_external_charge" style="font-size:11pt;position:absolute;float:right;right:680px;top:318px;"> This quote includes external charges: </label>


                <label id="label_page_1_dcr_label_art " for="input_page_1_dcr_label_art" style="font-size:11pt;float:right;right:540px;top:306px;position:absolute;"> DCR Label Art: </label>
                <input type="text" id="input_page_1_dcr_label_art" class="money" autocomplete="off" style="width:8%;height:26px;float:right;right:540px;top:322px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_mac_time" for="input_page_1_mac_time" style="font-size:11pt;float:right;right:410px;top:306px;position:absolute;"> Mac Time: </label>
                <input type="text" id="input_page_1_mac_time" class="money"  autocomplete="off" style="width:8%;height:26px;float:right;right:400px;top:322px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_proofs" for="input_page_1_proofs" style="font-size:11pt;float:right;right:282px;top:306px;position:absolute;"> Proofs: </label>
                <input type="text" id="input_page_1_proofs" class="money" autocomplete="off" style="width:8%;height:26px;float:right;right:260px;top:322px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_plates" for="input_page_1_plates" style="font-size:11pt;float:right;right:152px;top:306px;position:absolute;"> Plates: </label>
                <input type="text" id="input_page_1_plates" class="money" autocomplete="off" style="width:8%;height:26px;float:right;right:130px;top:322px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_sleeves" for="input_page_1_sleeves" style="font-size:11pt;float:right;right:18px;top:306px;position:absolute;"> Sleeves: </label>
                <input type="text" id="input_page_1_sleeves" class="money" autocomplete="off" style="width:8%;height:26px;float:right;right:2px;top:322px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_1_type" for="select_page_1_type" style="font-size:11pt;float:right;right:865px;top:366px;position:absolute;"> Quote Type: </label>              
                <div id="select_page_1_type" class="select" style="float:right;right:650px;top:362px; width: 20.8%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>Regular Quote</option>
                        <option>Additional Time</option>
                        <option>Manual Quote</option>
                        <option>Plate Only</option>
                        <option>Eyespot Trial</option>
                        <option>Dieline</option>
                        <option>EST at pouch</option>
                    </select>
                    <div class="select_common"></div>
                </div>

                <label id="label_page_1_art_opt" for="select_page_1_art_opt" style="font-size:11pt;float:right;right:865px;top:401px;position:absolute;"> Select Art Option: </label>              
                <div id="select_page_1_art_opt" class="select" style="float:right;right:650px;top:397px; width: 20.8%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>All new art</option>
                        <option>RWC with all new art</option>
                        <option>RWC to existing art</option>
                        <option>New - user existing art</option>
                        <option>New - Redraw</option>
                        <option>Eyespot Trial</option>
                        <option>Dieline Drawing</option>
                        <option>EST at pouch</option>
                    </select>
                    <div class="select_common"></div>
                </div>


                <label id="label_page_1_change_over" for="input_page_1_change_over_plate" style="font-size:11pt;float:right;right:2px;top:362px;position:absolute;
                       width:50%;height:24px;border:1px black solid;text-align: center;font-weight:bold;padding-top:6px;"> Change-Overs </label>
                <label id="label_page_1_change_over_plate" for="input_page_1_change_over_plate" style="font-size:11pt;float:right;right:450px;top:401px;position:absolute;"> Plates: </label>
                <input type="text" id="input_page_1_change_over_plate" autocomplete="off" style="width:10%;height:26px;float:right;right:340px;top:397px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_change_over_color" for="input_page_1_change_over_color" style="font-size:11pt;float:right;right:270px;top:401px;position:absolute;"> Colours: </label>
                <input type="text" id="input_page_1_change_over_color" autocomplete="off" style="width:10%;height:26px;float:right;right:160px;top:397px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_change_over_total" for="input_page_1_change_over_total" style="font-size:11pt;float:right;right:110px;top:401px;position:absolute;"> Total: </label>
                <input type="text" id="input_page_1_change_over_total" autocomplete="off" style="width:10%;height:26px;float:right;right:2px;top:397px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_1_web_width" for="input_page_1_web_width" style="font-size:10pt;float:right;right:668px;top:451px;position:absolute;"> <br>Web Width </label>
                <input type="text" id="input_page_1_web_width" autocomplete="off" style="width:7.8%;height:26px;float:right;right:658px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>

                <label id="label_page_1_number_item" for="input_page_1_number_item" style="font-size:10pt;float:right;right:924px;top:451px;position:absolute;"> <br># Items </label>
                <input type="text" id="input_page_1_number_item" autocomplete="off" style="width:7.7%;height:26px;float:right;right:904px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_assmts" for="input_page_1_assmts" style="font-size:10pt;float:right;right:842px;top:451px;position:absolute;"> <br># Assmts </label>
                <input type="text" id="input_page_1_assmts" autocomplete="off" style="width:7.8%;height:26px;float:right;right:822px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_number_plate" for="input_page_1_number_plate" style="font-size:10pt;float:right;right:760px;top:451px;position:absolute;"> <br># Plates </label>
                <input type="text" id="input_page_1_number_plate" autocomplete="off" style="width:7.8%;height:26px;float:right;right:740px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_web_width" for="input_page_1_web_width" style="font-size:10pt;float:right;right:668px;top:451px;position:absolute;"> <br>Web Width </label>
                <input type="text" id="input_page_1_web_width" autocomplete="off" style="width:7.8%;height:26px;float:right;right:658px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_web_ac" for="input_page_1_web_ac" style="font-size:10pt;float:right;right:586px;top:451px;position:absolute;"> <br># Webs Ac </label>
                <input type="text" id="input_page_1_web_ac" autocomplete="off" style="width:7.8%;height:26px;float:right;right:576px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_number_repeat" for="input_page_1_number_repeat" style="font-size:10pt;float:right;right:520px;top:451px;position:absolute;"> <br>Repeat </label>
                <input type="text" id="input_page_1_number_repeat" autocomplete="off" style="width:7.8%;height:26px;float:right;right:494px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_cyl_size" for="input_page_1_cyl_size" style="font-size:10pt;float:right;right:432px;top:451px;position:absolute;"> <br>Cyl Size </label>
                <input type="text" id="input_page_1_cyl_size" autocomplete="off" style="width:7.8%;height:26px;float:right;right:412px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_stagger_size" for="input_page_1_stagger_size" style="font-size:10pt;float:right;right:340px;top:451px;position:absolute;"> <br>Stagger Size </label>
                <input type="text" id="input_page_1_stagger_size" autocomplete="off" style="width:7.8%;height:26px;float:right;right:330px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_content_proof" for="input_page_1_content_proof" style="font-size:10pt;float:right;right:258px;top:451px;position:absolute;"> # Content <br> &nbsp;&nbsp;&nbsp;&nbsp; Proofs </label>
                <input type="text" id="input_page_1_content_proof" autocomplete="off" style="width:7.8%;height:26px;float:right;right:248px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_key" for="input_page_1_key" style="font-size:10pt;float:right;right:196px;top:451px;position:absolute;"> <br># Keys </label>
                <input type="text" id="input_page_1_key" autocomplete="off" style="width:7.8%;height:26px;float:right;right:166px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <label id="label_page_1_item_cc" for="input_page_1_item_cc" style="font-size:10pt;float:right;right:94px;top:451px;position:absolute;"> # Item that <br>&nbsp;&nbsp; require CC </label>
                <input type="text" id="input_page_1_item_cc" autocomplete="off" style="width:7.8%;height:26px;float:right;right:84px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>             
                <label id="label_page_1_contract_proof" for="input_page_1_contract_proof" style="font-size:10pt;float:right;right:12px;top:451px;position:absolute;"> # Contract <br> &nbsp;&nbsp;&nbsp;&nbsp;Proofs </label>
                <input type="text" id="input_page_1_contract_proof" autocomplete="off" style="width:7.8%;height:26px;float:right;right:2px;top:487px;position:absolute;
                       text-align:center;border:1px black solid;"/>











                <label id="label_page_1_design_category" for="select_page_1_design_category" style="font-size:11pt;float:right;right:865px;top:541px;position:absolute;"> Design Category: </label>              
                <div id="select_page_1_design_category" class="select" style="float:right;right:650px;top:537px; width: 20.8%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>1 Colour</option>
                        <option>1 Colour Continuous</option>
                        <option>Eyespot Trial or Dieline Drawing</option>
                        <option>Spot - Level 1</option>
                        <option>Spot - Level 2</option>
                        <option>Spot - Level 3</option>
                        <option>Process - Level 1</option>
                        <option>Process - Level 2</option>
                        <option>Process - Level 3</option>
                    </select>
                    <div class="select_common"></div>
                </div>

                <label id="label_page_1_common_element" for="select_page_1_common_element" style="font-size:11pt;float:right;right:365px;top:541px;position:absolute;"> Common Elements: </label>              
                <div id="select_page_1_common_element" class="select" style="float:right;right:150px;top:537px; width: 20.8%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>N/A</option> 
                    </select>
                    <div class="select_common"></div>
                </div>


                <label id="label_page_1_tbl_header_description" for="input_page_1_tbl_description_1" style="font-size:11pt;float:right;right:587px;top:581px;position:absolute;
                       width:40%;height:24px;border:1px black solid;text-align: center;font-weight:bold;padding-top:6px;"> Description </label>
                <input type="text" id="input_page_1_tbl_description_1" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:614px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Assessment(s)" readonly/>
                <input type="text" id="input_page_1_tbl_description_2" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:645px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Assessment Proof(s)" readonly/>
                <input type="text" id="input_page_1_tbl_description_3" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:676px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Perflight Time(PDF)" readonly/>
                <input type="text" id="input_page_1_tbl_description_4" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:707px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" value=" Additional Perflight Time" readonly/>
                <input type="text" id="input_page_1_tbl_description_5" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:738px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Content Proof(s)" readonly/>
                <input type="text" id="input_page_1_tbl_description_6" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:769px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Colour Correction Time" readonly/>
                <input type="text" id="input_page_1_tbl_description_7" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:800px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" value=" Additional CC Time" readonly/>
                <input type="text" id="input_page_1_tbl_description_8" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:831px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Contract Proof(s)" readonly/>
                <input type="text" id="input_page_1_tbl_description_9" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:862px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Trap Time" readonly/>
                <input type="text" id="input_page_1_tbl_description_10" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:893px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Keys(Mylar/Paper)" readonly/>
                <input type="text" id="input_page_1_tbl_description_11" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:924px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Step and Repeat Time" readonly/>
                <input type="text" id="input_page_1_tbl_description_12" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:955px;position:absolute;
                       text-align:left;border:1px black solid;" value=" Plates(sq inches)" readonly/>
                <input type="text" id="input_page_1_tbl_description_13" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:986px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" readonly/>
                <input type="text" id="input_page_1_tbl_description_14" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:1017px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" readonly/>
                <input type="text" id="input_page_1_tbl_description_15" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:1048px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" readonly/>
                <input type="text" id="input_page_1_tbl_description_16" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:1079px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" readonly/> 
                <input type="text" id="input_page_1_tbl_description_17" autocomplete="off" style="width:40%;height:26px;float:right;right:587px;top:1110px;position:absolute;
                       text-align:left;border:1px black solid;color:red;" readonly/> 

                <label id="label_page_1_tbl_header_unit" for="input_page_1_tbl_unit_1" style="font-size:11pt;float:right;right:495px;top:581px;position:absolute;
                       width:9%;height:24px;border:1px black solid;text-align: center;font-weight:bold;padding-top:6px;"> Units </label>
                <input type="text" id="input_page_1_tbl_unit_1" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:614px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_2" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:645px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_3" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:676px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_4" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:707px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_5" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:738px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_6" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:769px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_7" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:800px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_8" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:831px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_9" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:862px;position:absolute;
                       text-align:center;border:1px black solid;" value="FALSE"/>
                <input type="text" id="input_page_1_tbl_unit_10" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:893px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_11" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:924px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_12" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:955px;position:absolute;
                       text-align:center;border:1px black solid;" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_13" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:986px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_14" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:1017px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_15" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:1048px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_16" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:1079px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_17" autocomplete="off" style="width:9%;height:26px;float:right;right:495px;top:1110px;position:absolute;
                       text-align:center;border:1px black solid;"/>


                <label id="label_page_1_tbl_header_unit_sec" for="input_page_1_tbl_unit_sec_1" style="font-size:11pt;float:right;right:402px;top:581px;position:absolute;
                       width:9.1%;height:24px;border:1px black solid;text-align: center;font-weight:bold;padding-top:6px;"> Units </label>                
                <input type="text" id="input_page_1_tbl_unit_sec_1" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:614px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_2" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:645px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_3" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:676px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_4" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:707px;position:absolute;
                       text-align:center;border:1px black solid;color:red" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_sec_5" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:738px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_6" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:769px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_7" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:800px;position:absolute;
                       text-align:center;border:1px black solid;color:red" value="0"/>
                <input type="text" id="input_page_1_tbl_unit_sec_8" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:831px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_9" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:862px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_10" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:893px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_11" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:924px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_12" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:955px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_13" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:986px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_14" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:1017px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_15" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:1048px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_16" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:1079px;position:absolute;
                       text-align:center;border:1px black solid;"/>
                <input type="text" id="input_page_1_tbl_unit_sec_17" autocomplete="off" style="width:9.1%;height:26px;float:right;right:402px;top:1110px;position:absolute;
                       text-align:center;border:1px black solid;"/>


                <label id="label_page_1_tbl_header_cost" for="input_page_1_tbl_cost_1" style="font-size:11pt;float:right;right:202px;top:581px;position:absolute;
                       width:20%;height:24px;border:1px black solid;text-align: center;font-weight:bold;padding-top:6px;"> Cost Per Unit </label>
                <input type="text" id="input_page_1_tbl_cost_1" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:614px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_2" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:645px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_3" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:676px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_4" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:707px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_5" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:738px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_6" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:769px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_7" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:800px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_8" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:831px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_9" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:862px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_10" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:893px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_11" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:924px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_12" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:955px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_13" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:986px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_14" class="money" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:1017px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_15" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:1048px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_16" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:1079px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_cost_17" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:202px;top:1110px;position:absolute;
                       text-align:center;border:1px black solid;"/> 


                <label id="label_page_1_tbl_header_amount" for="input_page_1_tbl_amount_1" style="font-size:11pt;float:right;right:2px;top:581px;position:absolute;
                       width:20%;height:24px;border:1px black solid;text-align: center;font-weight:bold;padding-top:6px;"> Amount </label>
                <input type="text" id="input_page_1_tbl_amount_1" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:614px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_2" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:645px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_3" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:676px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_4" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:707px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_5" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:738px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_6" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:769px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_7" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:800px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_8" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:831px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_9" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:862px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_10" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:893px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_11" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:924px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_12" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:955px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_13" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:986px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_14" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1017px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_15" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1048px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_16" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1079px;position:absolute;
                       text-align:center;border:1px black solid;"/> 
                <input type="text" id="input_page_1_tbl_amount_17" class="money" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1110px;position:absolute;
                       text-align:center;border:1px black solid;"/> 

                <label id="label_page_1_tbl_total" for="input_page_1_tbl_total" style="font-size:11pt;float:right;right:212px;top:1147px;position:absolute;"> Total: </label>
                <input type="text" id="input_page_1_tbl_total" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1141px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_1_tbl_per_plate" for="input_page_1_tbl_per_plate" style="font-size:11pt;float:right;right:212px;top:1177px;position:absolute;"> Per Plate: </label>
                <input type="text" id="input_page_1_tbl_per_plate" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1172px;position:absolute;
                       text-align:left;border:1px black solid;"/>                      

                <label id="label_page_1_invoice_type" for="select_page_1_invoice_type" style="font-size:11pt;float:right;right:892px;top:1177px;position:absolute;"> Invoice Type: </label>              
                <div id="select_page_1_invoice_type" class="select" style="float:right;right:680px;top:1172px; width: 20.2%;position:absolute;">
                    <select style="color:black;font-weight:200;height:30px;">
                        <option value="" selected></option>
                        <option>Close & Invoice Cost to Date</option>
                        <option>Close & Invoice (Quoted)</option>                    
                    </select>
                    <div class="select_common"></div>
                </div>

                <label id="label_page_1_tbl_internal" for="input_page_1_tbl_internal" style="font-size:11pt;float:right;right:562px;top:1147px;position:absolute;"> Internal: </label>
                <input type="text" id="input_page_1_tbl_internal" autocomplete="off" style="width:15%;height:26px;float:right;right:402px;top:1141px;position:absolute;
                       text-align:left;border:1px black solid;"/> 
                <label id="label_page_1_tbl_external" for="input_page_1_tbl_external" style="font-size:11pt;float:right;right:562px;top:1177px;position:absolute;"> External: </label>
                <input type="text" id="input_page_1_tbl_external" autocomplete="off" style="width:15%;height:26px;float:right;right:402px;top:1172px;position:absolute;
                       text-align:left;border:1px black solid;"/> 

                <%--
                <label id="label_page_1_tbl_before_markup" for="input_page_1_tbl_before_markup" style="font-size:11pt;float:right;right:212px;top:1177px;position:absolute;"> Total Before Markup: </label>
                <input type="text" id="input_page_1_tbl_before_markup" autocomplete="off" style="width:20%;height:26px;float:right;right:2px;top:1172px;position:absolute;
                       text-align:left;border:1px black solid;"/> 
                --%>


                <input id="checkbox_page_1_disclaimer" type="checkbox">                               
                <label id="label_page_1_disclaimer" class="checkbox" for="checkbox_page_1_disclaimer" style="font-size:11pt;position:absolute;float:right;right:670px;top:1147px;"> Add Disclaimer </label>
                <%--
               <textarea id="textarea_page_1_disclaimer" autocomplete="off" style="
                         position: absolute;
                         border: solid 1px black; 
                         width: 67.3%;  
                         height: 60px;
                         float:right;
                         right:320px;
                         top:1140px;
                         resize: none;
                         font-size: 16pt;
                         text-align: center;
                         box-sizing: border-box;
                         ">
               </textarea>
                --%>

                <label id="label_page_1_comment" for="textarea_page_1_comment" style="font-size:11pt;float:right;right:914px;top:1200px;position:absolute;"> Comments: </label>
                <textarea id="textarea_page_1_comment" autocomplete="off" style="
                          position: absolute;
                          border: solid 1px black; 
                          width: 99.6%;  
                          height: 70px;
                          float:right;
                          right:2px;
                          top:1218px;
                          resize: none;
                          font-size: 11pt;
                          text-align: left;
                          box-sizing: border-box;
                          "></textarea>



                <p style="position:absolute;font-size:11pt;font-weight:bold;width: 90%;
                   top:1285px;float:right;right:10px;display:block;color:rgba(0,0,0,1.0);">Price is subject to change if further revisions to the original instructions are required. 
                    This quote is valid for 30 days.</p>

            </div>
        </div>


        <div id="section-to-print_2" class="page" style="margin-top: 1%;border:0px red solid;">

            <div id="div_logo_2" class="no-print" style="border-bottom: 1px #00A250 solid;
                 width: 100%;
                 height:60px;
                 position: absolute;
                 left: 0%;
                 top:1%;">

                <img src="pic/logo3.jpg" alt="HTML5 Icon" 
                     style="display: block;position:absolute;
                     top:22%;left:0.6%;
                     opacity: 0.6;
                     display:block;                     
                     ">

                <input type="text" class="input_filename" autocomplete="off" readonly style="width:20%;height:26px;float:right;right:2px;top:8%;position:absolute;
                       text-align:right;border:0px #cccccc solid;color:#999999;font-size:16pt;"/>


                <p style="position:absolute;font-size:16pt;font-weight:bold;
                   top:16%;float:right;right:20px;display:block;color:rgba(159,204,190,1.0);">COMS</p>

            </div>

            <div id="div_footer_2" class="no-print" style="border-top: 2px #cccccc solid;width: 100%;height:60px;position: absolute;left: 0%;top:96%;display:none;">
                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:46%;display:block;color: #999999;">Page 1 of 2</p>

            </div>

            <div id="flex_2" style="border:0px red solid;position: absolute;top:6%;left:0%;width:100%;height:90%;display:block;">
                <div id="box" style="position: absolute;left:0px;top:0px;background-color:black; width:300px;height:60px; 
                     border: 1px #999999 solid;vertical-align: middle;text-align: center;">
                    <p align="center" style="font-size:14pt;color:white;left:20%;font-weight:bolder;">GRAPHICS QUOTE</p>
                </div>
                <%--
                <div id="box" style="position: absolute;left:320px;top:8px;background-color:transparent; width:180px;height:40px; 
                     border: 2px red solid;vertical-align: middle;text-align: center;line-height: 1px;">
                    <p align="center" style="font-size:14pt;font-size:14pt;color:red;left:16%;font-weight:bolder">CONTROLLED</p>
                </div>
                --%>

                <label id="label_page_2_quote_date" for="input_page_2_quote_date" style="font-size:11pt;float:right;right:810px;top:138px;position:absolute;"> Quote Date: </label>
                <input type="text" id="input_page_2_quote_date" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:134px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_coordinator" for="input_page_2_coordinator" style="font-size:11pt;float:right;right:810px;top:188px;position:absolute;"> Coordinator: </label>
                <input type="text" id="input_page_2_coordinator" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:184px;position:absolute;
                       text-align:left;border:1px black solid;"/>                
                <label id="label_page_2_sale_rep" for="input_page_2_sale_rep" style="font-size:11pt;float:right;right:810px;top:238px;position:absolute;"> Sale Rep. #: </label>
                <input type="text" id="input_page_2_sale_rep" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:234px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_customer" for="input_page_2_customer" style="font-size:11pt;float:right;right:810px;top:288px;position:absolute;"> Customer: </label>
                <input type="text" id="input_page_2_customer" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:284px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_design_description" for="input_page_2_design_description" style="font-size:11pt;float:right;right:810px;top:338px;position:absolute;"> Design Description: </label>
                <input type="text" id="input_page_2_design_description" autocomplete="off" style="width:50%;height:26px;float:right;right:305px;top:334px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_2_description" for="input_page_2_description" style="font-weight:bold;font-size:12pt;float:right;right:810px;top:438px;position:absolute;color:#cccccc;display:block;"> Description </label>
                <label id="label_page_2_amount" for="input_page_2_amount" style="font-weight:bold;font-size:12pt;float:right;right:600px;top:438px;position:absolute;color:#cccccc;display:block;"> Amount </label>

                <label id="label_page_2_mac_time" for="input_page_2_mac_time" style="font-size:11pt;float:right;right:810px;top:488px;position:absolute;"> Mac Time: </label>
                <input type="text" id="input_page_2_mac_time" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:484px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_percent_proof" for="input_page_2_percent_proof" style="font-size:11pt;float:right;right:810px;top:538px;position:absolute;"> 100% Proof(s): </label>
                <input type="text" id="input_page_2_percent_proof" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:534px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_contract_proof" for="input_page_2_contract_proof" style="font-size:11pt;float:right;right:810px;top:588px;position:absolute;"> Contract Proof(s): </label>
                <input type="text" id="input_page_2_contract_proof" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:584px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_key_overlays" for="input_page_2_key_overlays" style="font-size:11pt;float:right;right:810px;top:638px;position:absolute;"> Key Overlays: </label>
                <input type="text" id="input_page_2_key_overlays" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:634px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_2_plates" for="input_page_2_plates" style="font-size:11pt;float:right;right:810px;top:688px;position:absolute;"> Plates: </label>
                <input type="text" id="input_page_2_plates" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:684px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_2_total" for="input_page_2_total" style="font-size:11pt;float:right;right:300px;top:488px;position:absolute;color: #00A250;"> Total: </label>
                <input type="text" id="input_page_2_total" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:484px;position:absolute;
                       text-align:left;border:1px #00A250 solid;"/>
                <label id="label_page_2_per_plate" for="input_page_2_per_plate" style="font-size:11pt;float:right;right:300px;top:548px;position:absolute;color: #00A250;"> Per Plate: </label>
                <input type="text" id="input_page_2_per_plate" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:544px;position:absolute;
                       text-align:left;border:1px #00A250 solid;"/>


                <label id="label_page_2_change_overs" for="input_page_2_change_overs" style="font-size:11pt;float:right;right:300px;top:608px;position:absolute;"> Total # of Change-overs: </label>
                <input type="text" id="input_page_2_change_overs" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:604px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_2_comment" for="textarea_page_2_comment" style="font-size:11pt;float:right;right:810px;top:838px;position:absolute;display:none;"> Comments: </label>
                <textarea id="textarea_page_2_comment" autocomplete="off" style="
                          position: absolute;
                          border: solid 1px black; 
                          width: 60%;  
                          height: 150px;
                          float:right;
                          right:205px;
                          top:838px;
                          resize: none;
                          font-size: 16pt;
                          text-align: left;
                          box-sizing: border-box;
                          display:none;
                          ">
                </textarea>




                <p style="position:absolute;font-size:11pt;font-weight:bold;width: 90%;
                   top:1285px;float:right;right:10px;display:block;color:rgba(0,0,0,1.0);">Price is subject to change if further revisions to the original instructions are required. 
                    This quote is valid for 30 days.</p>
            </div>

        </div>

        <div id="section-to-print_3" class="page" style="margin-top: 1%;border:0px black solid;">
            <div id="div_logo_3" class="no-print" style="border-bottom: 1px #00A250 solid;
                 width: 100%;
                 height:60px;
                 position: absolute;
                 left: 0%;
                 top:1%;">
                <img src="pic/logo3.jpg" alt="HTML5 Icon" 
                     style="display: block;position:absolute;
                     top:22%;left:0.6%;
                     opacity: 0.6;
                     display:block;                     
                     ">
                <p style="position:absolute;font-size:16pt;font-weight:bold;
                   top:16%;float:right;right:20px;display:block;color:rgba(159,204,190,1.0);">COMS</p>
            </div>
            <div id="div_footer_3" class="no-print" style="border-top: 2px #cccccc solid;width: 100%;height:60px;position: absolute;left: 0%;top:96%;display:none;">
                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:46%;display:block;color: #999999;">Page 1 of 2</p>
            </div>
            <div id="flex_3" style="border:0px red solid;position: absolute;top:6%;left:0%;width:100%;height: 90%;">
                <div id="box" style="position: absolute;left:0px;top:0px;background-color:black; width:300px;height:60px; 
                     border: 1px #999999 solid;vertical-align: middle;text-align: center;">
                    <p align="center" style="font-size:14pt;color:white;left:20%;font-weight:bolder;">GRAPHICS INVOICE</p>
                </div>
                
                <%--
                <div id="box" style="position: absolute;left:320px;top:8px;background-color:transparent; width:180px;height:40px; 
                     border: 2px red solid;vertical-align: middle;text-align: center;line-height: 1px;">
                    <p align="center" style="font-size:14pt;font-size:14pt;color:red;left:16%;font-weight:bolder">CONTROLLED</p>
                </div>
                --%>


                <label id="label_page_3_gr_inv" for="input_page_3_gr_inv" style="font-size:11pt;float:right;right:110px;top:30px;position:absolute;"> GR INV#: </label>
                <input type="text" id="input_page_3_gr_inv" autocomplete="off" style="width:10%;height:26px;float:right;right:2px;top:26px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_po" for="input_page_3_po" style="font-size:11pt;float:right;right:406px;top:30px;position:absolute;"> PO#: </label>
                <input type="text" id="input_page_3_po" autocomplete="off" style="width:20%;height:26px;float:right;right:190px;top:26px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_so" for="input_page_3_so" style="font-size:11pt;float:right;right:406px;top:64px;position:absolute;"> SO#: </label>
                <input type="text" id="input_page_3_so" autocomplete="off" style="width:20%;height:26px;float:right;right:190px;top:60px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_3_invoiced_date" for="input_page_3_invoiced_date" style="font-size:11pt;float:right;right:810px;top:138px;position:absolute;"> Invoice Closed Date: </label>
                <input type="text" id="input_page_3_invoiced_date" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:134px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_3_coordinator" for="input_page_3_coordinator" style="font-size:11pt;float:right;right:810px;top:188px;position:absolute;"> Coordinator: </label>
                <input type="text" id="input_page_3_coordinator" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:184px;position:absolute;
                       text-align:left;border:1px black solid;"/>                
                <label id="label_page_3_sale_rep" for="input_page_3_sale_rep" style="font-size:11pt;float:right;right:810px;top:238px;position:absolute;"> Sale Rep. #: </label>
                <input type="text" id="input_page_3_sale_rep" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:234px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_customer" for="input_page_3_customer" style="font-size:11pt;float:right;right:810px;top:288px;position:absolute;"> Customer: </label>
                <input type="text" id="input_page_3_customer" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:284px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_design_description" for="input_page_3_design_description" style="font-size:11pt;float:right;right:810px;top:338px;position:absolute;"> Design Description: </label>
                <input type="text" id="input_page_3_design_description" autocomplete="off" style="width:50%;height:26px;float:right;right:305px;top:334px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_3_description" for="input_page_3_description" style="font-weight:bold;font-size:12pt;float:right;right:810px;top:438px;position:absolute;color:#cccccc;display:block;"> Description </label>
                <label id="label_page_3_amount" for="input_page_3_amount" style="font-weight:bold;font-size:12pt;float:right;right:600px;top:438px;position:absolute;color:#cccccc;display:block;"> Amount </label>

                <label id="label_page_3_mac_time" for="input_page_3_mac_time" style="font-size:11pt;float:right;right:810px;top:488px;position:absolute;"> Mac Time: </label>
                <input type="text" id="input_page_3_mac_time" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:484px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_percent_proof" for="input_page_3_percent_proof" style="font-size:11pt;float:right;right:810px;top:538px;position:absolute;"> 100% Proof(s): </label>
                <input type="text" id="input_page_3_percent_proof" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:534px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_contract_proof" for="input_page_3_contract_proof" style="font-size:11pt;float:right;right:810px;top:588px;position:absolute;"> Contract Proof(s): </label>
                <input type="text" id="input_page_3_contract_proof" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:584px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_key_overlays" for="input_page_3_key_overlays" style="font-size:11pt;float:right;right:810px;top:638px;position:absolute;"> Key Overlays: </label>
                <input type="text" id="input_page_3_key_overlays" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:634px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_3_plates" for="input_page_3_plates" style="font-size:11pt;float:right;right:810px;top:688px;position:absolute;"> Plates: </label>
                <input type="text" id="input_page_3_plates" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:684px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_3_total" for="input_page_3_total" style="font-size:11pt;float:right;right:300px;top:488px;position:absolute;color: #00A250;"> Total Before Markup: </label>
                <input type="text" id="input_page_3_total" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:484px;position:absolute;
                       text-align:left;border:1px #00A250 solid;"/>
                <label id="label_page_3_per_plate" for="input_page_3_per_plate" style="font-size:11pt;float:right;right:300px;top:548px;position:absolute;color: #00A250;"> Per Plate: </label>
                <input type="text" id="input_page_3_per_plate" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:544px;position:absolute;
                       text-align:left;border:1px #00A250 solid;"/>


                <label id="label_page_3_change_overs" for="input_page_3_change_overs" style="font-size:11pt;float:right;right:300px;top:608px;position:absolute;"> Total # of Change-overs: </label>
                <input type="text" id="input_page_3_change_overs" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:604px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_3_comment" for="textarea_page_3_comment" style="font-size:11pt;float:right;right:810px;top:838px;position:absolute;"> Comments: </label>
                <textarea id="textarea_page_3_comment" autocomplete="off" style="
                          position: absolute;
                          border: solid 1px black; 
                          width: 60%;  
                          height: 150px;
                          float:right;
                          right:205px;
                          top:838px;
                          resize: none;
                          font-size: 16pt;
                          text-align: left;
                          box-sizing: border-box;
                          ">
                </textarea>

                <p style="position:absolute;font-size:11pt;font-weight:bold;width: 90%;
                   top:1285px;float:right;right:10px;display:block;color:rgba(0,0,0,1.0);">Price is subject to change if further revisions to the original instructions are required. 
                    This quote is valid for 30 days.</p>
            </div>
        </div>


        <div id="section-to-print_4" class="page" style="margin-top: 1%;border:0px black solid;">
            <div id="div_logo_1" class="no-print" style="border-bottom: 1px #00A250 solid;
                 width: 100%;
                 height:60px;
                 position: absolute;
                 left: 0%;
                 top:1%;">
                <img src="pic/logo3.jpg" alt="HTML5 Icon" 
                     style="display: block;position:absolute;
                     top:22%;left:0.6%;
                     opacity: 0.6;
                     display:block;                     
                     ">
                <p style="position:absolute;font-size:16pt;font-weight:bold;
                   top:16%;float:right;right:20px;display:block;color:rgba(159,204,190,1.0);">COMS</p>
            </div>
            <div id="div_footer_1" class="no-print" style="border-top: 2px #cccccc solid;width: 100%;height:60px;position: absolute;left: 0%;top:96%;display:none;">
                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:46%;display:block;color: #999999;">Page 1 of 2</p>
            </div>
            <div id="flex_4" style="border:0px red solid;position: absolute;top:6%;left:0%;width:100%;height: 90%;">
                <div id="box" style="position: absolute;left:0px;top:0px;background-color:black; width:300px;height:60px; 
                     border: 1px #999999 solid;vertical-align: middle;text-align: center;">
                    <p align="center" style="font-size:14pt;color:white;left:20%;font-weight:bolder;">GRAPHICS INVOICE TO DATE</p>
                </div>
                
                <%--
                <div id="box" style="position: absolute;left:320px;top:8px;background-color:transparent; width:180px;height:40px; 
                     border: 2px red solid;vertical-align: middle;text-align: center;line-height: 1px;">
                    <p align="center" style="font-size:14pt;font-size:14pt;color:red;left:16%;font-weight:bolder">CONTROLLED</p>
                </div>
                --%>


                <label id="label_page_4_gr_inv" for="input_page_4_gr_inv" style="font-size:11pt;float:right;right:110px;top:30px;position:absolute;"> GR INV#: </label>
                <input type="text" id="input_page_4_gr_inv" autocomplete="off" style="width:10%;height:26px;float:right;right:2px;top:26px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_po" for="input_page_4_po" style="font-size:11pt;float:right;right:406px;top:30px;position:absolute;"> PO#: </label>
                <input type="text" id="input_page_4_po" autocomplete="off" style="width:20%;height:26px;float:right;right:190px;top:26px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_so" for="input_page_4_so" style="font-size:11pt;float:right;right:406px;top:64px;position:absolute;"> SO#: </label>
                <input type="text" id="input_page_4_so" autocomplete="off" style="width:20%;height:26px;float:right;right:190px;top:60px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_4_invoiced_date" for="input_page_4_invoiced_date" style="font-size:11pt;float:right;right:810px;top:138px;position:absolute;"> Invoice Closed Date: </label>
                <input type="text" id="input_page_4_invoiced_date" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:134px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_4_coordinator" for="input_page_4_coordinator" style="font-size:11pt;float:right;right:810px;top:188px;position:absolute;"> Coordinator: </label>
                <input type="text" id="input_page_4_coordinator" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:184px;position:absolute;
                       text-align:left;border:1px black solid;"/>                
                <label id="label_page_4_sale_rep" for="input_page_4_sale_rep" style="font-size:11pt;float:right;right:810px;top:238px;position:absolute;"> Sale Rep. #: </label>
                <input type="text" id="input_page_4_sale_rep" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:234px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_customer" for="input_page_4_customer" style="font-size:11pt;float:right;right:810px;top:288px;position:absolute;"> Customer: </label>
                <input type="text" id="input_page_4_customer" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:284px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_design_description" for="input_page_4_design_description" style="font-size:11pt;float:right;right:810px;top:338px;position:absolute;"> Design Description: </label>
                <input type="text" id="input_page_4_design_description" autocomplete="off" style="width:50%;height:26px;float:right;right:305px;top:334px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_4_description" for="input_page_4_description" style="font-weight:bold;font-size:12pt;float:right;right:810px;top:438px;position:absolute;color:#cccccc;display:block;"> Description </label>
                <label id="label_page_4_amount" for="input_page_4_amount" style="font-weight:bold;font-size:12pt;float:right;right:600px;top:438px;position:absolute;color:#cccccc;display:block;"> Amount </label>

                <label id="label_page_4_mac_time" for="input_page_4_mac_time" style="font-size:11pt;float:right;right:810px;top:488px;position:absolute;"> Mac Time: </label>
                <input type="text" id="input_page_4_mac_time" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:484px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_percent_proof" for="input_page_4_percent_proof" style="font-size:11pt;float:right;right:810px;top:538px;position:absolute;"> 100% Proof(s): </label>
                <input type="text" id="input_page_4_percent_proof" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:534px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_contract_proof" for="input_page_4_contract_proof" style="font-size:11pt;float:right;right:810px;top:588px;position:absolute;"> Contract Proof(s): </label>
                <input type="text" id="input_page_4_contract_proof" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:584px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_key_overlays" for="input_page_4_key_overlays" style="font-size:11pt;float:right;right:810px;top:638px;position:absolute;"> Key Overlays: </label>
                <input type="text" id="input_page_4_key_overlays" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:634px;position:absolute;
                       text-align:left;border:1px black solid;"/>
                <label id="label_page_4_plates" for="input_page_4_plates" style="font-size:11pt;float:right;right:810px;top:688px;position:absolute;"> Plates: </label>
                <input type="text" id="input_page_4_plates" autocomplete="off" style="width:20%;height:26px;float:right;right:600px;top:684px;position:absolute;
                       text-align:left;border:1px black solid;"/>

                <label id="label_page_4_total" for="input_page_4_total" style="font-size:11pt;float:right;right:300px;top:488px;position:absolute;color: #00A250;"> Total Before Markup: </label>
                <input type="text" id="input_page_4_total" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:484px;position:absolute;
                       text-align:left;border:1px #00A250 solid;"/>
                <label id="label_page_4_per_plate" for="input_page_4_per_plate" style="font-size:11pt;float:right;right:300px;top:548px;position:absolute;color: #00A250;"> Per Plate: </label>
                <input type="text" id="input_page_4_per_plate" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:544px;position:absolute;
                       text-align:left;border:1px #00A250 solid;"/>


                <label id="label_page_4_change_overs" for="input_page_4_change_overs" style="font-size:11pt;float:right;right:300px;top:608px;position:absolute;"> Total # of Change-overs: </label>
                <input type="text" id="input_page_4_change_overs" autocomplete="off" style="width:20%;height:26px;float:right;right:90px;top:604px;position:absolute;
                       text-align:left;border:1px black solid;"/>


                <label id="label_page_4_comment" for="textarea_page_4_comment" style="font-size:11pt;float:right;right:810px;top:838px;position:absolute;"> Comments: </label>
                <textarea id="textarea_page_4_comment" autocomplete="off" style="
                          position: absolute;
                          border: solid 1px black; 
                          width: 60%;  
                          height: 150px;
                          float:right;
                          right:205px;
                          top:838px;
                          resize: none;
                          font-size: 16pt;
                          text-align: left;
                          box-sizing: border-box;
                          ">
                </textarea>

                <p style="position:absolute;font-size:11pt;font-weight:bold;width: 90%;
                   top:1285px;float:right;right:10px;display:block;color:rgba(0,0,0,1.0);">Price is subject to change if further revisions to the original instructions are required. 
                    This quote is valid for 30 days.</p>

            </div>
        </div>

        <div id="section-to-print_5" class="page" style="margin-top: 1%;border:0px black solid;">
            <div id="div_logo_1" class="no-print" style="border-bottom: 1px #00A250 solid;
                 width: 100%;
                 height:60px;
                 position: absolute;
                 left: 0%;
                 top:1%;">
                <img src="pic/logo3.jpg" alt="HTML5 Icon" 
                     style="display: block;position:absolute;
                     top:22%;left:0.6%;
                     opacity: 0.6;
                     display:block;                     
                     ">
                <p style="position:absolute;font-size:16pt;font-weight:bold;
                   top:16%;float:right;right:20px;display:block;color:rgba(159,204,190,1.0);">COMS</p>
            </div>
            <div id="div_footer_1" class="no-print" style="border-top: 2px #cccccc solid;width: 100%;height:60px;position: absolute;left: 0%;top:96%;display:none;">
                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:46%;display:block;color: #999999;">Page 1 of 2</p>
            </div>
            <div id="flex_1" style="border:0px red solid;position: absolute;top:6%;left:0%;width:100%;height: 90%;">
            </div>
        </div>

        <div id="section-to-print_6" class="page" style="margin-top: 1%;border:0px black solid;">
            <div id="div_logo_1" class="no-print" style="border-bottom: 1px #00A250 solid;
                 width: 100%;
                 height:60px;
                 position: absolute;
                 left: 0%;
                 top:1%;">
                <img src="pic/logo3.jpg" alt="HTML5 Icon" 
                     style="display: block;position:absolute;
                     top:22%;left:0.6%;
                     opacity: 0.6;
                     display:block;                     
                     ">
                <p style="position:absolute;font-size:16pt;font-weight:bold;
                   top:16%;float:right;right:20px;display:block;color:rgba(159,204,190,1.0);">COMS</p>
            </div>
            <div id="div_footer_1" class="no-print" style="border-top: 2px #cccccc solid;width: 100%;height:60px;position: absolute;left: 0%;top:96%;display:none;">
                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:46%;display:block;color: #999999;">Page 1 of 2</p>
            </div>
            <div id="flex_1" style="border:0px red solid;position: absolute;top:6%;left:0%;width:100%;height: 90%;">
            </div>
        </div>


        <div id="control_panel_swtich_board" class="no-print" style="position:fixed; 
             top:28%; background-color:rgba(255,255,255,1);
             border: 1px solid white;
             border-radius: 5px;
             height:360px;
             left: 50%;
             transform: translate(-50%, 0);
             width: 80px;">

            <img src="pic/pensil.png" alt="HTML5 Icon" 
                 style="width:60px;
                 height:60px;display: block;position:absolute;
                 top:16px;left:8px;"
                 id="img_edit" 
                 onmouseover="bigImg(this)"
                 onmouseout="normalImg(this)">

            <div style="position:absolute; 
                 top:88px; background-color: #cccccc;
                 border: 0px solid white;         
                 height:1px;    
                 width: 100%;">
            </div>

            <img src="pic/open.png" alt="HTML5 Icon" 
                 style="width:60px;
                 height:60px;display: block;position:absolute;
                 top:106px;left:8px;"                 
                 id="img_search" 
                 onmouseover="bigImg(this)"
                 onmouseout="normalImg(this)">

            <div style="position:absolute; 
                 top:178px; background-color: #cccccc;
                 border: 0px solid white;         
                 height:1px;    
                 width: 100%;">
            </div>

            <img src="pic/save-xxl (1).png" alt="HTML5 Icon" 
                 style="width:60px;
                 height:60px;display: block;position:absolute;
                 top:196px;left:8px;"
                 id="img_save" 
                 onmouseover="bigImg(this)"
                 onmouseout="normalImg(this)">


            <div style="position:absolute; 
                 top:268px; background-color: #cccccc;
                 border: 0px solid white;         
                 height:1px;    
                 width: 100%;">
            </div>


            <img src="pic/print_printer_printing_graphic_industry-512.png" alt="HTML5 Icon" 
                 style="width:60px;
                 height:60px;display: block;position:absolute;
                 top:286px;left:8px;"
                 id="img_print" 
                 onmouseover="bigImg(this)"
                 onmouseout="normalImg(this)">




        </div>

        <div id="control_panel_popup_overlay_edit" class="no-print" style=" background-color:rgba(255,255,255,0.0);
             display:none; z-index: 2;
             border:0px #cccccc solid;
             position:fixed;
             width: 260mm;
             height: 100%;
             top: 0%;
             left: 50%;
             margin-top: 0mm; /* Negative half of height. */
             margin-left: -130mm; /* Negative half of width. */
             ">
            <div id="control_panel_popup_edit" class="no-print" style="height:200px; background-color:rgba(255,255,255,1);
                 display:none; z-index: 2;
                 border:1px #999999 solid; box-shadow: 0 0 18px rgba(0, 0, 0, 0.8);
                 position:fixed;
                 width:600px;
                 top: 28%;          
                 left:24%;
                 ">


                <img src="pic/lock-xxl (1).png" alt="HTML5 Icon" 
                     style="width:60px;
                     height:60px;display: block;position:absolute;
                     top:20%;left:10%;"
                     id="img_print" 
                     onmouseover="bigImg(this)"
                     onmouseout="normalImg(this)">

                <p style="position:absolute;font-size:12pt;top:12%;left:20%;font-family: Arial, Helvetica, sans-serif;font-weight:600;color:rgba(255,0,0,0.8);">  &nbsp;&nbsp; Document is being edited by Admin </p>
                <p style="position:absolute;font-size:12pt;top:32%;left:30%;font-family: Arial, Helvetica, sans-serif;font-weight:600;color:rgba(255,0,0,0.8);">  &nbsp;&nbsp; Please try again later </p>

            </div>

        </div>


        <div id="control_panel_popup_overlay_search" class="no-print" style=" background-color:rgba(255,255,255,0.0);
             display:none; z-index: 2;
             border:0px #cccccc solid;
             position:fixed;
             width: 260mm;
             height: 100%;
             top: 0%;
             left: 50%;
             margin-top: 0mm; /* Negative half of height. */
             margin-left: -130mm; /* Negative half of width. */
             ">
            <div id="control_panel_popup_search" class="no-print" style="height:200px; background-color:rgba(255,255,255,1);
                 display:none; z-index: 2;
                 border:1px #999999 solid; box-shadow: 0 0 18px rgba(0, 0, 0, 0.8);
                 position:fixed;
                 width:600px;
                 top: 32%;          
                 left:24%;
                 ">

                <div id="panel_sub_1" class="no-print" style="height:30%; background-color:rgba(255,255,255,0.0);    
                     display:block;
                     border:0px #999999 solid; 
                     position:absolute;
                     width:90%;
                     left:5%;
                     top:5%;
                     ">
                </div>

                <label id="label_panel_search" for="input_panel_search" style="font-size:18pt;color: rgba(0,119,90,1);
                       font-weight: bolder;float:right;right:70%;top:30%;position:absolute;"> COMS #  </label>
                <input type="text" id="input_panel_search" autocomplete="off" style="width:38%;height:30px;float:right;right:30%;top:26%;position:absolute;
                       text-align:left;border: 2px rgba(0,119,90,1) solid; font-size:18pt;" autofocus=""/>

                <input type="button" id="btn_1_panel_search" value="Open" style="float:bottom;bottom:20%;right:50%;height:30px;width:16%;"/>

                <input type="button" id="btn_2_panel_search" value="Clear" style="float:bottom;bottom:20%;right:30%;height:30px;width:16%;"/>




            </div>


        </div>

        <div id="control_panel_popup_overlay_save" class="no-print" style=" background-color:rgba(255,255,255,0.0);
             display:none; z-index: 2;
             border:0px #cccccc solid;
             position:fixed;
             width: 260mm;
             height: 100%;
             top: 0%;
             left: 50%;
             margin-top: 0mm; /* Negative half of height. */
             margin-left: -130mm; /* Negative half of width. */
             ">
            <div id="control_panel_popup_save" class="no-print" style="height:200px; background-color:rgba(255,255,255,1);
                 display:none; z-index: 2;
                 border:1px #999999 solid; box-shadow: 0 0 18px rgba(0, 0, 0, 0.8);
                 position:fixed;
                 width:600px;
                 top: 42%;          
                 left:24%;
                 ">

                <p style="position:absolute;font-size:12pt;font-weight:bold;
                   top:0%;float:right;right:38%;display:block;color:rgba(0,0,0,1.0);">Data transfer in progress...</p>

                <img src="pic/loading_category.e25b3c05.gif" alt="HTML5 Icon" 
                     style="width:200px;
                     height:200px;display: block;position:absolute;
                     top:0%;left:28%;"
                     id="img_saving" 
                     >

            </div>

        </div>

        <div id="control_panel_popup_overlay_print" class="no-print" style=" background-color:rgba(255,255,255,0.0);
             display:none; z-index: 2;
             border:0px #cccccc solid;
             position:fixed;
             width: 260mm;
             height: 100%;
             top: 0%;
             left: 50%;
             margin-top: 0mm; /* Negative half of height. */
             margin-left: -130mm; /* Negative half of width. */
             ">
            <div id="control_panel_popup_print" class="no-print" style="height:200px; background-color:rgba(255,255,255,1);
                 display:none; z-index: 2;
                 border:1px #999999 solid; box-shadow: 0 0 18px rgba(0, 0, 0, 0.8);
                 position:fixed;
                 width:600px;
                 top: 52%;          
                 left:24%;
                 ">


                <p style="position:absolute;font-size:12pt;top:0%;left:20%;font-family: Arial, Helvetica, sans-serif;font-weight:600;color:rgba(128,64,0,0.8);"> &squf; &nbsp;&nbsp; Paper size:   A4</p>
                <p style="position:absolute;font-size:12pt;top:20%;left:20%;font-family: Arial, Helvetica, sans-serif;font-weight:600;color:rgba(128,64,0,0.8);"> &squf; &nbsp;&nbsp; PDF compatible</p>
                <p style="position:absolute;font-size:12pt;top:40%;left:20%;font-family: Arial, Helvetica, sans-serif;font-weight:600;color:rgba(128,64,0,0.8);"> &squf; &nbsp;&nbsp; Zoom: 100%</p>
                <p style="position:absolute;font-size:12pt;top:60%;left:20%;font-family: Arial, Helvetica, sans-serif;font-weight:600;color:rgba(128,64,0,0.8);"> &squf; &nbsp;&nbsp; Browser: Chrome</p>

            </div>

        </div>





    </body>


</html>
