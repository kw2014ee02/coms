
$(document).ready(function () {
    $(function () {
        $("#input_page_1_date_closed").datepicker({
            dateFormat: "dd-M-yy"
        });
        $("#input_page_1_quote_date").datepicker({
            dateFormat: "dd-M-yy"
        });

    });


    $("#input_page_1_mac_time").keyup(function (e) {

        if ($(this).val().trim() === "") {
            $("#input_page_1_tbl_description_13").val("");
        } else {
            $("#input_page_1_tbl_description_13").val(" External Mac Time Charge");
        }

        /*
         switch (e.keyCode) {
         case 13:
         alert("13");
         //  alert($(this).val());
         //var dda = $(this).val();
         //$("#type_select_menu").val(document.getElementById("opt_1").text).change();
         //simulate_click_table_4($(this).val());
         break;
         case 50:                  //按键盘上面的2，非数字区域那边 
         //alert("50");
         //$("#type_select_menu").val(document.getElementById("opt_1").text).change();
         //simulate_click_table();
         break;
         default:
         }
         */
    });

    $("#input_page_1_proofs").keyup(function (e) {
        if ($(this).val().trim() === "") {
            $("#input_page_1_tbl_description_14").val("");
        } else {
            $("#input_page_1_tbl_description_14").val(" External Proof Charge");
        }
    });

    $("#input_page_1_plates").keyup(function (e) {
        if ($(this).val().trim() === "") {
            $("#input_page_1_tbl_description_15").val("");
        } else {
            $("#input_page_1_tbl_description_15").val(" External Plate Charge");
        }
    });

    $("#input_page_1_sleeves").keyup(function (e) {
        if ($(this).val().trim() === "") {
            $("#input_page_1_tbl_description_16").val("");
        } else {
            $("#input_page_1_tbl_description_16").val(" External Sleeve Charge");
        }
    });

    $("#input_page_1_dcr_label_art").keyup(function (e) {
        if ($(this).val().trim() === "") {
            $("#input_page_1_tbl_description_17").val("");
        } else {
            $("#input_page_1_tbl_description_17").val(" External DCR Charge");
        }
    });



    //checkbox

    $("#checkbox_external_charge").change(function () {
        if (this.checked) {
            /*
             $("#input_page_1_mac_time").css('background', 'rgba(244, 184, 65, 0.2)');
             $("#input_page_1_proofs").css('background', 'rgba(244, 184, 65, 0.2)');
             $("#input_page_1_plates").css('background', 'rgba(244, 184, 65, 0.2)');
             $("#input_page_1_sleeves").css('background', 'rgba(244, 184, 65, 0.2)');
             $("#input_page_1_dcr_label_art").css('background', 'rgba(244, 184, 65, 0.2)');
             */
            //$(".external").css('background', 'rgba(244, 184, 65, 0.2)');

            // $(".external").prop("disabled", false);
        } else {
            /*
             $("#input_page_1_mac_time").css('background', 'transparent');
             $("#input_page_1_proofs").css('background', 'transparent');
             $("#input_page_1_plates").css('background', 'transparent');
             $("#input_page_1_sleeves").css('background', 'transparent');
             $("#input_page_1_dcr_label_art").css('background', 'transparent');
             */
            //$(".external").css('background', 'transparent');

            // $(".external").prop("disabled", true);
        }
    });

    $("#checkbox_page_1_disclaimer").change(function () {
        if (this.checked) {
            $("#label_page_2_comment").toggle();
            $("#textarea_page_2_comment").toggle();
        } else {
            $("#label_page_2_comment").toggle();
            $("#textarea_page_2_comment").toggle();
        }
    });


    $("#control_panel_swtich_board").css("transform", "translate(-155mm, 0)");
    $('#control_panel_popup_search').draggable();
    $('#control_panel_popup_save').draggable();
    $('#control_panel_popup_edit').draggable();

    //img click

    $("#img_edit").click(function () {
        if ($("#control_panel_popup_overlay_save").is(":visible")) {
            $('#control_panel_popup_save').toggle();
            $('#control_panel_popup_overlay_save').toggle();
        }
        if ($("#control_panel_popup_overlay_search").is(":visible")) {
            $('#control_panel_popup_search').toggle();
            $("#control_panel_popup_overlay_search").toggle();
        }

        $('#control_panel_popup_edit').toggle();
        $('#control_panel_popup_overlay_edit').toggle();
    });


    $("#img_search").click(function () {
        if ($("#control_panel_popup_overlay_save").is(":visible")) {
            $('#control_panel_popup_save').toggle();
            $('#control_panel_popup_overlay_save').toggle();
        }
        if ($("#control_panel_popup_overlay_edit").is(":visible")) {
            $('#control_panel_popup_edit').toggle();
            $('#control_panel_popup_overlay_edit').toggle();
        }
        $('#control_panel_popup_search').toggle();
        $('#control_panel_popup_overlay_search').toggle();
    });

    $("#img_save").click(function () {
        if ($("#control_panel_popup_overlay_search").is(":visible")) {
            $('#control_panel_popup_search').toggle();
            $("#control_panel_popup_overlay_search").toggle();
        }
        if ($("#control_panel_popup_overlay_edit").is(":visible")) {
            $('#control_panel_popup_edit').toggle();
            $('#control_panel_popup_overlay_edit').toggle();
        }
        $('#control_panel_popup_save').toggle();
        $('#control_panel_popup_overlay_save').toggle();
    });

    $("#img_print").click(function () {
        window.print();
    });

    $("#img_print").mouseover(function () {
        $('#control_panel_popup_print').toggle();
        $('#control_panel_popup_overlay_print').toggle();
    }).mouseout(function () {
        $('#control_panel_popup_print').toggle();
        $('#control_panel_popup_overlay_print').toggle();
    });


    //button click

    $("#btn_2_panel_search").click(function () {
        if ($("#input_panel_search").val().length !== 0) {
            $("#input_panel_search").val("");
        }
    });

    $("#btn_1_panel_search").click(function () {
        $(".input_filename").val("2685-666582");

    });


});

