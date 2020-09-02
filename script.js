function makeGrid() {
    //Better cleaning the canvas before anything
    $('#pixelCanvas').children().remove();

    //Receiving the values for height and width
    var height = $("#input_height").val();
    var width = $("#input_width").val();

    //Receiving table
    var table = $("#pixelCanvas");

    // Loop to build grid
    //This is still "fuzzy" check http://index-of.es/JS/Powers%20Sh.%20-%20JavaScript.Cookbook%20-%202010.pdf
    // Remember: 'i' & 'j' are the generic "counting variables"
    for (var i = 0; i < height; i++) {
        $('#pixelCanvas').append(`<tr id='width${i}'></tr>`);
        for (var j = 0; j < width; j++) {
            $(`#width${i}`).append('<td></td>');
        }
    }

    table.on("click", "td", function() {
        //Definition of color (in the color picker)
        var defColor = $("#colorPicker").val();
        //Coloring pixel on the table -> the background of the cells
        $(this).attr("bgColor", defColor);
    });
} //Closing of function makeGrid - It's not "lost" :D

//Prevent default value (defined in HTML) to make grid from start ofc
$("#button").on("click", function(evt) {
    evt.preventDefault();
    makeGrid();
    return false;
});
