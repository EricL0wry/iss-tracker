class App{
  constructor(issMap, locDeets){
    this.issMap = issMap;
    this.locDeets = locDeets;
    this.getIssCoords = this.getIssCoords.bind(this);
    this.handleGetCoordsError = this.handleGetCoordsError.bind(this);
    this.handleGetCoordsSuccess = this.handleGetCoordsSuccess.bind(this);
    this.getlocDeets = this.getLocDeets.bind(this);
    this.handleGetLocDeetsError = this.handleGetLocDeetsError.bind(this);
    this.handleGetLocDeetsSuccess = this.handleGetLocDeetsSuccess.bind(this);
    this.getPlaceDeets = this.getPlaceDeets.bind(this);
    this.handleGetPlaceDeetsResults = this.handleGetPlaceDeetsResults.bind(this);
  }

  start(){
    this.getIssCoords();
    this.issMap.onRefresh(this.getIssCoords);
    this.locDeets.handlePlaceDeets(this.getPlaceDeets);
  }

  getIssCoords(){
    $.ajax({
      url: "/api/iss-coords/",
      method: "GET",
      success: this.handleGetCoordsSuccess,
      error: this.handleGetCoordsError
    })
  }

  handleGetCoordsSuccess(results){
    this.latitude = results.iss_position.latitude;
    this.longitude = results.iss_position.longitude;
    this.issMap.createMap(this.latitude, this.longitude);
    this.getLocDeets();
  }

  handleGetCoordsError(error){
    console.error(error);
  }

  getLocDeets(){
    var latLng = `${this.latitude},${this.longitude}`;
    $.ajax({
      url: `/api/geocode/${latLng}`,
      method: "GET",
      success: this.handleGetLocDeetsSuccess,
      error: this.handleGetLocDeetsError
    })
  }

  handleGetLocDeetsSuccess(results){
    this.locDeets.renderDeets(results, this.latitude, this.longitude);
  }

  handleGetLocDeetsError(error){
    console.error(error);
  }

  getPlaceDeets(placeCode){
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    var request = {
      placeId: placeCode,
      fields: ["photo"]
    }
    service.getDetails(request, this.handleGetPlaceDeetsResults);
  }

  handleGetPlaceDeetsResults(results, status){
    var photos = results.photos;

    if(!photos) {
      return;
    }

    var randomIndex = Math.floor(Math.random() * Math.floor(photos.length));
    var photoUrl = photos[randomIndex].getUrl({maxWidth: 400});

    this.locDeets.renderLocPhoto(photoUrl);
  }
}
