$(document).ready(function () {

    function handleFileSelect(evt) {

        //var tbl_email_list = document.getElementById('table_upload_list');
        while (document.getElementById('table_upload_list').rows.length > 0) {
            document.getElementById('table_upload_list').deleteRow(0);
        }

        var files = evt.target.files; // FileList object

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            var data = f.name;
            table_file(data);
        }

    }
    document.getElementById('file_browse_btn').addEventListener('change', handleFileSelect, false);

    function table_file(data) {

        /*
         var tbl_email_list = document.getElementById('table_file_list');
         var tbdy_email_list = document.createElement('tbody');
         var row_email_list = tbl_email_list.insertRow(-1);
         var cell0_email_list = row_email_list.insertCell(0);
         cell0_email_list.innerHTML = data;
         tbl_email_list.appendChild(tbdy_email_list);
         */
        
        
        
        var tbl_email_list = document.getElementById('table_upload_list');
        var tbdy_email_list = document.createElement('tbody');
        var row_email_list = tbl_email_list.insertRow(-1);
        var cell0_email_list = row_email_list.insertCell(0);
        cell0_email_list.innerHTML = data;
        tbl_email_list.appendChild(tbdy_email_list);
    }
});