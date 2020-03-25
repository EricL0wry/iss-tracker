class App{
  constructor(mapElement){
    this.mapElement = mapElement;
    this.getIssCoords = this.getIssCoords.bind(this);
    this.handleGetCoordsError = this.handleGetCoordsError.bind(this);
    this.handleGetCoordsSuccess = this.handleGetCoordsSuccess.bind(this);
    this.createMap = this.createMap.bind(this);
    // this.latitude = null;
    // this.longitude = null;
    // this.iss = null;
    // this.map = null;
    // this.issMarker = null;
  }

  start(){
    this.getIssCoords();
  }

  getIssCoords(){
    $.ajax({
      url: "http://api.open-notify.org/iss-now.json",
      method: "GET",
      success: this.handleGetCoordsSuccess,
      error: this.handleGetCoordsError
    })
  }

  handleGetCoordsSuccess(results){
    this.latitude = results.iss_position.latitude;
    this.longitude = results.iss_position.longitude;
    this.createMap();
  }

  handleGetCoordsError(error){
    console.error(error);
  }

  createMap(){
    console.log(this.latitude, this.longitude);
    this.iss = new google.maps.LatLng(this.latitude, this.longitude);

    this.map = new google.maps.Map(this.mapElement, {
      zoom: 4,
      center: this.iss
    });

    this.issMarker = new google.maps.Marker({
      position: this.iss,
      map: this.map
    });
  }
}
