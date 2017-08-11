$(document).ready(function () {

    $("#table_email_list").on("click", "tr", function () {
        //  alert($(this).text());
        //   alert($(this).index());
        //   $(this).css("background", "#99ccff");
        //  $(this).css("color", "white");

        document.getElementById('table_email_list').deleteRow($(this).index());

    });



    var emailbtn = document.getElementById('email_btn');
    emailbtn.onclick = function () {

        /*
         var tt=document.getElementById('menu_title_2').innerHTML.trim();
         alert(tt);
         if (tt==="Existing Order"){
         alert("Select an order");
         return;
         }
         else{
         alert("ready to send");
         }
         */
        if (localStorage.user_department_signed_in === undefined || localStorage.user_department_signed_in === null) {
            alert("Sign in first");
            return;
        }

        if (document.getElementById('menu_title_2').innerHTML.trim() === "Existing Order") {
            alert("Select an order");
            return;
        } else {
            var order_number_email = document.getElementById('menu_title_2').innerHTML.trim().substring(18, document.getElementById('menu_title_2').innerHTML.trim().length);
        }

        /*
         if (document.getElementById('table_email_list').rows.length <= 0) {
         alert("Add email address(es)");
         return; 
         }
         */


        var time_msg = document.getElementById('datepicker_process').value;
        // alert(time_msg);
        if (time_msg.trim() === '') {
            time_msg = "not specified";
        } else {
            // alert("time_msg is not empty");
        }
        //alert(time_msg);

        var email_symbol = '---';
        var subject = email_symbol + 'COMS Message ( ' + order_number_email + ' )' + email_symbol;
        var emailBody = email_symbol + "Following info generated from COMS" + email_symbol;
        emailBody = emailBody + '%0D%0A %0D%0A'
                // + "Customer name: " + $("#Customer_name").val() + '%09'  + '%09'  + '%09'

                + "Customer name: " + $("#Customer_name").val() + '%0D%0A'
                + 'Customer number: ' + $("#Customer_number").val() + '%0D%0A'

                + "Product description: " + $("#Product_description").val() + '%0D%0A'
                + 'CO number: ' + $("#Sale_number").val() + '%0D%0A'

                + "Order due date: " + $("#datepicker_due_new").val() + '%0D%0A'
                + 'Item number: ' + $("#Item_number").val() + '%0D%0A'

                // + "Product description: " + $("#Product_description").val() + '%0D%0A'
                + 'Graphics PO number: ' + $("#PO_NUMBER").val() + '%0D%0A'

                + 'CA/FT/NPQ number: ' + $("#CA_FT_NPQ_NUMBER").val() + '%0D%0A'
                
                +'%0D%0A %0D%0A'
                + 'To be replied by: ' + time_msg

                + '%0D%0A %0D%0A'
                + email_symbol + ' user message begins here : ' + email_symbol

                + '%0D%0A %0D%0A' + '%0D%0A %0D%0A';

        var email_address = '';


        $("#table_email_list td").each(function (i, row) {
            //alert($(this).html());
            email_address = email_address + $(this).html() + ";";
        });
        // alert(email_address);

        window.location = 'mailto:' + email_address + '?subject=' + subject + '&body=' + emailBody;

    };


    var emaillistbtn = document.getElementById('email_list_btn');
    emaillistbtn.onclick = function () {
        //alert("ggg");
        //var txt_area = $("#email_list");


        var email_list_value = $("#email_recipient").val();
        // txt_area.val(txt_area.val() + email_list_value + "\n");
        //alert(email_list_value);

        if (!email_list_value.trim()) {
            //alert("Enter an email");
        } else {
            tableCreate(email_list_value);
        }



    };



    function tableCreate(data) {
        var tbl_email_list = document.getElementById('table_email_list');
        var tbdy_email_list = document.createElement('tbody');
        var row_email_list = tbl_email_list.insertRow(-1);
        var cell0_email_list = row_email_list.insertCell(0);
        cell0_email_list.innerHTML = data;
        tbl_email_list.appendChild(tbdy_email_list);




        //tbl.style.width = '100%';
        // tbl.style.backgroundColor = "#bbf";
        //  tbl.setAttribute('border', '1');
        //tbl.setAttribute('tr:odd', 'odd');

        //   var orderArrayHeader = ["", "ID", "Name", "Email"];

        /*
         var thread = document.createElement('thread');
         var tr = document.createElement('tr');
         var th = document.createElement('th');
         th.appendChild(document.createTextNode("Lon"));
         th.appendChild(document.createTextNode("Lat"));
         tr.appendChild(th);
         thread.appendChild(tr);
         tbl.appendChild(thread);
         */


        /*
         var header = tbl.createTHead();
         var row = header.insertRow(0);
         var cell0 = row.insertCell(0);
         var cell1 = row.insertCell(1);
         cell0.innerHTML = "";
         cell1.innerHTML = "<b>Lat</b>";
         */

        /*
         var row = tbl.insertRow(-1);
         var cell0 = row.insertCell(0);
         var cell1 = row.insertCell(1);
         var cell2 = row.insertCell(2);
         
         //cell0.innerHTML = "Lat";
         cell1.innerHTML = "Lat";
         cell2.innerHTML = "Lon";
         */

        //  $.each(data, function (k_array, v_array) {
        //    $.each(k_array, function (k_object, v_object) {
        //      alert(v_object);
        //alert(element_object);



//alert("dd");
        //document.getElementById('tbl').rows[0].cells[1].colSpan = 0.5;
        // cell0.style.width = '2px';
        // cell1.style.width = '3px';
        // cell2.style.width = '10px';
        // cell3.style.width = '80px';


        //  });



        //  table_window.appendChild(tbl);

    }






});