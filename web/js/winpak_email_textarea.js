$(document).ready(function () {
    /*
     var emailbtn = document.getElementById('email_btn');
     emailbtn.onclick = function () {
     var str1 = document.getElementById('email_recipient').value;
     //window.location.href = "mailto:" + str1 + "?subject=Mail to " + str1;
     
     var email_symbol = '---';
     var email_address = document.getElementById('email_recipient').value;
     var subject = email_symbol + 'First Time Print Project System Message' + email_symbol;
     var emailBody = email_symbol + 'Following info generated from First Time Print System' + email_symbol;
     window.location = 'mailto:' + email_address + '?subject=' + subject + '&body=' + emailBody;
     };
     */

    var emaillistbtn = document.getElementById('email_list_btn');
    emaillistbtn.onclick = function () {
        //alert("ggg");
        var txt_area = $("#email_list");
        var email_list_value = $("#email_recipient").val();
        txt_area.val(txt_area.val() + email_list_value + "\n");

        //document.getElementById('email_list').value = document.getElementById('email_list').value + "\ndasdasdasd\n" + "dsadsaf";
        //document.getElementById('email_list')
    };

    var emailbtn = document.getElementById('email_btn');
    emailbtn.onclick = function () {

        var email_symbol = '---';
        var subject = email_symbol + 'First Time Print Project System Message' + email_symbol;
        var emailBody = email_symbol + 'Following info generated from First Time Print System' + email_symbol;


        var email_address = '';
        $("#email_list").each(function () {
            //this.value = this.value.replace("winpak", "gmail");

            if (typeof email_address === 'undefined') {
                alert("undefined");
            }
            if (!email_address) {
                // alert("2");             
            }
            if (!email_address.trim()) {
                // is empty or whitespace
                //alert("Email address is null");
                //return;

                email_address = this.value;
            } else
            {
                email_address = email_address + this.value;

            }


        });
        email_address = email_address.replace(/\r\n|\r|\n/g, ";");
        //alert(email_address);
        window.location = 'mailto:' + email_address + '?subject=' + subject + '&body=' + emailBody;

    };






});