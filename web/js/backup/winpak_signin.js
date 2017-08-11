$(document).ready(function () {
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn_signin = document.getElementById("sign_in");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var btn_cancel = document.getElementById("cancel");

    var btn_login = document.getElementById("loginbtn");

    var btn_logout = document.getElementById("log_out");


    // When the user clicks the button, open the modal
    btn_signin.onclick = function () {
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            //  modal.style.display = "none";
        }
        ;
    };

    btn_cancel.onclick = function () {
        modal.style.display = "none";
    };


    btn_login.onclick = function () {
        // alert("login button 67567678!!");
        //  alert($("#username").val());      
        // var name = "dad";
        $.ajax({
            type: "GET",
            // url: "Item_in_transit_by_jsonp",
            url: "http://localhost:8080/winpak/user_signin",
            data: {
                name: $("#username").val(),
                pwd: $("#password").val()
            },
            dataType: "jsonp",
            jsonp: "jsonp_test", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //jsonpCallback: "?", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            //jsonpCallback: "myjsonpcallbacknameinalllowercase",
            beforeSend: function () {
                $(".loading").html("数据加载中.");
            },
            error: function () {
                alert('Can not retrieve jsonp data');
            },
            complete: function () {

                $("#tbl tr").hover(
                        function () {
                            $(this).css("background", "yellow");
                            $(this).css("color", "black");
                        },
                        function () {
                            $(this).css("background", "");
                        }
                );

                $("#tbl tbody tr:odd").addClass("odd");
                $("#tbl tbody tr:even").addClass("even");



            },
            success: function (data, textStatus, jqXHR) {

                var count = Object.keys(data).length;
                if (count === 0) {
                    //alert("Wrong login");
                    $("#login_msg").show();
                } else {
                    //   alert("login good 1");
                    //  alert("login good 2");
                    modal.style.display = "none";
                    $("#sign_in").hide();

                    $.each(data, function (k, v) {
                        //   alert(v.ID);
                        $('#signed_user').text(v.NAME);
                    });
                    
                    $("#signed_user").show();
                    $("#log_out").show();
                }





            }
        });
    };

    document.getElementById("password")
            .addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    document.getElementById("loginbtn").click();
                    //alert("daa");
                }
            });

    document.getElementById("username")
            .addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    document.getElementById("loginbtn").click();
                    //alert("daa");
                }
            });


    btn_logout.onclick = function () {
        $("#sign_in").show();
        $("#signed_user").hide();
        $("#log_out").hide();
        $("#login_msg").hide();
    };


    $("#sign_in").click(function () {
        //alert("gfh");
        // $("#myModal").css("display", "block");


        // modal.style.display = "block";

    });

    $("#login #cancel").click(function () {
        //alert("login cancell");
        // $(this).parent().hide();
        //  $("#mask").css("display", "none");

    });

    $("#test_2").click(function (e) {
        //   alert("goooo");

    });

});