//auto complete
$(document).ready(function () {
    var availableTags = [
        "Winpak 1",
        "Winpak 2",
        "Winpak 3"
    ];
    $("#input_page_1_structure").autocomplete({
        source: availableTags
    });


    /*
     $("#input_page_1_structure").keypress(function (e) {
     if (e.which === 13 && $(this).val().length === 0) {
     $(this).val("TBA");
     }
     });
     */

    $("#input_page_1_structure").focusout(function () {
        if ($(this).val().length === 0) {
            $(this).val("TBA");
        }
    });
});

$(document).ready(function () {

    $(".page label,img,p").disableSelection();
    $(".page label").css({"font-weight": "bold", "font-size": "9pt"});
    $(".page input,select").css("font-size", "12pt");

    /* 
     * this is to focus next input and select when type an enter 
     */
    // register jQuery extension
    jQuery.extend(jQuery.expr[':'], {
        focusable_register: function (el, index, selector) {
            //return $(el).is('a, button, :input, [tabindex]');
            return $(el).is('.page :input:not([type=checkbox]), [tabindex]');
        }
    });
    $(document).on('keypress', 'input,select', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            // Get all focusable elements on the page
            var $canfocus = $(':focusable_register');
            var index = $canfocus.index(this) + 1;
            if (index >= $canfocus.length)
                index = 0;
            $canfocus.eq(index).focus();
        }
    });

    /* 
     * end of: this is to focus next input and select when type an enter 
     */



    /* 
     * this is to focus next input and select when type an enter 
     */
    // register jQuery extension
    jQuery.extend(jQuery.expr[':'], {
        focusable_panel_search: function (el, index, selector) {
            //return $(el).is('a, button, :input, [tabindex]');
            return $(el).is('#control_panel_popup_search :input, [tabindex]');
        }
    });
    $(document).on('keypress', 'input', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            // Get all focusable elements on the page
            var $canfocus = $(':focusable_panel_search');
            var index = $canfocus.index(this) + 1;
            if (index >= $canfocus.length)
                index = 0;
            $canfocus.eq(index).focus();
        }
    });

    /* 
     * end of: this is to focus next input and select when type an enter 
     */
});


