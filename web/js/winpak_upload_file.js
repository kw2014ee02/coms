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

            var gg1 = document.getElementById('menu_title_2').innerHTML.trim().match(/\d+/)[0];

           // alert(document.getElementById('menu_title_2').innerHTML.trim().substring(16, 26));
           // return;


            //formData is the form array. We can push the password into the array before we submit the form.
            formData.push(
                    //  {name: 'password', value: 'password/variable'},
                            //  {name: 'username', value: 'username/variable'},
                            //{name: 'order_number', value: document.getElementById('menu_title_2').innerHTML.trim().substring(16, 26)}
                    {name: 'order_number', value: document.getElementById('menu_title_2').innerHTML.trim().match(/\d+/)[0]}
                    );
                },
        beforeSend: function (xhr) {
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
            //alert(document.getElementById('myonoffswitch').value);

            /*
             if ($("#myonoffswitch").is(':checked')) {
             alert("FTP");
             } else {
             alert("DCR");
             var dcr_modal = document.getElementById('dcr_div_modal');
             dcr_modal.style.display = "block";
             }
             */
            //   alert("/pdf/61120003/9.gif".fileExists());

            // var order_number_email = document.getElementById('menu_title_2').innerHTML.trim().substring(18, document.getElementById('menu_title_2').innerHTML.trim().length);
            //  alert(order_number_email);




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






            var file_exist_url = "pdf/";
            //file_exist_url = file_exist_url + document.getElementById('menu_title_2').innerHTML.trim().substring(18, document.getElementById('menu_title_2').innerHTML.trim().length);
            file_exist_url = file_exist_url + document.getElementById('menu_title_2').innerHTML.trim().match(/\d+/)[0];
            file_exist_url = file_exist_url + "/";


            var file_exist_flag = false;
            $('#table_upload_list tr').each(function () {
                /* */
                //alert($(this).find('td:first').text());
                var fn_existed = $(this).find('td:first').text();
                $.ajax({
                    type: 'HEAD',
                    //url: 'pdf/61120003/9.gif',
                    url: file_exist_url + $(this).find('td:first').text(),
                    async: false,
                    success: function () {
                        alert(fn_existed + ' exists already.');  // file exist                                
                        file_exist_flag = true;

                    },
                    error: function () {
                        // alert('ready to upload.');  // no file
                    }
                });
            });



            /* 
             var file_exist_flag = false;
             $.ajax({
             type: 'HEAD',
             //url: 'pdf/61120003/9.gif',
             url: file_exist_url + $(this).find('td:first').text(),
             async: false,
             success: function () {
             alert('File exists already.');  // file exist
             file_exist_flag = true;
             },
             error: function () {
             alert('ready to upload.');  // no file
             }
             });
             */

            //alert(file_exist_flag);
            if (file_exist_flag) {
                //return false;
                xhr.abort();
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