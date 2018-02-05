// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();

    var canvas = $('#pixelCanvas');
    canvas.empty();

    var color = getColor();

    var row;
    var cell;
    for (var i=0; i<height; i++) {
        row = $('<tr></tr>');

        for (var f=0; f<width; f++) {
            cell = $('<td></td>');
            cell.css('background-color', '#ffffff');
            cell.click(function() {
                $(this).css('background-color', getColor());
            })

            row.append(cell)
        }
        canvas.append(row)
    }
}

function getColor() {
    return $('#colorPicker').val();
}

$('#sizePicker').submit(function( event ) {
    makeGrid();
    event.preventDefault();
});
