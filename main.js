$(document).ready(initializeApp);

var mapElement = document.getElementById('map');
var refreshButton = document.getElementById('refresh-button');
var deetsElement = document.getElementById('details-table');
var app;
var issMap;

function initializeApp(){
  var locDeets = new LocDeets(deetsElement)
  issMap = new IssMap(mapElement, refreshButton);
  app = new App(issMap, locDeets);

  app.start();

}