$(document).ready(function () {

    /*
     Number: Currency amount (cents mandatory) Optional thousands separators; mandatory two-digit fraction
     
     Match; JGsoft:
     ^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$
     Number: Currency amount (cents optional) Optional thousands separators; optional two-digit fraction
     
     Match; JGsoft:
     ^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$
     Number: Currency amount US & EU (cents optional) Can use US-style 123,456.78 notation and European-style 123.456,78 notation. Optional thousands separators; optional two-digit fraction
     
     Match; JGsoft:
     ^[+-]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{2})?|(?:,[0-9]{3})*(?:\.[0-9]{2})?|(?:\.[0-9]{3})*(?:,[0-9]{2})?)$
     * 
     */

    $(".money").on('input', function (event) {
        event.preventDefault();
        this.value = this.value.replace(/[^0-9.]/g, '');
    });

    $(".money").change(function () {

        var num = new Number($(this).val());
        num = num.toFixed(2);
        //alert(num);
        $(this).val(num);
        if ($(this).val().indexOf("$") !== 0) {
            $(this).val(" $ " + $(this).val());
        }
        return;

        /*
         //var patt = new RegExp(/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/g);
         //var patt = new RegExp(/^\d+\.\d\d$/g);
         var patt = new RegExp(/^\d+$/g);
         var res = patt.test($(this).val());
         if (res) {
         if ($(this).val().length !== 0) {
         if ($(this).val().indexOf(".") !== 0) {
         //alert($(this).val().indexOf("."));
         $(this).val($(this).val() + ".00");
         }
         if ($(this).val().indexOf("$") !== 0) {
         $(this).val(" $ " + $(this).val());
         }
         }
         
         } else {
         $(this).css("border-color", "red");
         //alert($("#input_page_1_dcr_label_art").css('color'));
         }
         */
    });

    /*
     $(".external").focus(function () {
     if ($(this).css('border-color') === 'rgb(255, 0, 0)') {
     $(this).css("border-color", "black");
     }
     });
     */
});


