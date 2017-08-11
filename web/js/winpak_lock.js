
$(document).ready(function () {

    var btn_locked = document.getElementById("order_locked");
    btn_locked.onclick = function () {
        if ($("#new_order_number").val().trim() === "") {
            alert("Select an order");
            return;
        }

        //alert("locked fdf");
        $(this).css("display", "none");
        $("#order_unlocked").css("display", "block");

        //  alert($("#new_order_number").val() + ">>>>" + $("#LOCK_FLAG").val());

       


        // this is to lock, set LOCK_FLAG = 1;
        $.ajax({
            type: "GET",
            url: "set_lock_flag",
            data: {
                p_order_number: $("#new_order_number").val(),
                p_lock: "1",
                p_user: localStorage.user_name_signed_in
            },
            dataType: "jsonp",
            jsonp: "jsonp_test",
            beforeSend: function () {
                // $("#table_file_gif").show();
            },
            error: function () {
                alert('Can not retrieve jsonp data for lock');
            },
            complete: function () {
                // $("#table_file_gif").hide();
            },
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (k, v) {
                    if (v.j_set_lock !== "000000") {
                        // var dcr_modal = document.getElementById('dcr_div_modal');
                        //dcr_modal.style.display = "none";
                        //alert('order locked'); 
                        $("#upload_btn").prop('disabled', true);
                        $("#email_btn").prop('disabled', true);
                        $("#file_browse_btn").prop('disabled', true);
                        $("#email_list_btn").prop('disabled', true);
                        $("#new_order_btn").prop('disabled', true);
                        $(".primary_keys").prop('disabled', true);
                        $("#datepicker_due_new").prop('disabled', true);
                        $("#order_memo_area").prop('disabled', true);
                        $("#datepicker_process").prop('disabled', true);

                        $("#locked_by").val("Locked by: " + v.j_lock_user);


                        $("#header").css("background-color", "#EBEBE4");
                        $("#footer").css("background-color", "#EBEBE4");

                        $("#table_order_refresh").trigger("click");

                    } else {
                        alert('error locking order');
                    }
                });
            }
        });


    };

    var btn_unlocked = document.getElementById("order_unlocked");
    btn_unlocked.onclick = function () {
        if ($("#new_order_number").val().trim() === "") {
            return;
        }
        //alert("locked fdf");
        $(this).css("display", "none");
        $("#order_locked").css("display", "block");

        // alert($("#new_order_number").val() + ">>>>" + $("#LOCK_FLAG").val());

        // this is to unlock, set LOCK_FLAG = 0;
        $.ajax({
            type: "GET",
            url: "set_lock_flag",
            data: {
                p_order_number: $("#new_order_number").val(),
                p_lock: "0",
                p_user: localStorage.user_name_signed_in
            },
            dataType: "jsonp",
            jsonp: "jsonp_test",
            beforeSend: function () {
                // $("#table_file_gif").show();
            },
            error: function () {
                alert('Can not retrieve jsonp data for lock');
            },
            complete: function () {
                // $("#table_file_gif").hide();
            },
            success: function (data, textStatus, jqXHR) {
                $.each(data, function (k, v) {
                    if (v.j_set_lock !== "000000") {
                        // var dcr_modal = document.getElementById('dcr_div_modal');
                        //dcr_modal.style.display = "none";
                        //alert('order unlocked'); 
                        $("#upload_btn").prop('disabled', false);
                        $("#email_btn").prop('disabled', false);
                        $("#file_browse_btn").prop('disabled', false);
                        $("#email_list_btn").prop('disabled', false);
                        $("#new_order_btn").prop('disabled', false);
                        $(".primary_keys").prop('disabled', false);
                        $("#datepicker_due_new").prop('disabled', false);
                        $("#order_memo_area").prop('disabled', false);
                        $("#datepicker_process").prop('disabled', false);

                        $("#locked_by").val("Released by: " + v.j_lock_user);

                        $("#header").css("background-color", "#00A250");
                        $("#footer").css("background-color", "#00A250");

                        $("#table_order_refresh").trigger("click");
                    } else {
                        alert('error unlocking order');
                    }
                });
            }
        });
    };
});



