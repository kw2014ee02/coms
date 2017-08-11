divs = "mydiv";
$(document).ready(function () {
    $("#myButton_jsonp").click(function () {
        //e.preventDefault();
        var name = "dad";
        $.ajax({
            type: "GET",
           // url: "Item_in_transit_by_jsonp",
            url: "http://localhost:8080/WebApplication4/Item_in_transit_by_jsonp",
            data: {
                name: name
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

                // $("tr").not(':first').hover(
                $("#tbl tr").hover(
                        function () {
                            $(this).css("background", "yellow");
                            $(this).css("color", "black");
                        },
                        function () {
                            $(this).css("background", "");
                        }
                );

                //    $("#myTable tbody tr:odd").addClass("odd");
                //   $("#myTable tbody tr:even").addClass("even");

                $("#tbl tbody tr:odd").addClass("odd");
                $("#tbl tbody tr:even").addClass("even");


                //$( "#grid-basic" ).colResizable({ disable : true });
                //$("#grid-basic").colResizable({liveDrag: true});

                /*
                 $('#tbl td').each(function () {
                 var min = 1;                                  // Define a minimum
                 var step = 5 * $(this).index();                // Define Step(your step is 5 here)
                 $(this).css('width', (min + step) + "px");     // css attribute of your <td> width:15px; i.e.
                 });
                 */



            },  
            success: function (data, textStatus, jqXHR) {
                /*
                 var htmlStr = '';
                 // var table = $("#table");
                 var table = $("#myTable");
                 table.empty();
                 table.append('<tr><th></th><th>序列号23</th><th>经度</th><th>维度</th><th>时间范围</th></tr>');
                 $.each(data, function (k, v) {
                 htmlStr += k + ": " + "ID is->" + v.Eno + ' ' + v.Lat + ' ' + v.Lon + '<br />';
                 table.append('<tr><td></td><td>' + v.Eno + '</td>' + '<td>' + v.Lat + '</td>' + '<td>' + v.Lon + '</td></tr>');
                 //table.append('<tr><td>' + v.Eno + '</td>' + '<td>' + v.Lat + '</td>' + '<td>' + v.Lon + '</td></tr>');
                 
                 });
                 $("#" + divs).html(htmlStr);
                 */
                //alert(data);
                tableCreate(data);


                /*
                 var table = document.getElementById("myTable");
                 $.each(data, function (k, v) {
                 //htmlStr += k + ": " + "ID is->" + v.Eno + ' ' + v.Lat + ' ' + v.Lon + '<br />';
                 //table.append('<tr><td></td><td>' + v.Eno + '</td>' + '<td>' + v.Lat + '</td>' + '<td>' + v.Lon + '</td></tr>');
                 //table.append('<tr><td>' + v.Eno + '</td>' + '<td>' + v.Lat + '</td>' + '<td>' + v.Lon + '</td></tr>');
                 
                 //var row = table.insertRow(0);
                 var row = table.insertRow(-1);
                 var cell1 = row.insertCell(0);
                 var cell2 = row.insertCell(1);
                 // var cell3 = row.insertCell(2);
                 
                 cell1.innerHTML = v.Lat;
                 cell2.innerHTML = v.Lon;
                 //     cell3.innerHTML = v.Eno;
                 
                 
                 });
                 */

                /*
                 var table = document.getElementById("myTable");
                 $.each(data, function (k, v) {
                 //htmlStr += k + ": " + "ID is->" + v.Eno + ' ' + v.Lat + ' ' + v.Lon + '<br />';
                 //table.append('<tr><td></td><td>' + v.Eno + '</td>' + '<td>' + v.Lat + '</td>' + '<td>' + v.Lon + '</td></tr>');
                 //table.append('<tr><td>' + v.Eno + '</td>' + '<td>' + v.Lat + '</td>' + '<td>' + v.Lon + '</td></tr>');
                 
                 //var row = table.insertRow(0);
                 var row = table.insertRow(-1);
                 
                 for (i = 0; i < table.rows[0].cells.length; i++) {
                 createCell(row.insertCell(i), v.Lat, 'even');
                 }
                 });
                 */

            }
        });
    });




});


// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('p'), // create DIV element
            txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    // div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell

}


function tableCreate(data) {
    // var body = document.getElementsByTagName('main')[0];

    // var table_window = document.getElementById("main");
    // var tbl = document.createElement('table');
    var tbl = document.getElementById('tbl');
    //tbl.style.width = '100%';
    // tbl.style.backgroundColor = "#bbf";
    //  tbl.setAttribute('border', '1');
    //tbl.setAttribute('tr:odd', 'odd');

    var orderArrayHeader = ["", "No.", "Lat", "Lon"];
    var thead = document.createElement('thead');

    tbl.appendChild(thead);

    for (var i = 0; i < orderArrayHeader.length; i++) {
        thead.appendChild(document.createElement("th")).
                appendChild(document.createTextNode(orderArrayHeader[i]));
    }
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
    var tbdy = document.createElement('tbody');

    /*
     var row = tbl.insertRow(-1);
     var cell0 = row.insertCell(0);
     var cell1 = row.insertCell(1);
     var cell2 = row.insertCell(2);
     
     //cell0.innerHTML = "Lat";
     cell1.innerHTML = "Lat";
     cell2.innerHTML = "Lon";
     */

    $.each(data, function (k, v) {
        var row = tbl.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);



//alert("dd");
        //document.getElementById('tbl').rows[0].cells[1].colSpan = 0.5;
        // cell0.style.width = '2px';
        // cell1.style.width = '3px';
        // cell2.style.width = '10px';
        // cell3.style.width = '80px';

        cell1.innerHTML = v.Number;
        cell2.innerHTML = v.Lat;
        cell3.innerHTML = v.Lon;
    });


    // tbdy.appendChild(tr);

    tbl.appendChild(tbdy);
    //  table_window.appendChild(tbl);

}


function GetStudentJson(json) {
    //alert(json);
}