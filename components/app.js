class App{
  constructor(issMap){
    // this.mapElement = mapElement;
    this.issMap = issMap
    this.getIssCoords = this.getIssCoords.bind(this);
    this.handleGetCoordsError = this.handleGetCoordsError.bind(this);
    this.handleGetCoordsSuccess = this.handleGetCoordsSuccess.bind(this);
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
    console.log(this.latitude, this.longitude);
    this.issMap.createMap(this.latitude, this.longitude);
  }

  handleGetCoordsError(error){
    console.error(error);
  }

}
