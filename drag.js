$(document).ready(function() {
  $('#myDIV').on('dragenter', preventDefault);
  $('#myDIV').on('dragover', preventDefault);
  $('#myDIV').on('drop', dropItem);
});

function preventDefault(e) {
  e.preventDefault();
}

function dropItem(e) {
  var files = e.originalEvent.dataTransfer.files,
      $table = $('#fileInfo'),
      $div = $('#fileInd'),
      i = 0;

  $table.html('<thead><tr><th>Name</th><th>Type</th><th>Size</th></tr></thead>');
  for (i = 0; i < files.length; i++) {
      $('<tr><td>' + files[i].name +
        '</td><td>' + files[i].type +
        '</td><td>' + files[i].size +
        '</td></tr>').appendTo($table);}
   $div.html() ;
  var path = files.location.pathname;
  var directory = path.substring(path.indexOf('/'), path.lastIndexOf('/'));
 document.getElementById("fileInd").innerHTML = path.appendTo($div); ;
     
  
  e.preventDefault();
}