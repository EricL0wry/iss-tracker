$(document).ready(initializeApp);

var mapElement = document.getElementById('map');
var refreshButton = document.getElementById('refresh-button');

function initializeApp(){
  var issMap = new IssMap(mapElement, refreshButton);
  var app = new App(issMap);

  app.start();

}
