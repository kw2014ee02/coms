$(document).ready(function () {
    $("#jqGrid").jqGrid({
        url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
        mtype: "GET",
        datatype: "jsonp",
        colModel: [
            {label: 'OrderID', name: 'OrderID', key: true, width: 85},
            {label: 'Customer ID', name: 'CustomerID', width: 150},
            {label: 'Order Date', name: 'OrderDate', width: 150},
            {label: 'Freight', name: 'Freight', width: 150},
            {label: 'Ship Name', name: 'ShipName', width: 150}
        ],
        viewrecords: true,
        width: 780,
        height: 250,
        rowNum: 20,
        rownumbers: true,
        caption: 'Shipping Requests 3',
        pager: "#jqGridPager",
        //multiselect: true,
        multiselect: true, 
        jsonReader: {
            repeatitems: false
        },
        loadComplete: function () {
            //  $("tr.jqgrow:odd").css("background", "#E0E0E0");
            //  $("tr.jqgrow:even").css("background", "#purple");
        }
    });

});