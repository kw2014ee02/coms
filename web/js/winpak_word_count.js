$(document).ready(function () {
    $("#dcr_txt_1").on('keyup', function () {
        var words = this.value.match(/\S+/g).length;
        if (words > 100) {
            // Split the string on first 200 words and rejoin on spaces
            //var trimmed = $(this).val().split(/\s+/, 100).join(" ");
            // Add a space at the end to keep new typing making new words
            //$(this).val(trimmed + " ");
        } else {
            $('#display_count').text(words);
            $('#word_left').text(100 - words);
        }
    });
});

function wordCount(val) {
    var wom = val.match(/\S+/g);
    return {
        charactersNoSpaces: val.replace(/\s+/g, '').length,
        characters: val.length,
        words: wom ? wom.length : 0,
        lines: val.split(/\r*\n/).length
    };
}
