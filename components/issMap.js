class IssMap{
  constructor(mapElement){
    this.mapElement = mapElement;
    this.latitude = null;
    this.longitude = null;
    this.iss = null;
    this.map = null;
    this.createMap = this.createMap.bind(this);
  }

  createMap(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;

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
