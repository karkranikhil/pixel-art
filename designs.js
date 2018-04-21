
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid(event) {
$('table tr').remove();                          
const rows=$('#inputHeight').val();  // Selecting the number of rows               
const columns=$('#inputWeight').val(); // Selecting the number of columns          
for (let i=1;i<=rows;i++) {
    $('table').append("<tr></tr>");
    for (let j=1;j<=columns;j++) {
      $( 'tr:last').append("<td></td>");         
      $('td').attr('class','pixel');
    }
  }
  event.preventDefault();                       
});
$('#pixelCanvas').on('click','.pixel',function(){  
    let colourSelected=$('#colorPicker').val(); // Selecting the color input
    $(this).css('background-color',colourSelected); // applying color to the selected box
});