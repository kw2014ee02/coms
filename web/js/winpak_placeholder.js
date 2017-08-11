$(document).ready(function () {
    $('#Customer_name').addClass('placeholder_class');
    $('#Product_description').addClass('placeholder_class');
   // $('#new_order_number').addClass('placeholder_class');


    var ph_Customer_name = 'Customer name';
    //var ph_New_order_number = 'Auto-FTPS number';
    var ph_New_order_number = '';
    var ph_Product_description = 'Product description';
    var ph_Customer_number = 'Customer number';
    var ph_Sale_number = 'CO #';
    var ph_Item_number = 'Item number';


    $('#Customer_name').attr('placeholder', ph_Customer_name);
    $('#new_order_number').attr('placeholder', ph_New_order_number);
    $('#Product_description').attr('placeholder', ph_Product_description);
    $('#Customer_number').attr('placeholder', ph_Customer_number);
    $('#Sale_number').attr('placeholder', ph_Sale_number);
    $('#Item_number').attr('placeholder', ph_Item_number);
    
    $('#PO_NUMBER').attr('placeholder', "Graphics PO#");
    $('#CA_FT_NPQ_NUMBER').attr('placeholder', "CA/FT/NPQ#");

    $('#Customer_name').focus(function () {
        $(this).attr('placeholder', '');
    });

    $('#Customer_name').blur(function () {
        $(this).attr('placeholder', ph_Customer_name);

    });

    $('#new_order_number').focus(function () {
        $(this).attr('placeholder', 'Auto-generating field');
    });

    $('#new_order_number').blur(function () {
        $(this).attr('placeholder', ph_New_order_number);

    });

    $('#Product_description').focus(function () {
        $(this).attr('placeholder', '');
    });

    $('#Product_description').blur(function () {
        $(this).attr('placeholder', ph_Product_description);

    });

    $('#Customer_number').focus(function () {
        $(this).attr('placeholder', '');
    });

    $('#Customer_number').blur(function () {
        $(this).attr('placeholder', ph_Customer_number);

    });

    $('#Sale_number').focus(function () {
        $(this).attr('placeholder', '');
    });

    $('#Sale_number').blur(function () {
        $(this).attr('placeholder', ph_Sale_number);

    });

    $('#Item_number').focus(function () {
        $(this).attr('placeholder', '');
    });

    $('#Item_number').blur(function () {
        $(this).attr('placeholder', ph_Item_number);

    });


    var ph_email_recipient = 'Name';
    $('#email_recipient').attr('placeholder', ph_email_recipient);
    $('#email_recipient').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#email_recipient').blur(function () {
        $(this).attr('placeholder', ph_email_recipient);

    });

    var ph_order_search = 'Quick search';
    $('#order_search').attr('placeholder', ph_order_search);
    $('#order_search').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#order_search').blur(function () {
        $(this).attr('placeholder', ph_order_search);

    });

    var ph_datepicker_due_new = 'Due date';
    $('#datepicker_due_new').attr('placeholder', ph_datepicker_due_new);
    $('#datepicker_due_new').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#datepicker_due_new').blur(function () {
        $(this).attr('placeholder', ph_datepicker_due_new);

    });

    var ph_datepicker_process = 'Processing time';
    $('#datepicker_process').attr('placeholder', ph_datepicker_process);
    $('#datepicker_process').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#datepicker_process').blur(function () {
        $(this).attr('placeholder', ph_datepicker_process);

    });
});