$(document).ready(function () {

    function Function_perflight() {

        var base = 0;
           
        if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
                ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
                        || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
                $('#select_page_1_design_category').find(":selected").text() === '1 Colour') {
            switch (parseFloat($('#input_page_1_number_item').val())) {
                case 0:
                    base = 0;
                    break;
                case 1:
                    if ($('#select_page_1_common_element').find(":selected").text() === 'N/A') {
                        base = 0.75;
                    }
                    break;
                default:
                    if ($('#select_page_1_common_element').find(":selected").text() === 'Yes') {
                        base = 0.75 + (0.25 * (parseFloat($('#input_page_1_number_item').val()) - 1));
                    }
                    if ($('#select_page_1_common_element').find(":selected").text() === 'No') {
                        base = 0.75 + (0.25 * (parseFloat($('#input_page_1_number_item').val()) - 1));
                    }
            }

        }

        if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
                ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
                        || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
                $('#select_page_1_design_category').find(":selected").text() === '1 Colour Continuous') {
            switch (parseFloat($('#input_page_1_number_item').val())) {
                case 0:
                    base = 0;
                    break;
                case 1:
                    if ($('#select_page_1_common_element').find(":selected").text() === 'N/A') {
                        base = 1.5;
                    }
                    break;
                default:
                    if ($('#select_page_1_common_element').find(":selected").text() === 'Yes') {
                        base = 1.5 + (1 * (parseFloat($('#input_page_1_number_item').val()) - 1));
                    }
                    if ($('#select_page_1_common_element').find(":selected").text() === 'No') {
                        base = 1.5 + (1 * (parseFloat($('#input_page_1_number_item').val()) - 1));
                    }
            }

        }

        if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
                ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
                        || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
                $('#select_page_1_design_category').find(":selected").text() === 'Spot - Level 1') {
            //alert(parseFloat($('#input_page_1_number_item').val()));
            //alert(isNaN($('#input_page_1_number_item').val()) || parseFloat($('#input_page_1_number_item').val()));
            switch (parseFloat($('#input_page_1_number_item').val())) {
                case 0:
                    base = 0;
                    break;
                case 1:
                    if ($('#select_page_1_common_element').find(":selected").text() === 'N/A') {
                        base = 1;
                    }
                    break;
                default:
                    if ($('#select_page_1_common_element').find(":selected").text() === 'Yes') {
                        base = 1 + (0.25 * (parseFloat($('#input_page_1_number_item').val()) - 1));
                    }
                    if ($('#select_page_1_common_element').find(":selected").text() === 'No') {
                        base = 1 + (0.5 * (parseFloat($('#input_page_1_number_item').val()) - 1));
                    }
            }

        }

        /*
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === '1 Colour' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         //alert("gg");
         base = 0.75;
         //$("#input_page_1_tbl_unit_3").val(0.75);
         } else {
         //alert("no");
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === '1 Colour Continuous' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 1.5;
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === 'Spot - Level 1' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 1;
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === 'Spot - Level 2' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 2;
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === 'Spot - Level 3' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 3;
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === 'Process - Level 1' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 1.5;
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === 'Process - Level 2' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 2.75;
         }
         
         if ($('#select_page_1_type').find(":selected").text() === 'Regular Quote' &&
         ($('#select_page_1_art_opt').find(":selected").text() === 'All new art'
         || $('#select_page_1_art_opt').find(":selected").text() === 'RWC with all new art') &&
         $('#select_page_1_design_category').find(":selected").text() === 'Process - Level 3' &&
         $('#select_page_1_common_element').find(":selected").text() === 'N/A' &&
         parseFloat($('#input_page_1_number_item').val()) === 1) {
         base = 4;
         }
         */

        $("#input_page_1_tbl_unit_3").val(base);
    }

    $("#flex_1 .select[id=select_page_1_type],[id=select_page_1_art_opt],[id=select_page_1_design_category],[id=select_page_1_common_element]").change(function () {
        /*
         if ($(this).find(":selected").index() === 0) {
         $("#input_page_1_tbl_unit_3").val(0);
         return;
         }
         if ($("#select_page_1_type").find(":selected").index() === 0) {
         $("#input_page_1_tbl_unit_3").val(0);
         return;
         }
         if ($("#select_page_1_art_opt").find(":selected").index() === 0) {
         $("#input_page_1_tbl_unit_3").val(0);
         return;
         }
         if ($("#select_page_1_design_category").find(":selected").index() === 0) {
         $("#input_page_1_tbl_unit_3").val(0);
         return;
         }
         if ($("#select_page_1_common_element").find(":selected").index() === 0) {
         $("#input_page_1_tbl_unit_3").val(0);
         return;
         }
         */

        Function_perflight();
    });

    $("#flex_1 input[id=input_page_1_number_item],[id=input_page_1_assmts],[id=input_page_1_number_plate],[id=input_page_1_web_width]\n\
        ,[id=input_page_1_web_ac],[id=input_page_1_number_repeat],[id=input_page_1_cyl_size],[id=input_page_1_stagger_size]\n\
        ,[id=input_page_1_content_proof],[id=input_page_1_key][id=input_page_1_item_cc],[id=input_page_1_contract_proof]\n\
        ").on('input', function (event) {
        event.preventDefault();
        this.value = this.value.replace(/[^0-9.]/g, '');


        if ($(this).val() !== "") {
            Function_perflight();
        }else{
            $("#input_page_1_tbl_unit_3").val(0);
        }
        
    });

});


