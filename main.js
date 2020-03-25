$(document).ready(initializeApp);

var mapElement = document.getElementById('map');

function initializeApp(){
  var issMap = new IssMap(mapElement)
  var app = new App(issMap);

  app.start();

}
