$(document).ready(function () {
    $("#table_file_list").on("click", "tr", function () {

        /*
         var cell_value = [];
         var cell = $(e.target).get(0);        
         //  alert(cell);
         $('td', $(this)).each(function (i, td) {
         cell_value[i] = $(td).text();
         //alert(cell_value[i]);
         if ($(td).text() === "X") {
         alert(cell_value[2]);
         }
         
         });
         */
        return;

        //   $(this).css("background", "#99ccff");
        //  $(this).css("color", "white");

        // document.getElementById('table_file_list').deleteRow($(this).index());

        // window.open("pdf/0626997.pdf");
        //    window.open("C:/Users/w15rdknl/Documents/NetBeansProjects/winpak/build/web/pdf/0626997.pdf");
        // window.open($(this).find('td').siblings(":first").text());

        // var opt_selected = $('#type_select_menu').find(":selected").val();            

        var opt_selected = document.getElementById('type_select_menu').value;
        // alert(opt_selected);
        if (opt_selected.length < 10) {   // Templates is selected
            if ($(this).index() === 0) {
                window.open($(this).find('td').siblings(":first").text());
            } else {
                window.open("pdf/original/" + $(this).find('td:first').text());
            }
        } else {
            // alert("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).find('td:first').text());
            window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).find('td:first').text());
        }

        //   window.open("pdf/original/" + $(this).find('td:first').text());

    });




    $("#table_file_list").on("click", "td", function () {

        /**/
        var opt_selected = document.getElementById('type_select_menu').value;

        var arr = [1, 5, 30];  //toggle row /parent row
        // alert($(this).next().text());
         alert($(this).parent().index());
        //    alert($(this).text());


        if (opt_selected.length < 10) {  // Templates is selected




            // if (jQuery.inArray($(this).parent().index(), arr) !== -1) {
            //     $(this).parent().nextUntil('tr:not(.child-row-class)').toggle();
            var clicked_text = $(this).text();
            if ($(this).text() === "61002- Credit Application" || $(this).text() === "61003- Die Drawing") {
                //$(this).parent().nextUntil('tr:not(.child-row-class)').toggle();
                //  alert($(this).closest('tr').text());
                alert($(this).closest('tr').prevAll().length);

var i=0;
                $('#table_file_list tr').each(function () {
                    i=i+1;
                    if ($(this).find("td:first").text() === clicked_text) {
                      //  alert($(this).find("td:first").text());
                        alert(i);
                        $(this).next().toggle();
                    }
                });
                /*
                 var rows = document.getElementById('table_file_list').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
                 for (i = 0; i < rows.length; i++) {
                 if (rows[i].find('td').siblings(":first").text() === $(this).text()) {
                 alert(i + 1);
                 }
                 }
                 */


                $(this).closest('tr').nextUntil('tr:not(.child-row-class)').toggle();
            } else {

                if ($(this).index() === 0) {
                    //if ($(this).parent().index() === 0) {
                    if ($(this).text() === "61001- Fast Track") {
                        window.open($(this).next().text());
                    } else {
                        var old_name = $(this).text();
                        old_name = old_name.replace(/\▪./g, '$');

                        // window.open("pdf/original/" + $(this).text());
                        window.open("pdf/original/" + old_name);
                    }
                }
            }
        } else {                    // Production is selected
            if ($(this).index() === 0) {
                window.open("pdf/" + opt_selected.substring(13, 21) + "/" + $(this).text());
            } else if ($(this).index() === 2) {
                alert("going to delete");
            }
        }
        //  alert($(this).index());



        // alert($(this).find('td:first').text());
        // alert($(this).find('td').siblings(":first").text());
        //  alert($(this).find('td').siblings(":first").next().text());
    });

});





