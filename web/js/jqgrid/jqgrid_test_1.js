$(document).ready(function () {
    $("#jqGrid").jqGrid({
        url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
        mtype: "GET",
        datatype: "jsonp",
        colModel: [
            {label: 'OrderID', name: 'OrderID', key: true, width: 75, editable: true},
            {label: 'Customer ID', name: 'CustomerID', width: 150, editable: true},
            {label: 'Order Date', name: 'OrderDate', width: 150, editable: true},
            {label: 'Freight', name: 'Freight', width: 150, editable: true},
            {label: 'Ship Name', name: 'ShipName', width: 150, editable: true}
        ],
        viewrecords: true,
        width: 580,
        height: 250,
        rowNum: 20,
        pager: "#jqGridPager"
    });
    $("#jqGrid").jqGrid('navGrid', '#jqGridPager',
            {edit: true, add: true, del: true, search: true},
            {},
            {},
            {},
            {
                sopt: ['eq', 'ne', 'lt', 'gt', 'cn', 'bw', 'ew'],
                closeOnEscape: true,
                multipleSearch: true,
                closeAfterSearch: true}
    );

});