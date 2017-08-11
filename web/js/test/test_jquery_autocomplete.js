$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags,
        autocompleteClass: "first",
        focus: function (event, ui) {
            $("#tags").val(ui.item.label);
            return false;
        }
    });
    $("#tags").attr("placeholder", "Your Text Here");
});
// $('.ui-autocomplete-input').css('height','800px');


$(function () {
    $("#city_from_search").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "Controller",
                type: "GET",
                data: {
                    term: request.term
                },
                dataType: "json",
                success: function (data) {
                    response(data);
                }
            });
        },
        focus: function (event, ui) {
            $("#city_from_search").val(ui.item.label);
            return false;
        }
        //   appendTo: $("#search").next()
    });
    $("#city_from_search").attr("placeholder", "city where from, country");

});


$(function () {
    $("#city_to_search").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "Controller",
                type: "GET",
                data: {
                    term: request.term
                },
                dataType: "json",
                success: function (data) {
                    response(data);
                }
            });
        },
        focus: function (event, ui) {
            $("#city_to_search").val(ui.item.label);
            return false;
        }
        //   appendTo: $("#search").next()
    });
    $("#city_to_search").attr("placeholder", "city where to, country");
});