$(document).ready(function () {
    var bar = $('.bar');
    var percent = $('.percent');
    var status = $('#status');
    
    $('.progress').hide();
   
    $("#myFormId").ajaxForm({
        /*
        data: {
            key3: localStorage.order_number
        },
        */
        dataType: "application/x-www-form-urlencoded",
        beforeSubmit: function (formData, formObject, formOptions) {
            //formData is the form array. We can push the password into the array before we submit the form.
            formData.push(
                  //  {name: 'password', value: 'password/variable'},
                  //  {name: 'username', value: 'username/variable'},
                    {name: 'order_number', value: document.getElementById('menu_title_2').innerHTML.trim().substring(18, 26)}
            );
        },
        beforeSend: function () {
/*
            var ses_1 = document.getElementById('menu_title_2').innerHTML.trim().substring(18, 26);
            // alert(test11);
            // alert(document.getElementById("opt_2").text);
            //  alert(document.getElementById('menu_title_2').innerHTML.trim());
            // .substring(18, 26);


            if (localStorage.order_number === undefined || localStorage.order_number === null || localStorage.order_number !== ses_1) {
                localStorage.order_number = ses_1;
                // alert(" sessionStorage.order_number is:  " + sessionStorage.order_number);
            }

*/

            /*
             var name = $("#h_1").attr("name");
             $('#h_1').attr('name', 'other_amount');
             name = $("#h_1").attr("name");
             */


            if (localStorage.user_department_signed_in === undefined || localStorage.user_department_signed_in === null) {
                alert("Sign in first");
                return false;
            }
            if (document.getElementById('menu_title_2').innerHTML.trim() === "Existing Order") {
                alert("Select an order");
                return false;
            }
            if (document.getElementById('table_upload_list').rows.length <= 0) {
                alert("Select file(s)");
                return false;
            }

            $('.percent').show();
            $('.progress').show();
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
            //$('.progress').hide( "slow");
            // setTimeout("document.getElementBy('progress').className='';", 2000);

            setTimeout(function () {
                $('.percent').hide();
            }, 1000);
            setTimeout(function () {
                $('.progress').hide(2000);
            }, 1000);
            
            $("#type_select_menu").val(document.getElementById("opt_2").text).change();
        }
    });
});