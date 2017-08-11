$(document).ready(function () {
    
    

    //  var oFiles = document.getElementById("file_browse_btn").files;
    //  var nFiles = oFiles.length;
    //  alert(nFiles);

    //  for (var i = 0, numFiles = nFiles; i < numFiles; i++) {
    //     alert("oFiles["+i+"]");

    //  }

/*
    var inputElement = document.getElementById("file_browse_btn");
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
        var fileList = this.files; 
    
        alert(fileList[1]);
    }
*/

    $("#table_upload_list").on("click", "tr", function () {
//  alert($(this).text());
//   alert($(this).index());
//   $(this).css("background", "#99ccff");
//  $(this).css("color", "white");

        document.getElementById('table_upload_list').deleteRow($(this).index());
    });
    var emailbtn = document.getElementById('upload_btn');
    emailbtn.onclick = function () {

        //alert("upload");
        var data = "file name 1";
        table_file(data);
    };
    function table_file(data) {
        var tbl_email_list = document.getElementById('table_file_list');
        var tbdy_email_list = document.createElement('tbody');
        var row_email_list = tbl_email_list.insertRow(-1);
        var cell0_email_list = row_email_list.insertCell(0);
        cell0_email_list.innerHTML = data;
        tbl_email_list.appendChild(tbdy_email_list);
        var tbl_email_list = document.getElementById('table_upload_list');
        var tbdy_email_list = document.createElement('tbody');
        var row_email_list = tbl_email_list.insertRow(-1);
        var cell0_email_list = row_email_list.insertCell(0);
        cell0_email_list.innerHTML = data;
        tbl_email_list.appendChild(tbdy_email_list);
    }




// file upload js using jquery.form.js

    /*
     var bar = $('.bar');
     var percent = $('.percent');
     var status = $('#status');
     
     $('form').ajaxForm({
     beforeSend: function () {
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
     }
     });
     
     */







});