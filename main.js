$(document).ready(initializeApp);

var mapElement = document.getElementById('map');

function initializeApp(){
  var app = new App(mapElement);

  app.start();

}
