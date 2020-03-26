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
      url: "http://api.open-notify.org/iss-now.json",
      method: "GET",
      success: this.handleGetCoordsSuccess,
      error: this.handleGetCoordsError
    })
  }

  handleGetCoordsSuccess(results){
    this.latitude = results.iss_position.latitude;
    this.longitude = results.iss_position.longitude;
    console.log(this.latitude, this.longitude);
    this.issMap.createMap(this.latitude, this.longitude);
    this.getLocDeets();
  }

  handleGetCoordsError(error){
    console.error(error);
  }

  getLocDeets(){
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json",
      method: "GET",
      data: {
        latlng: `${this.latitude},${this.longitude}`,
        key: "AIzaSyDrfcCNcukCbWUX1qpoa6g42UOG7f0i550"
      },
      success: this.handleGetLocDeetsSuccess,
      error: this.handleGetLocDeetsError
    })
  }

  handleGetLocDeetsSuccess(results){
    console.log(results);
    this.locDeets.renderDeets(results, this.latitude, this.longitude);
  }

  handleGetLocDeetsError(error){
    console.error(error);
  }

  getPlaceDeets(placeCode){
    console.log(placeCode);
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    var request = {
      placeId: placeCode,
      fields: ["photo"]
    }
    service.getDetails(request, this.handleGetPlaceDeetsResults);
  }

  handleGetPlaceDeetsResults(results, status){
      console.log(results);
      console.log(status);
    var photos = results.photos;
    console.log(photos);

    if(!photos) {
      return;
    }

    var photoUrl = photos[0].getUrl({maxWidth: 400});

    this.locDeets.renderLocPhoto(photoUrl);

  }

}
